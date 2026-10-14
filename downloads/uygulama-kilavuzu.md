# Novarge Alaaddin’in Lambası: Yapay Zekâ Ajanları ve Otomasyon Uzmanlığı

## Ayrıntılı uygulama kılavuzu

Bu kılavuzdaki uygulama yolları günlük oturumların içinde yapılır; 30 saatlik eğitime ek süre değildir. Prompttaki alanları kendi bilgilerinle doldur. Örnek sonuçları gerçek test kanıtı yerine kullanma.

### Claude Chat ve Projects

Brief hazırlama, kaynak analizi, prompt geliştirme, proje bağlamı ve çıktı doğrulama.
1. Claude hesabına kendi bilgilerinizle giriş yapın. Hesap/plan ekranında erişiminizi kontrol edin.
2. Yeni sohbet açın. Projects erişimi varsa Novarge Eğitim Projesi adıyla bir proje oluşturun.
3. Proje açıklamasına amaç, hedef kullanıcı ve kurgusal veri sınırını yazın. Kaynaklar bölümündeki CLAUDE.md metnini uygun biçimde proje talimatına uyarlayın.
4. Bir örnek metin yükleyin; ilk görevde sadece kaynak içeriğini özetlemesini ve eksik bilgileri belirtmesini isteyin.

Başarı kontrolü: Araç bir kaynak metnini okuyabiliyor; çıktıda kaynak dışı iddia eklemiyor.
Alternatif yol: Projects yoksa her yeni sohbette brief ve kısa karar özetini tekrar yapıştırın. Ücretsiz sohbet erişimi Code/Cowork erişimi anlamına gelmez.
Resmî kaynak: https://claude.ai/

### Claude Code

Yerel proje dosyalarını inceleme, kontrollü kod değişikliği, test ve Git işlemleri.
1. Windows PowerShell veya macOS/Linux terminalini açın; resmî hızlı başlangıç sayfasından işletim sisteminize uygun yükleyiciyi seçin.
2. Kurulumdan sonra yeni terminalde claude --version çalıştırın. claude doctor ile tanı çıktısını inceleyin.
3. Terminalde yalnızca yeni eğitim klasörüne girin. claude komutuyla oturumu başlatıp kendi hesabınızla giriş yapın.
4. İlk promptta klasörü salt okunur inceletin. Araç izinlerini, dosya değişikliklerini ve çalıştırılacak komutları okuyarak ilerleyin.

Başarı kontrolü: Sürüm görünüyor, oturum açılıyor ve gösterilen çalışma yolu eğitim klasörü.
Alternatif yol: Code erişimi yoksa Chat/Artifacts ile taslak üretin; yerel dosyaya kopyalayarak tarayıcıda deneyin. Kodu okuyamadığınız kritik değişikliklerde eğitmen desteği alın.
Resmî kaynak: https://code.claude.com/docs/en/quickstart

### Claude Cowork / görev deneyimi

Yetki verilen klasörde veri temizleme, dosya üretme, raporlama ve bağlayıcı kullanımı.
1. Resmî Claude uygulamasını veya hesabınızda sunulan görev deneyimini açın. Bazı hesaplarda Chat ve Cowork birleşik görünebilir.
2. Yalnızca eğitim-girdiler klasörünü seçin; tüm kişisel dosyaları bağlamayın.
3. Önce dosya envanteri isteyin. Bir CSV kopyasıyla rapor deneyi yapın.
4. Bağlayıcı kullanacaksanız sağlayıcı ve okuma/yazma kapsamını kontrol edin; eğitimde salt okunur veriyle başlayın.

Başarı kontrolü: Ajan yalnızca verilen örnek dosyada çalışıyor; orijinal dosya değişmiyor.
Alternatif yol: Erişim yoksa CSV içeriğini Chat’e verin veya Code ile yerel klasörde işleyin. Gerçek bağlayıcı varmış gibi davranmayın.
Resmî kaynak: https://claude.com/product/cowork

### Visual Studio Code

Dosya oluşturma, klasör açma, kod değişikliklerini görme ve terminal kullanımı.
1. Resmî indir sayfasından işletim sisteminize uygun sürümü kurun.
2. File → Open Folder ile alaaddin-egitim klasörünü açın.
3. Explorer panelinden dosyaları görün; Terminal → New Terminal ile proje terminalini açın.
4. Dosyaları UTF-8 olarak kaydedin. Claude eklentisi kullanacaksanız resmî sağlayıcıyı doğrulayın; eklenti bu rehber için zorunlu değildir.

Başarı kontrolü: index.html dosyasını düzenleyip kaydedebiliyor ve terminalde doğru yolu görüyorsunuz.
Alternatif yol: Başka bir güvenilir metin editörü kullanılabilir. Word gibi biçimlendirme ekleyen araçlarla HTML/JS dosyası yazmayın.
Resmî kaynak: https://code.visualstudio.com/download

### Git ve GitHub

Değişiklik geçmişi, geri alma, kaynak kod deposu ve GitHub Pages yayını.
1. Git’i resmî kaynaktan kurun; yeni terminalde git --version çalıştırın.
2. GitHub hesabınızı açın. Eğitim için yeni ve boş bir depo oluşturun.
3. Yerel eğitim klasöründe git init çalıştırın; kendi adınız ve e-postanızla Git kimliğini ayarlayın.
4. Önce .gitignore ekleyin. git status ve git diff ile kayıt öncesi değişiklikleri inceleyin.

Başarı kontrolü: En az iki commit görülüyor; gizli dosyalar Git takibine girmiyor.
Alternatif yol: GitHub Desktop ile arayüz üzerinden commit/push yapılabilir. Web dosya yükleme yolunda da dosya kapsamını ve sırları inceleyin.
Resmî kaynak: https://git-scm.com/downloads/

### Node.js LTS

Yerel statik sunucu veya seçilen uygulamanın araç zinciri. Native Claude Code kurulumunun zorunlu koşulu değildir.
1. Seçtiğiniz projede Node gerekip gerekmediğini kontrol edin. Basit örneklerimiz ek paket kurmaz.
2. Gerekiyorsa resmî siteden LTS sürümü kurun. Yeni terminalde node --version kontrol edin.
3. Örnek proje paketini açın; paket kökünde node serve.mjs çalıştırın.
4. Terminalde görünen yerel adresi tarayıcıda açın. Sunucuyu kapatmak için Ctrl+C kullanın.

Başarı kontrolü: Yerel adres açılıyor ve kaynak dosyalar proje klasöründen servis ediliyor.
Alternatif yol: Basit HTML örnekleri dosya olarak açılabilir. Dosya URL’lerinde depolama/indirme davranışı değişebileceği için yayın testini HTTP adresinde yapın.
Resmî kaynak: https://nodejs.org/en/download

### Supabase

PostgreSQL tablo, oturum, kullanıcı sahipliği ve RLS deneyi.
1. Ayrı bir eğitim projesi açın; plan ve kullanım sınırlarını inceleyin.
2. SQL Editor’da Kaynaklar bölümündeki şema dosyasını okuyarak boş projede uygulayın.
3. Authentication üzerinden iki eğitim hesabı hazırlayın. Project URL ve tarayıcıya uygun publishable/anon anahtarını ayırın.
4. RLS politikalarını A/B/anonim oturumla test edin; sonuçları dosyaya yazın.

