import {test,expect} from "../src/fixture/custom-fixture";

test.use({ storageState: 'spotify-session.json' });

test.beforeEach(async ({    basePage    }) => {
    await basePage.goToSpotify();
    await basePage.rejectingCookies();
});

test('Şarkı arama işlemleri', async ({  searchPage  }) => {
    
    await test.step('Şarkı arama ve doğrulama yapılır', async () => {
        await searchPage.searchForSong('Rast Makamı');
        await expect(searchPage.songSearchBox).toHaveValue('Rast Makamı');
        await expect(searchPage.artistName).toContainText('Oruç Güvenç ve Tümata');
    });

    await test.step('Albüm sayfasına gidilir ve  doğrulama yapılır', async () => {
        await searchPage.goToAlbumPage();
        await expect(searchPage.albumPage).toContainText('Rast Makamı - Turkish Music Therapy');
    });

    await test.step('Şarkı arama sayfasına geri gidilir ve sanatçı sayfasına gidilir,doğrulama yapılır,sanatçı takip edilir,sanatçı takip etmekten çıkılır',async () => {
        await searchPage.page.goBack();
        await searchPage.artistName.click();
        await expect(searchPage.artistPageName).toContainText('Oruç Güvenç ve Tümata');
        await searchPage.artistFollowButton.click();
        await expect(searchPage.artistUnfollowingButton).toContainText('Following');
        await searchPage.artistUnfollowingButton.click();
        await expect(searchPage.artistFollowButton).toContainText('Follow');
    })
}); 