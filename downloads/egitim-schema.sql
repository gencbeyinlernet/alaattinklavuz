-- Yalnızca yeni, boş Supabase eğitim projesinde kullanın.
-- Tablonun mevcut olması hâlinde durun; mevcut veriyi silmeyin.
-- Hesaplar Supabase Auth üzerinden oluşturulur. Gerçek kişi verisi eklemeyin.
begin;
create table public.egitim_kayitlari (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  kod text not null check (length(trim(kod)) between 1 and 32),
  ad text not null check (length(trim(ad)) between 1 and 80),
  alan text not null default 'egitim' check (length(alan) <= 80),
  durum text not null default 'yeni' check (durum in ('yeni','devam','tamamlandi')),
  tarih date not null default current_date,
  puan integer check (puan between 0 and 100),
  created_at timestamptz not null default now(),
  unique (owner_id, kod)
);
create index egitim_kayitlari_owner_idx on public.egitim_kayitlari(owner_id);
alter table public.egitim_kayitlari enable row level security;
revoke all on public.egitim_kayitlari from anon;
grant select, insert, update, delete on public.egitim_kayitlari to authenticated;
create policy "sahibi_okur" on public.egitim_kayitlari for select to authenticated
  using ((select auth.uid()) = owner_id);
create policy "sahibi_ekler" on public.egitim_kayitlari for insert to authenticated
  with check ((select auth.uid()) = owner_id);
create policy "sahibi_gunceller" on public.egitim_kayitlari for update to authenticated
  using ((select auth.uid()) = owner_id)
  with check ((select auth.uid()) = owner_id);
create policy "sahibi_siler" on public.egitim_kayitlari for delete to authenticated
  using ((select auth.uid()) = owner_id);
commit;

-- Testleri SQL Editor/service_role ile değil gerçek kullanıcı oturumuyla yapın.
-- A: kendi kaydını ekler/okur/günceller/siler.
-- B: A kaydını doğrudan id ile okuyamaz/güncelleyemez/silemez.
-- B: owner_id=A ile kayıt ekleyemez ve kendi kaydını A'ya devredemez.
-- Anonim: SELECT/INSERT/UPDATE/DELETE reddedilir.
-- Test sonucunu kaydedin. Bu şablon çalıştırılmış güvenlik kanıtı değildir.