Başarı kontrolü: A kendi verisine erişiyor, B ve anonim istemci A verisine erişemiyor.
Alternatif yol: Hesap yoksa yerel takip örneğiyle arayüz geliştirin; gerçek veritabanı ve yetki deneyini yapılmadı olarak işaretleyin.
Resmî kaynak: https://supabase.com/docs

### Claude Design / Artifacts

Öğrenme aracı, ekran taslağı, bileşen kuralları ve demo sunumu.
1. Hesabınızda Design veya Artifacts erişimini kontrol edin.
2. Hedef kitleyi, üç temel ekranı ve erişilebilirlik koşullarını tanımlayın.
3. Önce prototip üretin; boş, yükleniyor ve hata ekranlarını da isteyin.
4. Dışa aktarma erişiminiz varsa dosyaları eğitim klasörüne alın; çıktıyı tarayıcıda test edin.

Başarı kontrolü: Prototip anlaşılır; form alanları etiketli, klavye odağı görünür.
Alternatif yol: HTML/CSS ile aynı ekranları oluşturun. Hazır logolar veya kurum ilişkileri uydurmayın.
Resmî kaynak: https://claude.com/product/design

### Excel / LibreOffice ve sunum aracı

CSV toplamlarını bağımsız doğrulama; raporu belge ve sunuma dönüştürme.
1. Elinizdeki Excel’i veya ücretsiz LibreOffice Calc’ı açın.
2. CSV’yi UTF-8 ve doğru ayırıcıyla içe aktarın; tarih ve puan sütunlarını kontrol edin.
3. Örnek 10 kayıtta durum sayıları ve 65,5 ortalamayı hesaplayın. Boş puanı sıfır saymayın.
4. Office eklentisi erişimi varsa kullanın; yoksa raporu Markdown/metin ve sunum taslağı olarak teslim edin.

Başarı kontrolü: Türkçe karakterler doğru; tablo hesapları raporla eşleşiyor.
Alternatif yol: Tarayıcıdaki CSV Rapor Atölyesi hesaplarını örnek verilerle kullanın. Hesaplamanın yöntemini ayrıca açıklayın.
Resmî kaynak: https://www.libreoffice.org/download/download-libreoffice/

### GitHub Pages ve tarayıcı

HTML/CSS/JS projesini HTTPS adresinde yayımlama ve kullanıcı testi.
1. Depoda index.html ve göreli varlık yollarını doğrulayın. .nojekyll ekleyin.
2. Settings → Pages → Deploy from a branch → main → / (root) → Save seçin.
3. Actions içindeki Pages dağıtımı başarıyla tamamlanana kadar bekleyin.
4. Verilen yayın adresini ayrı tarayıcı görünümünde açın; mobil, bağlantı, form ve giriş/çıkış testlerini yapın.

Başarı kontrolü: Yayın adresi açılıyor; dosyalar 404 vermiyor; arka hizmet ve gizli anahtarlar ayrı tutuluyor.
Alternatif yol: Statik site için uygun alternatif hosting seçilebilir; güncel fiyatı ve çalışma koşullarını resmî belgede inceleyin.
Resmî kaynak: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 1. gün İlk ajan oturumunu güvenle başlat

Eğitim klasörünü oluştur, ortamını tanıt ve ilk görevden doğrulanabilir bir plan al.
Süre: 35–45 dk

### Hazırlık
- Yeni ve boş bir alaaddin-egitim klasörü; gerçek kişi verisi kullanılmayacak.
- Editör, terminal ve varsa Claude Code erişimi. Erişim yoksa Chat alternatifi.

### Doldurulacak alanlar
- [klasör]: C:\egitim\alaaddin-egitim
- [amaç]: Kurgusal eğitim kayıtlarını takip eden bir uygulama
- [çıktı]: brief.md ve kurulum-kontrol.md

### Adım 1 Çalışma alanını aç

Editörde Open Folder ile yeni eğitim klasörünü aç. Terminal yolunu kontrol et; kişisel belgelerini bu klasöre kopyalama.

Beklenen sonuç: Boş eğitim klasörü ve doğru çalışma yolu.

### Adım 2 Araçları doğrula

Terminalde git --version ve varsa claude --version çalıştır. Code kullanılıyorsa claude doctor sonucunu oku.

Beklenen sonuç: Sürüm veya açıkça kaydedilmiş erişim hatası.

### Adım 3 Keşif promptunu ver

Claude Code’u klasörde başlat; ilk promptu yapıştır. Chat rotasında dosya listesini kendin ver.

Prompt — Claude Code

Yalnızca [klasör] içinde çalış. Önce konumu, mevcut dosyaları ve kullanılabilir araçları salt okunur incele. Dosya değiştirme veya kurulum yapma. [amaç] için gereken en küçük araç setini ve eksik bileşenleri yaz. Hangi kontrolü gerçekten yaptığını belirt; erişemediğin araç için sonuç uydurma.

Beklenen sonuç: Ajan hangi klasör ve araçları gördüğünü açıklar.

### Adım 4 Briefi oluştur

İkinci promptu ver. Hedefi ve kabul ölçütlerini oku; ödeme, gerçek veri veya gereksiz üyelik özelliklerini kapsamdan çıkar.

Prompt — Claude Chat / Code

Amaç: [amaç]. Hedef kullanıcı: yetişkin eğitim katılımcısı. Veri: yalnızca kurgusal 10 kayıt. Bir haftalık küçük sürümde kayıt ekleme, listeleme, Türkçe arama ve durum filtresi olsun. Önce kapsam dışı özellikleri belirt. [çıktı] için kaynak, işlem, dosya yapısı ve 5 kabul ölçütü hazırla.

Beklenen sonuç: 5 kabul ölçütü ve kısa ürün kapsamı.

### Adım 5 İlk dosyaları oluştur

Üçüncü promptu ver; önerilen dosya yollarını okuyup yeni dosyalara uygulanmasına izin ver.

Prompt — Claude Code

İncelediğim briefi [klasör] içinde brief.md olarak kaydet. girdiler, ciktilar, proje ve notlar alt klasörlerini oluştur; mevcut dosyaların üstüne yazma. CLAUDE.md içinde kurgusal veri, küçük değişiklik, test ve yayın öncesi insan incelemesi kurallarını yaz. Önce etkilenecek yolları göster, ardından izin verilen yeni dosyaları oluştur.

Beklenen sonuç: brief.md, CLAUDE.md ve eğitim alt klasörleri.

### Adım 6 Sonucu doğrula

Dördüncü promptu ver ve editörde dosyaları kendin aç. “Tamamlandı” sözünü tek başına kanıt sayma.

Prompt — Claude Code / Chat

Üretilen brief ve çalışma klasörünü kabul ölçütlerine göre incele. Dosya listesi, eksik alanlar ve kapsam dışına taşan işler varsa raporla. Kurulum kontrolünde sürüm, çalışma yolu ve gerçek hata sonucunu ayrı yaz. Çalıştırılmayan komuta başarılı deme. Bir sonraki uygulamaya geçmeden tamamlanması gereken maddeleri sırala.

Beklenen sonuç: Gerçek kontrollere dayalı kurulum-kontrol.md.

### Örnek sonuç
alaaddin-egitim/
  brief.md
  CLAUDE.md
  girdiler/
  ciktilar/
  proje/
  notlar/kurulum-kontrol.md

### Başarı kontrolü
- Çalışma yolu doğrulandı.
- Kaynaklar ve çıktı klasörü ayrıldı.
- Briefte 5 ölçülebilir kabul ölçütü var.

