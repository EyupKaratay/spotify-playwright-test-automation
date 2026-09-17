# Spotify E2E Test Otomasyonu

[![CI](https://github.com/EyupKaratay/spotify-playwright-test-automation/actions/workflows/ci.yml/badge.svg)](https://github.com/EyupKaratay/spotify-playwright-test-automation/actions/workflows/ci.yml)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

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

### 1. Bağımlılıkların Yüklenmesi
Tüm bağımlılıklar `package.json` içinde tanımlıdır, tek komut yeterlidir:
   ```bash
   npm install
   npx playwright install
   ```

### 2. env Dosyası
`test_data` klasörünün altında `.env.qa` adında bir dosya oluşturun ve değerleri kendinize göre uyarlayın:
   ```env
   BASE_URL=https://open.spotify.com
   SENDER_EMAIL=gonderen_mail
   TARGET_EMAIL=alici_mail
   SENDER_APP_PASSWORD=gmail_uygulama_sifresi
   ```

### 3. Oturum Kaydı (save-session.js)
Bir defa çalıştırılması yeterlidir. Kullanıcı girişi yapıldıktan sonra terminalde bir kez Enter tuşuna basın.
   ```bash
   node save-session.js
   ```

### 4. Test Çalıştırma
   ```bash
   npm test                 # tüm tarayıcılarda çalıştırır
   npm run test:chromium    # yalnızca Chromium
   npm run test:headed      # tarayıcıyı görünür modda açar
   npm run typecheck        # TypeScript tip kontrolü
   npm run report           # son HTML raporu açar
   ```
VS Code kullanıyorsanız, sol menüdeki Testing (laboratuvar) simgesinden de tarayıcı seçip test çalıştırabilirsiniz.

### Test Sonucu
1. `playwright-report/index.html` dosyasını açın.
2. F5 tuşuna basın.
3. Test sonuçlarını detaylı şekilde görüntüleyebilirsiniz.
4. Başarısız olan adımlar için ekran görüntüleri otomatik olarak rapora eklenir.

<br>

### Sürekli Entegrasyon (CI)

Proje GitHub Actions ile entegredir: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

**`verify` job'ı** — her `push` ve `pull request` işleminde otomatik çalışır:
- Bağımlılıkları kurar (`npm ci`)
- TypeScript tip kontrolü yapar (`tsc --noEmit`)
- Playwright tarayıcılarını kurar
- Test suite'inin sorunsuz derlendiğini ve tanındığını doğrular (`playwright test --list`)

**`e2e` job'ı** — yalnızca elle tetiklenir (`workflow_dispatch`):
Testler gerçek bir Spotify oturumuna (`spotify-session.json`) ve ortam değişkenlerine bağlı olduğu için,
bu bilgiler GitHub Secrets üzerinden sağlandığında çalıştırılır. Çalışma sonunda HTML raporu
artifact olarak yüklenir.

> Not: Testler canlı Spotify arayüzüne karşı koştuğu için her push'ta otomatik çalıştırılmaz.
> Bu bilinçli bir tercihtir — dış servise bağlı testlerin CI'ı kararsız hale getirmesini önler.
