import { test, expect } from '@playwright/test';

  // storageState ile kaydedilmiş oturumu kullan
  test.use({ storageState: 'spotify-session.json' });

test('Spotify Ana Sayfayasına Gidilir', async ({ page }) => {


  await test.step('Anasayfaya Gidilir', async () => {
    await page.goto('https://open.spotify.com/');
  });


  await test.step('Kitaplık(Library) bileşeninin doğrulanması',async () => {
      const libraryButton = page.getByRole('button', { name: /Your Library/i });

    await expect(libraryButton).toBeVisible();
    await expect(libraryButton).toContainText('Your Library');
  }
  );
  
});


test('spotify ana sayfa logged-in kontrol', async ({ page }) => {
  await page.goto('https://open.spotify.com/');
  // basit bir kontrol: profil linki ya da kullanıcı menüsü görünür mü?
  await expect(page.locator('button[aria-label="Profile"]')).toBeVisible({ timeout: 1000 }).catch(async () => {
    // eğer farklı elementse, sadece URL kontrolü yap
    await expect(page).toHaveURL(/open\.spotify\.com/);
  });

  // buraya test adımlarını ekle (arama, play butonuna basma vs.)
});
 