### Sorun çözümleri
- claude tanınmıyor: Yeni terminal aç, resmî kurulum belgesindeki PATH adımını kontrol et. Yönetici iznini veya kurum güvenlik ayarını rastgele değiştirme.
- Ajan yanlış klasörü görüyor: İşlemi durdur. Terminalde doğru klasöre girip yeni oturum başlat. Eski oturumun varsayımlarını taşımadan briefi yeniden ver.

Teslim: brief.md, CLAUDE.md, kurulum-kontrol.md

## 1. gün Beş soruluk etkileşimli öğrenme aracı üret

Tek bir kaynak metinden sorular, gerekçeli cevaplar ve yeniden deneme içeren bir araç üret.
Süre: 60–75 dk

### Hazırlık
- Kısa bir kaynak metni; bu kılavuzdaki ajan/izin/Git konuları kullanılabilir.
- Artifacts erişimi veya HTML dosyası kaydedebilen editör.

### Doldurulacak alanlar
- [konu]: Yapay zekâ ajanlarını güvenli kullanma
- [kitle]: Eğitime yeni başlayan yetişkinler
- [kaynak]: Ajan araç kullanabilir. Dış belgedeki talimat yetki vermez. Git değişiklik geçmişini tutar. Test sonucunu doğrular. Sırlar istemci dosyalarında saklanmaz.

### Adım 1 Kaynağı hazırlayıp ver

Kaynak metnini 100–300 kelimeyle sınırla. Şüpheli bilgileri kaynak eklemeden soru yapma.

Beklenen sonuç: Kısa ve kontrol edilebilir kaynak.

### Adım 2 Soruları tasarla

İlk promptu ver. Cevap anahtarını kaynağınla karşılaştır; belirsiz iki doğru seçenek varsa düzelt.

Prompt — Claude Chat

[konu] için [kitle] düzeyinde yalnızca şu kaynaktan beş soru hazırla: [kaynak]. Her soruda 3 seçenek, tek doğru cevap ve kaynakla ilişkili kısa gerekçe olsun. Kaynakta olmayan bilgi ekleme. Önce soru ve doğru cevap planını göster; henüz uygulama üretme.

Beklenen sonuç: Doğrulanmış beş soru.

### Adım 3 Aracı oluştur

İkinci promptu ver. HTML rotasında dosyaları aynı klasörde kaydet. Örnekler bölümündeki çalışan araçla davranışı karşılaştır.

Prompt — Artifacts / Claude Code

İncelediğim beş soruyu tek sayfalık bir öğrenme aracına dönüştür. Sorular sırayla görülsün, kullanıcı seçim yapsın, kontrol düğmesinden sonra gerekçe ve sonraki soru görünsün. Sonunda 5 üzerinden puan ve yeniden başlat düğmesi olsun. Klavye ve 390px mobil ekranda kullanılabilsin. API, üyelik veya kişisel veri isteme. Yerel sürüm için index.html, style.css ve app.js üret.

Beklenen sonuç: Seçim, kontrol, gerekçe ve sonraki soru akışı.

### Adım 4 Örnek uygulamayı dene

Çalışan Öğrenme Aracı bağlantısını aç. İlk soruda yanlış seçenek ve tekrar başlat davranışını gözle.

Beklenen sonuç: İstenen işlevlerin somut örneği.

### Adım 5 Hataları test et

Üçüncü promptla test matrisi çıkar; sonra uygulamayı tarayıcıda kendin dene. Gerekirse gerçek hata metnini paylaş.

Prompt — Claude Code / Chat

Aracı şu senaryolarla incele: seçenek işaretlemeden kontrol; yanlış cevap; doğru cevap; son sorudan sonuç; yeniden başlat; klavyeyle seçim. Beklenen ve gerçek sonuçları ayır. Çalıştırmadığın testi belirt. Eksik geri bildirim veya tekrarda puan hatasını en küçük değişiklikle düzelt.

Beklenen sonuç: Başarısız testler ve düzeltmeler kayıtlı.

### Adım 6 Uyarlama dosyasını teslim et

Dördüncü promptla teslim metni üret. Soru kaynağı ve uygulama dosyalarını birlikte sakla.

Prompt — Claude Chat

Bu öğrenme aracı için amaç, kaynak metni, soru-cevap anahtarı, kullanım adımları ve test notlarını tek bir teslim dosyasında düzenle. Test kanıtı yoksa başarılı yazma. Örnekten alınan soruların resmî sınav veya sertifika olmadığını belirt. Yeni bir konuya uyarlamak için değişecek alanları açıkla.

Beklenen sonuç: Kaynak ve testleri olan öğrenme materyali.

### Örnek sonuç
Soru: Ajanın işi tamamladığını nasıl anlarsın?
Seçenek: Kabul ölçütlerine göre çıktıyı doğrularım.
Geri bildirim: Doğru. Akıcı yanıt tek başına işlem kanıtı değildir.
Sonuç: 4 / 5 · Yeniden başlat

### Başarı kontrolü
- 5 soru ve kaynakla uyumlu cevaplar var.
- Yanıtsız kontrol açık geri bildirim veriyor.
- Yeniden başlatmada puan sıfırlanıyor.

### Sorun çözümleri
- Artifact yok: HTML dosyalarını editörde oluştur; örnek paketin dosya düzenini kullan.
- Türkçe karakter bozuk: HTML’de UTF-8 meta etiketi ve editörde UTF-8 kayıt kodlamasını kontrol et.

Teslim: Çalışan araç, kaynak metin ve test notları

## 2. gün Hatalı CSV dosyasını temizle ve raporla

13 kurgusal satırdan 10 geçerli kaydı ayır; üç hatayı gerekçesiyle raporla ve toplamları doğrula.
Süre: 60–75 dk

### Hazırlık
- Kaynaklar bölümünden ornek-kayitlar.csv ve hatali-kayitlar.csv dosyalarını indir.
- Yeni girdiler ve ciktilar klasörleri oluştur; kaynak dosyayı koru.

### Doldurulacak alanlar
- [girdi]: girdiler/hatali-kayitlar.csv
- [çıktı klasörü]: ciktilar/2026-10-14
- [dönem]: 2026-10-14

### Adım 1 Örneği çalıştır

Çalışan CSV Rapor Atölyesi’ni aç ve Hatalı örneği yükle düğmesine bas. Ekrandaki sonuçları gözle.

Beklenen sonuç: 13 satır, 10 kabul, 3 ret gösterilir.

### Adım 2 Girdi dosyasını incele

İlk promptu ver. Ajan sütunları yanlış eşleştirirse devam etme; sözleşmeyi düzelt.

Prompt — Cowork / Claude Code

[girdi] dosyasını salt okunur incele. Beklenen sütunlar kod,ad,alan,durum,tarih,puan. Kod ve ad zorunlu; kod benzersiz; durum yeni/devam/tamamlandi; tarih geçerli YYYY-MM-DD; puan boş veya 0–100 arasında tam sayı olsun. Önce sütunları, satır sayısını ve bulunan sorunları yaz. Orijinali değiştirme.

Beklenen sonuç: Sütun sözlüğü ve üç hata adayı.

### Adım 3 Temizleme yap

İkinci promptu ver. Kaynak dosyanın aynı kaldığını editörde veya dosya karşılaştırmasıyla doğrula.

Prompt — Cowork / Claude Code

