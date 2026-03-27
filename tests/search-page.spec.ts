import {test,expect} from "../src/fixture/custom-fixture";

test.use({ storageState: 'spotify-session.json' });

test.beforeEach(async ({ basePage, searchPage }) => {
    await basePage.goToSpotify();
    await basePage.rejectingCooking();
});

test('Şarkı arama işlemleri', async ({ basePage, searchPage     }) => {
    
    await test.step('Şarkı arama ve doğrulama yapılır', async () => {
        await searchPage.searchForSong('Caravan');

        await expect(searchPage.songSearchBox).toHaveValue('Caravan');

        await expect(searchPage.artistName).toContainText('John Wasson');
    });
}); 