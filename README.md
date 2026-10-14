# Yapay Zekâ Ajanlarıyla Uygulama Geliştirme

Claude-Eğitim.docx programının 10 modülünden geliştirilen 5 günlük uygulamalı eğitim ve Türkçe rehber sitesi.

**Süre:** 5 gün × 6 saat = 30 saat net eğitim. Molalar ayrıca planlanır.
**Hedef:** Kurgusal verilerle çalışan bir takip uygulaması, dosya otomasyonu, erişim kontrolü deneyi ve yayınlanmış proje.

## Site

GitHub Pages adresi: https://gencbeyinlernet.github.io/alaattinklavuz/

Günlük akışlar, uygulama adımları, 30 hazır prompt, teknik kılavuz, ölçme değerlendirme, indirilebilir şablonlar ve yaygınlaştırma planı içerir. İlerleme ve notlar yalnızca tarayıcıda saklanır; site Claude'a bağlanmaz.

## Yerelde çalıştırma

Node.js kurulu bir bilgisayarda `node serve.mjs` çalıştırın ve http://localhost:4173 adresini açın. Ek paket gerekmez. `node build.mjs` içeriği ve indirilebilir Markdown rehberini oluşturur. `node verify.mjs` yapısal kontrolleri çalıştırır.

## Yayınlama

Repository → Settings → Pages → Deploy from a branch → main → / (root) → Save. `.nojekyll` statik dosyaların doğrudan servis edilmesini sağlar. GitHub Pages yalnızca statik arayüzü barındırır; veritabanı, kimlik doğrulama ve sunucu sırları ayrı hizmette tutulur.

## İçerik ve bakım

`content.js` eğitim içeriğinin kaynağıdır. `app.js` arayüzü, `style.css` tasarımı içerir. Güncelleme sonrası `node build.mjs` ve `node verify.mjs` çalıştırın. Resmî ürün belgeleri 14 Ekim 2026 tarihinde kontrol edilmiştir; eğitimden önce erişim ve plan koşullarını yeniden doğrulayın. Kaynak belgedeki Dispatch ve Live Artifacts başlıkları hesap erişimine göre alternatif uygulamalarla ele alınır.

Kaynak Word dosyası depoya yüklenmemiştir. Örnek kayıtlar kurgusaldır. Bu içerik bağımsız bir eğitim uyarlamasıdır; Anthropic ile kurumsal ilişki veya sertifika yetkisi iddia etmez.