Bu kurallara göre veriyi işle. Hatalı satırı sessizce düzeltme veya atma; satır numarası, kod ve gerekçeyle hata raporuna koy. Aynı kodun ilk geçerli satırını koru; sonraki tekrarı reddet. [çıktı klasörü] içinde temiz-kayitlar-[dönem].csv ve veri-kalite-[dönem].md üret. Kabul+ret=girdi mutabakatını göster.

Beklenen sonuç: Temiz CSV ve ayrı hata raporu.

### Adım 4 Özeti oluştur

Üçüncü promptu ver. Durum sayılarını ve ortalama paydasını raporda ayrı gör.

Prompt — Cowork / Chat

Temiz dosyadan kayıt toplamı, yeni/devam/tamamlandi sayıları, geçerli puanların toplamı ve ortalamasını çıkar. Boş puanı sıfır sayma; payda olarak yalnızca dolu geçerli puan sayısını kullan. [dönem] için rapor.md üret. Veri kalite hatalarını ve hesap yöntemini belirt. Kişiler hakkında otomatik karar verme.

Beklenen sonuç: 10 kayıt ve açıklanmış hesap yöntemi.

### Adım 5 Bağımsız hesapla

CSV’yi Excel/Calc’ta UTF-8 aç. Puanları topla ve 10’a böl; durum sütunundaki üç grubu say.

Beklenen sonuç: 655 / 10 = 65,5.

### Adım 6 Farkları çöz ve teslim et

Dördüncü promptu ver. Kaynak ve çıktı dosyalarını farklı klasörlerde tut; raporu tarihli kaydet.

Prompt — Claude Chat

Raporu bu kontrol değerleriyle karşılaştır: temiz örnekte 10 kayıt, yeni=3, devam=4, tamamlandi=3; puan toplamı=655 ve ortalama=65,5. Hatalı dosyada 13 veri satırı, 10 kabul ve 3 ret beklenir. Sonuç farklıysa kaynağı ve hesaplamayı incele; sayıyı beklenene uydurma. Farkın nedenini açıkla.

Beklenen sonuç: Girdi=kabul+ret tutarlı; veri hataları görünür.

### Örnek sonuç
Girdi: 13 · Kabul: 10 · Ret: 3
Yeni: 3 · Devam: 4 · Tamamlandı: 3
Puan toplamı: 655 · Puan sayısı: 10 · Ortalama: 65,5
Hatalar: tekrar kod K001; boş takma ad K011; puan 140 olan K012.

### Başarı kontrolü
- Orijinal dosya korunuyor.
- Üç reddin gerekçesi açık.
- Durum toplamı ve ortalama bağımsız hesapla eşleşiyor.

### Sorun çözümleri
- Excel bütün veriyi tek sütuna koyuyor: CSV’yi içe aktar menüsüyle aç; UTF-8 ve virgül/uygun ayırıcıyı seç.
- Ortalama farklı: Metin olarak okunan puanları ve boş alanları kontrol et. Ret satırlarını ortalamaya dahil etme.

Teslim: Temiz CSV, veri kalite raporu ve haftalık özet

## 2. gün Raporu skill ve tekrarlanabilir göreve dönüştür

Bir rapor standardını iki girdide kullan; aynı dönem tekrar çalıştığında dosya çoğalmasını engelle.
Süre: 60–90 dk

### Hazırlık
- Önceki uygulamanın temiz CSV ve raporu.
- SKILL.md şablonu; Scheduled erişimi varsa hesapta görünür görev ekranı.

### Doldurulacak alanlar
- [dönem]: 2026-W42
- [kaynak]: İzin verilen eğitim CSV dosyası
- [saat dilimi]: Europe/Istanbul

### Adım 1 Standardı çıkar

Raporun başlık, hesap ve hata biçimini yaz. Dosya adında dönem anahtarını belirle.

Beklenen sonuç: Tek bir rapor standardı.

### Adım 2 Skill’i yaz

İlk promptu ver; SKILL.md dosyasını şablonla karşılaştır. Hesabında skill yükleme varsa ilgili resmî yöntemi kullan.

Prompt — Cowork / Claude Code

Bu haftalık rapor işini SKILL.md olarak yaz. Adı egitim-haftalik-rapor olsun. Ne zaman kullanılacağı, zorunlu sütunlar, hata kuralları, hesap yöntemi, çıktı adı ve doğrulama koşulları yazılsın. Kaynak orijinalini koru; gerçek kişi verisi ve mesaj gönderme kullanma. Eksik sütunda rapor uydurmak yerine dur.

Beklenen sonuç: Tekrar kullanılabilir talimat dosyası.

### Adım 3 Aynı işi iki kez çalıştır

İkinci promptu ver. Dosya sayısını ve dönem kimliğini denetle.

Prompt — Cowork / Claude Code

Skill’i [kaynak] ve [dönem] için uygula. Çıktı rapor-[dönem].md olsun. Aynı dönem için ikinci çalıştırmada önceki raporun üstüne yazmadan değişiklik önerisini göster; farklı dosya adıyla kopya üretme. Dönem kimliği, girdi özeti ve gerçek sonuçları iki çalıştırma günlüğüne yaz.

Beklenen sonuç: Aynı dönem için bir rapor, iki çalışma günlüğü.

### Adım 4 Zamanlamayı incele

Üçüncü promptla kaynak ve çalışma yerini belirle. Yerel dosyanın bulut işi tarafından otomatik görüldüğünü varsayma.

Prompt — Claude Scheduled / Chat

Her cuma 16.00 [saat dilimi] saatinde [kaynak] üzerinden haftalık rapor tasarla. Önce kaynağın buluttan mı yerelden mi erişilebildiğini doğrula. Kaynak yoksa hata çıktısı oluştur; aynı dönem ikinci rapor oluşmasın. Kimseye mesaj gönderme. Görev adı, kaynak, çıktı, çalışma koşulları, manuel test ve duraklatma adımını göster. Zamanlama ayarını incelemem için hazırla.

Beklenen sonuç: Kaynak ve saat dilimi belli görev tanımı.

### Adım 5 Manuel test ve hata provası

Scheduled erişimi varsa önce Run now ile dene. Yoksa elle çalıştır ve simülasyon diye yaz. Dördüncü promptu uygula.

Prompt — Cowork / Claude Code

Görevi şu üç senaryoda değerlendir: normal veri, zorunlu sütun eksik, kaynak bulunamadı. Yalnızca eğitim kopyalarıyla dene. Her testte beklenen ve gerçek sonucu ayır. Planlanan otomasyon gerçekten tetiklenmediyse manuel simülasyon olarak etiketle. Görev duraklatma ve sorumlu kişi bilgisini teslim dosyasına ekle.

Beklenen sonuç: Normal ve iki hata senaryosu kayıtlı.

### Adım 6 Çıkış ve durdurma

Eğitim bittikten sonra gereksiz görevi duraklat. Hangi ekran veya komutla durduracağını not et.

Beklenen sonuç: Bakım sahibi, durdurma yolu ve son test tarihi.

### Örnek sonuç
Görev: Haftalık eğitim özeti
Dönem anahtarı: 2026-W42
Zaman: Cuma 16.00 Europe/Istanbul
Çıktı: rapor-2026-W42.md
Kaynak yok: hata-2026-W42.md
Tekrar: mevcut raporu incele; yinelenen dosya üretme.

### Başarı kontrolü
- Skill iki girdide aynı biçimi üretiyor.
- Tekrar çalıştırmada istenmeyen kopya yok.
- Zamanlama veya manuel rota açıkça belirtilmiş.

