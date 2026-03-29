import { test, expect } from '../src/fixture/custom-fixture';
  test.use({ storageState: 'spotify-session.json' });

  test.beforeEach('Spotify Ana Sayfayasına Gidilir ve Çerezler Reddedilir', async ({ basePage }) => {
    await basePage.goToSpotify();  
    await basePage.rejectingCookies();
  });

  test('Spotify Ana Sayfası ve Kullanıcı Oturumu Kontrol Edilir', async ({ basePage }) => {
    await expect(basePage.spotifyLogo).toBeVisible();
    await expect(basePage.userNameButton).toBeVisible();
  });
  


 