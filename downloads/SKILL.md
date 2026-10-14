---
name: egitim-haftalik-rapor
description: Yetkilendirilmiş eğitim klasöründeki kurgusal kayıt CSV dosyasından doğrulanabilir haftalık durum raporu üretmek için kullanılır.
---

# Haftalık eğitim raporu

## Girdi sözleşmesi
Kullanıcıdan kaynak CSV yolunu, çıktı klasörünü ve dönem adını al. Beklenen sütunlar kod, ad, alan, durum, tarih, puan. Yalnızca kurgusal veri kullanılır.

## Yöntem
1. Çalışma klasörü ve erişim kapsamını kontrol et. Kaynakları salt okunur incele.
2. Zorunlu sütun eksikse dur ve eksik alanı bildir. Veri uydurma.
3. Durum yeni/devam/tamamlandi, tarih ISO 8601, puan boş veya 0–100 olmalıdır. Yinelenen kodları işaretle.
4. Kaynağı değiştirmeden temiz-kayitlar-[dönem].csv ve veri-kalite-[dönem].md oluştur.
5. Durum sayılarını, toplamı ve geçerli puan ortalamasını hesapla. Boş puanı sıfır sayma; ortalama paydasını yaz.
6. Aynı dönem tekrar çalışırsa yinelenen çıktı üretme. Önceki çıktı üzerine yazmak için kullanıcının belirtilen güncelleme politikasını uygula; politika yoksa değişiklik önerisini göster.
7. haftalik-rapor-[dönem].md dosyasında hesap yöntemi, kaynak sütunları, hata sayısı ve insan incelemesi gereken konuları yaz.
8. Hiçbir kişiye mesaj gönderme veya dosya paylaşma.

## Doğrulama
Girdi satırları = kabul edilen + reddedilen satırlar. Durum toplamı = kabul edilen satırlar. Ortalamayı bağımsız hesapla. Eksik veri, bağlantı hatası veya kaynak yoksa hata raporu üret; başarılı gibi davranma.

## Çıktı biçimi
Amaç ve dönem, kaynak dosya, özet sayılar, veri kalite sorunları, işlem günlüğü, sınırlar ve sonraki adım. Parola, token veya gerçek kişi verisi rapora yazılmaz.