### Sorun çözümleri
- Scheduled görünmüyor: Manuel rota ile öğrenme çıktısını tamamla; gerçek zamanlama yapıldı deme.
- Yerel kaynak bulut görevinde okunmuyor: İzin verilen bulut kaynağı kullan veya görevi yerel koşullara göre planla. Dosyayı izinsiz dışarıya yükleme.

Teslim: SKILL.md, iki çalışma günlüğü, otomasyon-plani.md

## 3. gün Eğitim takip uygulamasını adım adım geliştir

Kayıt ekleme, güncelleme, geri alınabilir silme, Türkçe arama ve filtreleme yapan prototip üret.
Süre: 90–120 dk

### Hazırlık
- brief.md ve yeni proje klasörü.
- Örnekler bölümündeki çalışan takip uygulaması; 10 kurgusal kayıt.

### Doldurulacak alanlar
- [proje klasörü]: alaaddin-egitim/proje
- [alanlar]: kod, ad, alan, durum, tarih, puan
- [tasarım]: Sade, mobil uyumlu, etiketli alanlar ve görünür klavye odağı

### Adım 1 Çalışan örneği tanı

Örnek eğitim takip uygulamasını aç. K011 koduyla kurgusal kayıt ekle; düzenle ve filtrele.

Beklenen sonuç: Üretilecek davranışın somut örneği.

### Adım 2 Planı çıkar

İlk promptu ver. Veri alanları ve ekranların kapsamını kontrol et.

Prompt — Claude Code / Design

[proje klasörü] için bir eğitim takip prototipi planla. Alanlar [alanlar]. [tasarım] uygula. Ekranlar: kayıt formu, liste, arama/durum filtresi, özet. Boş sonuç ve hata durumunu tanımla. İlk sürüm tarayıcı depolaması kullansın; bunun giriş sistemi veya çok kullanıcılı veritabanı olmadığını açıkça belirt.

Beklenen sonuç: Ekran ve veri sözlüğü.

### Adım 3 İlk çalışan sürümü üret

İkinci promptu ver. Dosyaları aynı proje klasöründe tut; tarayıcıda formu aç.

Prompt — Claude Code

Planlanan prototipin yalnızca form ve listesini oluştur. Kod ve ad zorunlu, kod benzersiz, puan boş veya 0–100 tam sayı, durum yeni/devam/tamamlandi olsun. Kullanıcı metnini HTML olarak çalıştırma. On kayıtlık kurgusal örnek yükleme seçeneği ekle. Dosyaları index.html, style.css ve app.js olarak ayır; gereksiz bağımlılık ekleme.

Beklenen sonuç: Form ve liste çalışıyor.

### Adım 4 İşlevleri büyüt

Üçüncü promptu ver. Arama, filtre ve düzenleme tek tek eklenirken sonucu deneyerek ilerle.

Prompt — Claude Code

Çalışan prototipe Türkçe büyük/küçük harf davranışı tanımlanmış arama, durum filtresi ve kayıt düzenleme ekle. Filtreler birlikte çalışsın. Silme işleminden sonra son silinen kaydı geri alabilme olsun. Düzenleme sırasında benzersiz kod kontrolü kaydın kendisini hariç tutsun. Yenileme sonrası yerel kayıtlar korunsun.

Beklenen sonuç: Küçük adımlarla gelişen prototip.

### Adım 5 Kendi kabul testini yap

Dördüncü promptu ver; ardından senaryoları kendin uygula. Örnekte yeni kayıt sayısı ve filtre sonucu değişimini gözle.

Prompt — Claude Code

Bu prototipi boş kod, tekrar kod, -1/101 puan, İpek/Işık arama, arama+filtre, düzenleme, silme+geri alma, yenileme, 390px ve klavye senaryolarıyla dene. Her testte beklenen ve gerçek sonuçları ayrı yaz. Çalıştırılmayan testi belirt. Gerçek bir kimlik doğrulama veya RLS varmış gibi raporlama.

Beklenen sonuç: Gerçek sonuçları olan test matrisi.

### Adım 6 Devir notunu yaz

Yerel depolamanın kullanıcı hesabı sağlamadığını README’ye yaz. İleri rotada hangi verilerin Supabase’e taşınacağını belirt.

Beklenen sonuç: Çalışan prototip ve açık sınırlamalar.

### Örnek sonuç
Kayıt K011 · Örnek Lale · tasarım · yeni · 2026-10-14 · 80
Ekle: toplam 10 → 11
Durumu tamamlandi yap: kayıtta yeni → tamamlandı
K011 ara: tek sonuç
Sil ve geri al: kayıt yeniden görünür.

### Başarı kontrolü
- Form doğrulama ve benzersiz kod çalışıyor.
- Arama ve filtre birlikte kullanılıyor.
- Düzenleme, geri alma ve yenileme doğrulandı.

### Sorun çözümleri
- Kod dosyası yerine metin açılıyor: Dosya uzantılarını kontrol et; index.html.txt olmamalı. Dosyaları UTF-8 kaydet.
- Veri başka tarayıcıda görünmüyor: Bu yerel prototipin beklenen sınırıdır. Çok kullanıcılı veri için veritabanı rotasına geç.

Teslim: index.html, style.css, app.js ve test-raporu.md

## 3. gün Proje geçmişi, test ve güvenli geri alma

İşlevleri küçük commitlerle kaydet; ayrı hata commitini geri alma deneyi yap.
Süre: 45–60 dk

### Hazırlık
- Yeni eğitim projesi; kullanıcıya ait başka çalışma ağacında deney yapma.
- .gitignore şablonu ve çalışan prototip.

### Doldurulacak alanlar
- [dal]: ozellik/takip
- [özellik]: Durum filtresi
- [commit]: Git geçmişinden doğrulanan hata commitinin SHA değeri

### Adım 1 Depoyu hazırla

İlk promptla mevcut durumu gör. Yeni projede git init; kendi kimliğini git config user.name/user.email ile ayarla.

Prompt — Claude Code

Bu eğitim projesinde git status ve mevcut geçmişi incele. Git deposu yoksa yeni depo hazırlama adımlarını göster. .env, node_modules ve log dosyaları için .gitignore oluştur; gizli değerleri ekrana yazma. Git kimliği gerekiyorsa kendi adım ve e-postamı kullanmam gerektiğini belirt. Kullanıcıya ait başka dosyalara dokunma.

Beklenen sonuç: Depo ve doğru .gitignore.

### Adım 2 Dal oluştur

git switch -c ozellik/takip ile yeni dal aç; mevcut bir dal varsa üzerine yazmadan kontrol et.

Beklenen sonuç: Ayrı geliştirme dalı.

### Adım 3 Küçük commit yap

İkinci promptu ver. git diff sonucu ve test notlarıyla form/listenin ayrı commitlerini oluştur.

Prompt — Claude Code

[dal] dalında [özellik] değişikliğini incele. Önce diff ve gerçekten çalıştırılan testleri göster. Sadece ilgili dosyaları commit için hazırla; ilgisiz değişiklikleri dahil etme. Anlamlı bir commit mesajı öner. Push veya yayın yapmadan hedef depo ve değişiklik özetini incelemem için göster.

Beklenen sonuç: En az iki anlamlı commit.

### Adım 4 Hata kaydını ekle

Üçüncü promptu sadece eğitim kopyasında uygula; hata commitinin SHA değerini not et.

Prompt — Claude Code

