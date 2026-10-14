# Novarge Alaaddin’in Lambası örnek uygulamaları

Bu üç örnek standart HTML/CSS/JS ile tarayıcıda çalışır. API veya üyelik gerekmez. Kurgusal veri kullanın.

## Açma
Paket kökünde `node serve.mjs` çalıştırın. Tarayıcıda http://127.0.0.1:4173/examples/ogrenme.html, /examples/rapor.html veya /examples/takip.html adresini açın.

HTML dosyasını doğrudan açmak da mümkündür; dosya URL’si üzerinde tarayıcı depolaması ve indirme davranışı değişebilir. HTTP üzerinden deneyip yayında tekrar doğrulayın.

## Dosyalar
- ogrenme.html / ogrenme.js: 5 soru, geri bildirim, puan ve yeniden başlatma.
- rapor.html / rapor.js: CSV analiz ekranı, hata listesi, temiz CSV ve rapor indirme.
- takip.html / takip.js: yerel kayıt ekleme, düzenleme, silme/geri alma, Türkçe arama ve durum filtresi.
- csv-core.js: CSV okuma, alan doğrulama, mutabakat ve rapor hesabı.
- sample.js: 10 geçerli, 13 satırlık hatalı kurgusal veri.
- demo.css: üç örneğin ortak tasarımı.

## Sınırlar
Takip örneği yalnızca tek tarayıcının localStorage alanında çalışır. Gerçek Auth, çok kullanıcılı veritabanı, RLS veya bulut otomasyonu içermez. Yerel rapor aracı dosyayı sunucuya göndermez. İleri rota için rehberde Supabase ve gerçek kullanıcı oturumuyla erişim testlerini uygulayın.

## Kontrol değerleri
Geçerli veri: 10 kayıt; yeni=3, devam=4, tamamlandı=3; puan toplamı=655, ortalama=65,5.
Hatalı veri: 13 giriş; 10 kabul; tekrar K001, boş ad K011 ve puan 140 K012 nedeniyle 3 ret.

Tam yapım rehberi: https://gencbeyinlernet.github.io/alaattinklavuz/#atolyeler
