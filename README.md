### Bu proje, Playwright + TypeScript ve Visual Studio Code IDE kullanılarak Spotify Web üzerinde temel kullanıcı senaryolarının uçtan uca (E2E) test otomasyonunu içerir.

### Kapsam 🚀

✅ Oynatma listesi (playlist) oluşturma

✅ Oynatma listesine müzik ekleme

✅ Oynatma listesinden müzik silme

✅ Oynatma listesi (playlist) silme

✅ Sanatçı takip etme

✅ Sanatçıyı takipten çıkarma

✅ Tüm işlemlerin doğrulanması (assertion)
<br><br>

### Projeyi çalıştırmadan önce aşağıdaki adımları takip edin:
### Bağımlılıkların Yüklenmesi
1. Terminale aşağıdaki kodları yazın.
   ```bash
   npm install
   
### Nodemailer Kurulumu
1. Terminale aşağıdaki kodları yazın.
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer

### env Dosyası
1. test_data klasörünün altında .env.qa adında env dosyası oluşturun.
2. Dosyanın içerisine aşağıdaki değişkenlerin değerlerini kendi değerlerinize göre uyarlayın:
   ```env
   BASE_URL = url
   SENDER_EMAIL = sender_email
   TARGET_EMAIL = target_email
   APP_PASSWORD = app_password

### dotenv Kurulumu
1. Terminale aşağıdaki kodları yazın.
   ```bash
   npm install dotenv --save-dev

### save-session.js Çalıştırma
1. Terminale aşağıdaki kodları yazın. Bir defa çalıştırılması yeterlidir.
2. Kullanıcı girişi yapıldıktan sonra terminalde 1 defa enter tuşuna basın.
   ```bash
   node save-session.js

### Test Çalıştırma
1. `tests` klasörüne sağ tıklayıp ardından 'Run Tests' seçeneğine tıklayın.
2. Sol menüde laboratuvar simgesine(Testing) tıklayarak tarayıcı seçimi yapabilirsiniz.

### Test Sonucu
1. `playwright-report/index.html` dosyasını açın.
2. F5 tuşuna basın.
3. Test sonuçlarını detaylı şekilde görüntüleyebilirsiniz.
4. Başarısız olan adımlar için ekran görüntüleri otomatik olarak rapora eklenir.
