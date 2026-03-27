import { test as base } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { PlaylistPage } from '../pages/PlaylistPage';
import { SearchPage } from '../pages/SearchPage';

type MyFixture = {
  basePage: BasePage;
  playlistPage: PlaylistPage;
  searchPage: SearchPage;
};

export const test = base.extend<MyFixture>({
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
  }

});

export { expect } from '@playwright/test';