Yalnızca eğitim kopyasında bir metin etiketini bilerek yanlış yapıp ayrı commit olarak kaydetmek için adımlar hazırla. İşlevsel veri veya kullanıcı dosyası silme. Bu commitin SHA değerini kaydet. Hatanın kullanıcıya etkisini ve geri alma hedefini açıkla.

Beklenen sonuç: Geri alma hedefi kesin.

### Adım 5 Geri al

Dördüncü promptu kullan. Revert commitinin yeni kayıt olarak geçmişe eklendiğini gör.

Prompt — Claude Code

Geri almak istediğim hata commit’i [commit]. Önce status, diff ve commit içeriğini incele; kaydedilmemiş çalışmayı koru. Uygunsa git revert ile yeni ters commit oluşturma adımlarını uygula. Reset --hard veya force push kullanma. Çatışma varsa dur ve nedenini açıkla. Sonra etiket ve ilgili akışın doğru olduğunu test et.

Beklenen sonuç: Geçmiş korunarak hata tersine çevrildi.

### Adım 6 Teslimi doğrula

git log --oneline -5 ve git status ile sonucu kontrol et; çalışan akışı yeniden dene.

Beklenen sonuç: Temiz/izah edilmiş çalışma ağacı ve test kaydı.

### Örnek sonuç
git status
git switch -c ozellik/takip
git diff
git add index.html app.js style.css
git commit -m "Durum filtresini ekle"
git log --oneline -5
# SHA doğrulandıktan sonra: git revert <hata-commit-SHA>

### Başarı kontrolü
- İlgisiz dosya committe yok.
- Hata commitinin kimliği doğrulandı.
- Geri alma sonrası test kaydedildi.

### Sorun çözümleri
- Please tell me who you are: Bu depo için kendi Git kimliğini ayarla. Başkasının adını/e-postasını kullanma.
- Revert çatışması: Dosyayı inceleyip hangi değişikliğin korunacağını belirle; eğitmenle çöz. Kullanıcı dosyalarını reset --hard ile temizleme.

Teslim: Git geçmişi ve geri-alma-deneyi.md

## 4. gün Supabase tablosu ve iki hesapla erişim deneyi

Kullanıcı sahipliğini veritabanında denetle; A, B ve anonim erişim sınırlarını kanıtla.
Süre: 75–90 dk

### Hazırlık
- Yeni, boş Supabase eğitim projesi ve egitim-schema.sql.
- Eğitmenin yönlendirmesiyle iki eğitim hesabı; mevcut üretim kullanıcılarını kullanma.

### Doldurulacak alanlar
- [project URL]: Kendi projenizin https://…supabase.co adresi
- [istemci anahtarı]: Tarayıcıya uygun publishable/anon anahtarı; secret/service_role değil
- [A kayıt id]: A oturumuyla oluşturulan kaydın UUID değeri

### Adım 1 Şemayı oku

İlk promptu ver; tablo ve politikaları anladığını kontrol et. SQL dosyasını yalnızca yeni projeye uygula.

Prompt — Claude Code / Chat

egitim-schema.sql dosyasını incele. owner_id ilişkisi, kullanıcı başına benzersiz kod, durum ve puan kısıtları ile SELECT/INSERT/UPDATE/DELETE politikalarını açıkla. Sadece boş eğitim projesi için kullanacağız. Silme veya mevcut şemayı değiştirme. RLS’nin hangi istemcide sınır koyduğunu anlat ve riskli eksik varsa uygulamadan önce belirt.

Beklenen sonuç: egitim_kayitlari ve RLS politikaları hazır.

### Adım 2 İki hesabı hazırla

Auth ekranında eğitmenin önerdiği test hesaplarını kur. E-posta doğrulama kullanılıyorsa normal akışı tamamla.

Beklenen sonuç: A ve B ayrı oturum açabiliyor.

### Adım 3 İstemciyi bağla

İkinci promptu kullan. Proje URL ve uygun istemci anahtarını yapılandır; özel sır ekleme.

Prompt — Claude Code

Eğitim prototipini @supabase/supabase-js istemcisiyle bağlamak için en küçük mimariyi kur. Yapılandırma [project URL] ve [istemci anahtarı] alanlarından gelsin; gerçek değerleri burada yazma. Giriş/çıkış, oturum durumu ve kullanıcının kendi kayıtlarını ekleme/listeleme olsun. Secret/service_role anahtarını tarayıcıya koyma; parola/token loglama.

Beklenen sonuç: Giriş/çıkış ve kendi verisini listeleme.

### Adım 4 A ile kayıt oluştur

A oturumuyla K001 ekle. UUID’yi ve gerçek işlemin sonucunu test dosyasına kaydet.

Beklenen sonuç: A kendi kaydını okuyup değiştirebiliyor.

### Adım 5 B ile doğrudan erişim dene

Üçüncü prompttaki olumlu/olumsuz testleri uygula. Boş select veya yetki hatası beklenen davranış olabilir; değişen satır sayısını da kontrol et.

Prompt — Claude Code

Kullanıcı A oturumuyla kurgusal kayıt oluştur ve [A kayıt id] değerini test için kaydet. Sonra B oturumuyla aynı id’yi doğrudan sorgula ve değiştirmeyi dene. B owner_id=A ile ekleme ve kendi kaydının owner_id değerini A yapma denemeleri reddedilmeli. SQL Editor veya service_role ile yapılan deneyi kullanıcı sınırı kanıtı sayma. Beklenen ve gerçek sonuçları ayrı yaz.

Beklenen sonuç: B, A kaydını göremiyor/değiştiremiyor.

### Adım 6 Anonim ve teslim

Dördüncü promptu uygula. Test sonuçları başarısızsa düzeltme yapmadan üretim rotasına geçme.

Prompt — Claude Code

Oturumdan çıkıp uygun publishable/anon istemciyle kayıt okuma ve yazma deneyi yap. Anonim erişim reddedilmeli. Başarısız güvenlik testi varsa yayına hazır deme. RLS, Auth, anahtar yerleşimi, çalıştırılmayan testler ve giderilmesi gereken sorunu erişim-testleri.md dosyasına yaz; gizli değerleri ekleme.

Beklenen sonuç: A/B/anonim matrisi ve gerçek kanıt.

### Örnek sonuç
İşlem                     A     B     Anonim
A kaydını oku             İzin  Yok   Yok
A kaydını güncelle        İzin  Yok   Yok
owner_id=A ile ekle       İzin  Yok   Yok
B kendi kaydını oku       Yok   İzin  Yok
Not: bu tablo beklenen davranıştır; gerçek deney sonucunu ayrıca yaz.

### Başarı kontrolü
- RLS tablo düzeyinde açık.
- B doğrudan UUID ile erişemiyor.
- Sahiplik değiştirme ve anonim yazma reddediliyor.

### Sorun çözümleri
- permission denied veya boş liste: Oturumu, tablo adını, owner_id ve politikaları kontrol et. Güvenlik kurallarını tamamen kapatarak çözmeye çalışma.
- A hesabı B kaydını görüyor: Politika ve istemci anahtarını incele. Yetkili sunucu anahtarı kullanıyorsan kullanıcı testi geçerli değildir.

Teslim: Veritabanı bağlantısı, erişim matrisi ve erişim-testleri.md

## 4. gün Panel, CSV aktarımı ve ofis raporu

Takip verisinden açıklanabilir panel üret; aynı sayıları CSV ve sunumda koru.
Süre: 60–75 dk

### Hazırlık
- Çalışan takip uygulaması veya Supabase’e bağlı eğitim sürümü.
- Kaynak veri ve dışa aktarma için çıktı klasörü.

