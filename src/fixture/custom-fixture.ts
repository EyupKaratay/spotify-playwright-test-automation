import { test as base } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { PlaylistPage } from '../pages/PlaylistPage';
import { SearchPage } from '../pages/SearchPage';
import { sendScreenshotEmail } from '../utils/mail-sender';

type MyFixture = {
  basePage: BasePage;
  playlistPage: PlaylistPage;
  searchPage: SearchPage;
};

export const test = base.extend<MyFixture>({
  page: async ({ page }, use, testInfo) => {
    await use(page);

    if(testInfo.status !== testInfo.expectedStatus) {
      const timestamp = new Date();

      const formattedDate = [
        String(timestamp.getDate()).padStart(2, '0'),
        String(timestamp.getMonth() + 1).padStart(2, '0'),timestamp.getFullYear(),
        String(timestamp.getHours()).padStart(2, '0'),
        String(timestamp.getMinutes()).padStart(2, '0'),
        String(timestamp.getSeconds()).padStart(2, '0'),
      ].join('-');

      const screenshotPath = `screenshots/screenshot-${formattedDate}.png`;

      await page.screenshot({ path: screenshotPath });

      await testInfo.attach('Error Screenshot', {
        path: screenshotPath,
        contentType: 'image/png',
      });

      try {
        await sendScreenshotEmail({
          to: 'target email@gmail.com',
          screenshotPath,
          subject: '❌ Test Fail Oldu',
          text: `Test Adı: ${testInfo.title}`,
        });
      } catch (err) {
        console.error('Mail gönderilemedi:', err);
      }
    }
  },

  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },

  playlistPage: async ({ page }, use) => {
    const playlistPage = new PlaylistPage(page);
    await use(playlistPage);
  },

  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    await use(searchPage);
  },

});

export { expect } from '@playwright/test';