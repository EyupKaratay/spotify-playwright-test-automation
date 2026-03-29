import {test,expect} from "../src/fixture/custom-fixture";

test.use({ storageState: 'spotify-session.json' });

test.beforeEach(async ({    basePage    }) => {
    await basePage.goToSpotify();
    await basePage.rejectingCookies();
});

test('Şarkı arama işlemleri', async ({  searchPage  }) => {
    
    await test.step('Şarkı arama ve doğrulama yapılır', async () => {
        await searchPage.searchForSong('Caravan');
        await expect(searchPage.songSearchBox).toHaveValue('Caravan');
        await expect(searchPage.artistName).toContainText('John Wasson');
    });

    await test.step('Albüm sayfasına gidilir ve  doğrulama yapılır', async () => {
        await searchPage.goToAlbumPage();
        await expect(searchPage.albumPage).toContainText('Whiplash (Original Motion Picture Soundtrack)');
    });

    await test.step('Şarkı arama sayfasına geri gidilir ve sanatçı sayfasına gidilir,doğrulama yapılır,sanatçı takip edilir,sanatçı takip etmekten çıkılır',async () => {
        await searchPage.page.goBack();
        await searchPage.artistName.click();
        await expect(searchPage.artistPageName).toContainText('John Wasson');
        await searchPage.artistFollowButton.click();
        await expect(searchPage.artistUnfollowingButton).toContainText('Following');
        await searchPage.artistUnfollowingButton.click();
        await expect(searchPage.artistFollowButton).toContainText('Follow');
    })
}); 