# Eğitmen uygulama rehberi

## Eğitim amacı ve kapsam
Kaynak programın 10 modülü 5 güne yayılır. Her gün 360 dakika net oturum vardır. Eğitim 09.00–16.30 arasında yürütülür; 10.45 ve 14.00 molaları 15'er dakika, öğle arası 60 dakikadır. Günlük ev çalışması yaklaşık 30 dakika, toplam 30 saate ek olarak planlanır.

## Eğitimden en az 3 gün önce
- Katılımcıların bilgisayar, internet, dosya yönetimi ve hesap erişimini kontrol edin.
- Claude Code/Cowork/Design ve Office özelliklerini katılımcının planında doğrulayın. Ücretli hesap satın almayı sessizce zorunlu tutmayın; eksik erişim için alternatif rota hazırlayın.
- GitHub ve boş eğitim veritabanı erişimini önceden deneyin.
- Yeni eğitim klasörleri ve kurgusal dosyalar hazırlayın; gerçek öğrenci, müşteri veya kurum belgesi dağıtmayın.
- Bu sitenin Kaynaklar bölümünden şablonları indirin. Ağ kesintisine karşı Markdown rehberini hazır tutun.
- Ön testin dört sorusunu hazırlayın; başlangıç yanıtlarını son günle karşılaştırın.

## Sınıf yönetimi
15–20 katılımcıda bir yardımcı eğitmen önerilir. Bu bir planlama önerisidir, kurum şartı değildir. Karma seviyede ikili çalışma yapın; bir katılımcı üretir, diğeri kabul ölçütlerini doğrular, sonra rol değişir. Hızlı katılımcıya kapsam büyütmek yerine olumsuz test ve dokümantasyon görevi verin.

## Günlük öğretim döngüsü
1. Hedefi ve günün teslimini gösterin.
2. 10–15 dakikalık canlı örnekte bir hata durumunu da gösterin.
3. Uygulamayı küçük adımlarla yaptırın; promptu kopyalamadan önce bağlam ve sınırları tartıştırın.
4. Öğrenenlerden sonucu bağımsız kontrol etmelerini isteyin.
5. Çıktı, test ve sınırlamaları birlikte teslim alın. Çıkış biletinde bir öğrenme, bir hata ve bir sonraki adım bulunsun.

## Alternatif rotalar
- Code erişimi yok: Chat briefi, yerel HTML veya Artifacts; Git deneyi eğitmen gösterimiyle desteklenir.
- Cowork/connector yok: yerel kopya dosya ve örnek JSON; gerçek erişim varmış gibi gösterilmez.
- Scheduled yok: aynı görev elle iki kez çalıştırılır; zamanlama tasarım dosyası teslim edilir.
- Dispatch yok: bulut görev veya manuel kontrol. Yeni kullanıcılarda Dispatch zorunlu değildir.
- Design/Office eklentisi yok: HTML/CSS, CSV, Markdown ve sunum taslağı.
- Supabase yok: mock API. Bu rota veritabanı güvenlik deneyinin tamamlandığı anlamına gelmez; rubrikte kanıt bulunmayan bölüm tamamlandı sayılmaz.

## Güvenlik uygulaması
Her gün kaynak ve çıktı ayrımını, yetki sınırlarını ve dış içerikteki talimatları konuşun. Silme, paylaşma ve yayınlama hedeflerini inceletin. İki hesap RLS testini sunucu anahtarıyla yaptırmayın. Anahtar sızarsa yalnızca dosyayı silmek yeterli değildir; iptal/yenileme ve geçmiş inceleme gerekir. Gerçek kişisel veri veya ödeme içeren ürün için uzman desteği planlatın.

## Değerlendirme
Site rubriği toplam 100 puandır. Kanıt yok: 0. Kısmi davranış/eksik kanıt: yaklaşık yarı. Tüm ölçütler testle doğrulanmış: tam. Ön ve son bilgi testi toplam 8 puan, proje notundan ayrı tutulur. Günlük mini testler gelişim amaçlıdır. Rehber resmî sertifika üretmez.

## Final oturumu
3 dk demo + 2 dk soru-cevap. 18 katılımcı 90 dk'ya sığar; daha büyük gruplarda paralel değerlendirme masaları veya grup projeleri kullanın. Simüle edilen özellikleri açıkça etiketletin. Canlı URL ve erişim kanıtını ayrı kontrol edin.

## Eğitim sonrası
7. gün pilot, 14. gün geri bildirim düzeltmesi, 21. gün tanıtım atölyesi, 30. gün kullanım/hata/maliyet değerlendirmesi. Mesaj ve duyuru metinleri paylaşılmadan önce kullanıcı tarafından incelenir; bu rehber mesaj göndermez.