### Doldurulacak alanlar
- [veri kaynağı]: Oturumdaki kullanıcının eğitim kayıtları
- [yenileme]: Manuel Yenile düğmesi
- [dönem]: 2026-W42

### Adım 1 Hesabı tanımla

Toplam mı görünür kayıt mı gösterileceğine karar ver. Ortalama için dolu geçerli puan sayısını yaz.

Beklenen sonuç: Panelin veri kapsamı açık.

### Adım 2 Paneli ekle

İlk promptu kullan. Kaydı değiştir ve Yenile sonucunu gözle.

Prompt — Claude Code

[veri kaynağı] için toplam, yeni/devam/tamamlandi dağılımı ve geçerli puan ortalaması paneli ekle. Yenileme yöntemi [yenileme] olsun. Girişsiz veya yetkisiz veriyi sorgulama. Veri yüklenirken, boşken ve hata verirken farklı ekran davranışları tanımla. Eski veriyi güncelmiş gibi gösterme.

Beklenen sonuç: Veri kaynağı ve yenileme yöntemi belli panel.

### Adım 3 CSV dışa aktar

İkinci promptu uygula. Dosyayı yeniden açarak Türkçe karakter, sütun ve satır sayısını kontrol et.

Prompt — Claude Code

Yalnızca yetkili kullanıcının görünür kayıtlarını kod,ad,alan,durum,tarih,puan sütunlarıyla UTF-8 CSV olarak dışa aktar. Tırnak, virgül ve satır sonlarını doğru kaçır. Formül gibi yorumlanabilecek hücreleri güvenli metin olarak aktar. Dosyaya token veya özel anahtar ekleme. Filtreli ve tüm veri aktarımını açıkça ayır.

Beklenen sonuç: Tekrar okunabilir UTF-8 CSV.

### Adım 4 Ofis çıktısı oluştur

Üçüncü promptu ver. Excel/Calc ile sayıları bağımsız hesapla; sunum taslağında rakamları karşılaştır.

Prompt — Cowork / Claude Chat

[dönem] CSV verisinden kısa rapor ve 5 slaytlık sunum taslağı hazırla. Sıra: amaç, veri kapsamı, durum dağılımı, kalite sorunları, sonraki işlem. Panelle aynı hesap yöntemini kullan. Gerçek kişi veya kurum verisi uydurma. Office eklentisi yoksa Markdown/metin ve CSV çıktısı oluştur; sunum dosyası varmış gibi söyleme.

Beklenen sonuç: Panel, CSV ve rapor aynı sayıları veriyor.

### Adım 5 Geri dönüşü dene

Dördüncü prompttaki ayrı test ortamı yaklaşımını uygula. Gerçek veri veya kaynak tabloyu değiştirme.

Prompt — Claude Code

Kurgusal CSV yedeğini ayrı bir eğitim tablosuna veya ayrı prototip kopyasına geri yükleme adımlarını göster. Kaynak tabloyu silme. Önce toplam ve örnek iki kaydı kaydet; yükleme sonrası sayıları karşılaştır. Veriyi dışa aktarmanın Auth/politika ayarlarının tam yedeği olmadığını devir notuna ekle.

Beklenen sonuç: Yedekten dönme deneyi ve karşılaştırma.

### Adım 6 Devir dosyasını tamamla

Kullanılan kaynak, dışa aktarma kapsamı, yenileme, hatalar ve sınırlamaları not et.

Beklenen sonuç: Tekrar üretilebilir rapor akışı.

### Örnek sonuç
Panel: 10 kayıt, yeni 3, devam 4, tamamlandı 3
CSV: 10 veri satırı + başlık
Rapor: puan toplamı 655, dolu puan 10, ortalama 65,5
Yedek deneyi: ayrı test kopyasında 10 kayıt.

### Başarı kontrolü
- Kapsam ve yenileme kullanıcıya açık.
- CSV tekrar açılıyor; sütunlar doğru.
- Yedek ayrı test ortamında denendi.

### Sorun çözümleri
- Canlı panel sanılıyor ama sadece örnek var: Örnek veriyi simülasyon diye etiketle. Yenileme türünü ve gerçek bağlı kaynağı ekranda belirt.
- Rapor sayısı panelden farklı: Filtre kapsamını, oturumu, ret satırlarını ve boş puan paydasını karşılaştır.

Teslim: Panel, CSV, rapor/sunum taslağı ve yedek notu

## 5. gün Kendi uygulamanı GitHub Pages’te yayımla

Bir statik projeyi kaynak koduyla yayımla; adresi ve canlı davranışı doğrula.
Süre: 45–60 dk

### Hazırlık
- Yeni eğitim depon; yayınlanacak index.html ve varlıklar.
- README, .gitignore, test raporu; özel sır veya gerçek kişi verisi bulunmayacak.

### Doldurulacak alanlar
- [kullanıcı]: Kendi GitHub kullanıcı adınız
- [depo]: alaaddin-egitim-projem
- [yayın URL]: https://[kullanıcı].github.io/[depo]/

### Adım 1 Dosyaları denetle

İlk promptu ver. index.html kökte, varlık yolları göreli olsun; gizli dosya varsa yayımlama.

Prompt — Claude Code

Bu eğitim projesini GitHub Pages için incele. index.html, göreli JS/CSS yolları, .nojekyll ve README bulunsun. Sır, .env, parola, token veya gerçek kişi verisi varsa değerleri tekrar yazmadan konumunu bildir. Pages’in statik hosting olduğunu, sunucu sırları ve veritabanının ayrı hizmette kalacağını açıkla. Henüz push yapma.

Beklenen sonuç: Yayın için temiz dosya listesi.

### Adım 2 Kodunu gönder

İkinci promptla remote ve diff kontrolünü yap. Alternatif olarak GitHub web arayüzünden sadece eğitim dosyalarını yükle.

Prompt — Claude Code

Hedef GitHub deposu [kullanıcı]/[depo]. Önce git status ve diff göster; sadece yayın için gereken dosyaları seç. Test sonuçlarını ve hedef remote adresini doğrula. İncelediğim kaynakları anlamlı commit ile bu depoya gönder. Başka depoya push, force push veya veri silme yapma. Sonuç commit SHA ve gönderim durumunu raporla.

Beklenen sonuç: Doğru depoda commit ve dosyalar.

### Adım 3 Pages kaynağını seç

Repository → Settings → Pages → Deploy from a branch → main → / (root) → Save. Gerekliyse docs klasörünü seç.

Prompt — Claude Code / Chat

[kullanıcı]/[depo] statik projesini yayımlamak için GitHub ekran adımları ver: Settings, Pages, Deploy from a branch, main, / (root), Save. Eğer dosyalar docs içindeyse ilgili klasörü açıklayarak seç. Actions dağıtımı tamamlanana kadar sonucu izle. Tahmin edilen URL’yi yayında doğrulanmış gibi yazma; gerçek bağlantıyı test et.

Beklenen sonuç: Pages kaynağı kaydedildi.

### Adım 4 Dağıtımı izle

Actions → pages build and deployment sonucunu incele. Başarısızsa ilk hata adımının logunu oku; aynı yayını körlemesine tekrarlama.

Beklenen sonuç: Dağıtım tamamlandı ve başarılı.

### Adım 5 Canlı testi yap

Dördüncü promptla ayrı tarayıcı görünümünde adresi aç. Dosya bağlantısı ve işlevleri kendin kontrol et.

Prompt — Claude Code

[yayın URL] üzerinde HTTPS, tüm JS/CSS dosyaları, alt dizin yolları, mobil görünüm, form doğrulama, arama, filtre, düzenleme ve veri kapsamını test et. Supabase kullanılıyorsa Auth yönlendirme URL ve A/B/anonim erişimini ayrı doğrula. Gerçek test sonucu ve çalıştırılamayan bölümleri yayın-testleri.md dosyasına yaz. Başarısız yetki testinde gerçek veriyle yayına hazır deme.

Beklenen sonuç: Doğrulanmış HTTPS URL ve test notu.

### Adım 6 Devir ve paylaşım

README’ye gerçek URL, sürüm, kurulum ve sınırları ekle. Paylaşım metninde uygulamanın gerçekten yaptığı işleri yaz.

Beklenen sonuç: Kod, yayın ve testleri birlikte erişilebilir teslim.

### Örnek sonuç
Kaynak: https://github.com/[kullanıcı]/[depo]
Yayın: https://[kullanıcı].github.io/[depo]/
Pages: main / root
index.html → ./style.css ve ./app.js
Arka hizmet: varsa Supabase; Pages üzerinde gizli anahtar tutulmaz.

### Başarı kontrolü
- Doğru depo ve yayın dalı seçildi.
- Actions tamamlandı; URL gerçekten açılıyor.
- JS/CSS, mobil ve işlev testleri geçti.

### Sorun çözümleri
- 404 sayfası: Dağıtım durumunu, index.html adı/büyük-küçük harfini ve Pages kaynak klasörünü kontrol et.
- Stil veya JavaScript yüklenmiyor: /style.css gibi kökten başlayan yollar yerine ./style.css kullan; dosya adının harfleri depodakiyle aynı olsun.
- Auth dönüşü yerel adrese gidiyor: Supabase Auth URL Configuration içinde gerçek yayın Site URL ve izin verilen redirect adreslerini gözden geçir.

Teslim: Depo, canlı URL ve yayın-testleri.md

## 5. gün Final teslimini ve 30 günlük kullanım planını hazırla

Çalışan ürünü, açık sorunları, bakım sorumluluğunu ve paylaşım planını tek teslimde birleştir.
Süre: 45–60 dk

### Hazırlık
- Canlı URL, GitHub deposu, gerçek test raporları ve proje-teslim.md şablonu.
- Duyuru için incelenecek içerik; kimseye otomatik mesaj gönderilmeyecek.

### Doldurulacak alanlar
- [proje]: Kurgusal eğitim takip uygulaması
- [bakım sahibi]: Belirlenen kişi/rol
- [pilot]: 3–5 gönüllüyle kurgusal veri üzerinde deneme

### Adım 1 Kanıtları seç

Canlı URL ve test dosyalarını aç; hangi özelliğin gerçekten çalıştığını işaretle.

Beklenen sonuç: Teslimin kanıt listesi.

### Adım 2 Şablonu doldur

İlk promptla proje-teslim.md oluştur; belirsiz alanları incele.

Prompt — Claude Chat

[proje] için proje-teslim.md şablonunu kullan. Depo, canlı URL, sürüm, çalışan akış, test sonucu, veri kaynağı, sınırlamalar ve açık sorunları doldur. Veri olmayan alanı “belirlenmedi”, çalıştırılmayan testi “çalıştırılmadı” yaz. Gerçek Auth/RLS yerine mock kullanılan bölümü açıkça belirt. Gizli anahtar veya parola ekleme.

Beklenen sonuç: Yanlış başarı iddiası olmayan devir dosyası.

### Adım 3 Bakım ve giderleri yaz

İkinci promptla limit, sorumlu ve yedek sıklığını belirle. Tek başına ücretsiz hosting’in tüm sistemi ücretsiz yapmadığını tartış.

Prompt — Claude Chat

[proje] bakımını [bakım sahibi] için planla. Haftalık hata kontrolü, sürüm güncelleme, yedek ve geri yükleme testi, kullanım limiti ve olayda geri dönüş adımı bulunsun. Abonelik, API, hosting, veritabanı ve domain giderlerini ayrı varsayımlarla yaz. Güncel fiyatı resmî kaynaktan kontrol et; fiyat uydurma.

Beklenen sonuç: Bakım sahibi ve kullanım varsayımları.

### Adım 4 Demoyu prova et

Üçüncü promptla 3 dakika sunum yap. Başka bir katılımcı rubrikle değerlendirsin.

Prompt — Claude Chat / Design

Bu teslim için 3 dakikalık demo metni ve 5 slayt taslağı yaz: sorun, kullanıcı, çalışan akış, doğrulama, sonraki adım. Bir hata durumunu ve güvenlik kanıtını göster. Simülasyonları etiketle. Gerçek kişi verisi, parola veya anahtar gösterme. Çalışmayan işlevleri vaat etme.

Beklenen sonuç: Çalışan akış ve sorunları gösteren demo.

### Adım 5 Pilotu planla

Dördüncü promptla 30 günlük plan oluştur; paylaşılacak metni insan incelemesinden geçir.

Prompt — Claude Chat

[pilot] için 30 günlük plan hazırla: 1. hafta deneme, 2. hafta düzeltme, 3. hafta 60 dakikalık tanıtım, 4. hafta görev başarısı/hata/kullanım/maliyet değerlendirmesi. GitHub ve canlı URL içeren kısa duyuru taslağı yaz. Kimseye mesaj gönderme; metni incelemem için sun. Gerçek kişisel veri kullanılacak aşamayı kurumun ilgili sorumlularıyla ayrıca değerlendirme maddesi koy.

Beklenen sonuç: Pilot, ölçütler ve duyuru taslağı.

### Adım 6 Kapanış ve sürüm

README’de son sürüm ve sonraki adımı belirt; gereksiz eğitim otomasyonlarını duraklat.

Beklenen sonuç: Sürdürülebilir ve izlenebilir teslim.

### Örnek sonuç
İlk hafta hedefi: 5 gönüllü, kişi başı 1 görev
Ölçüm: başarılı görev / toplam deneme; hata ve geri bildirim
Bakım: haftalık kontrol, aylık geri yükleme deneyi
Paylaşım: doğrulanmış URL + depo + kullanım sınırı

### Başarı kontrolü
- Teslimde gerçek test kanıtları var.
- Bakım sahibi ve gider varsayımları belirli.
- Duyuru doğru URL ve gerçek işlevleri anlatıyor.

### Sorun çözümleri
- Rubrikte ileri rota kanıtı yok: Eksik kısmı tamamlandı sayma; temel rota teslimini açıkça belirt ve sonraki geliştirmeyi planla.
- Maliyet bilinmiyor: Fiyatı uydurma; kullanım varsayımı ve tarihli resmî kaynak alanını doldurmak için sorumlu belirle.

Teslim: Final dosyası, bakım planı, demo ve yaygınlaştırma taslağı

## Çalışan örnekler
- Etkileşimli öğrenme aracı: https://gencbeyinlernet.github.io/alaattinklavuz/examples/ogrenme.html
- CSV Rapor Atölyesi: https://gencbeyinlernet.github.io/alaattinklavuz/examples/rapor.html
- Eğitim takip prototipi: https://gencbeyinlernet.github.io/alaattinklavuz/examples/takip.html

Örnekler yerel prototiptir; Auth/RLS veya bulut otomasyonu içermez. Kaynak kod paketi sitedeki Kaynaklar bölümünden indirilebilir.