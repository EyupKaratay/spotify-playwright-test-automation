import{test,expect} from "@playwright/test";
import{BasePage} from "../src/pages/BasePage";
import { PlaylistPage} from "../src/pages/PlaylistPage";

test.use({storageState: "spotify-session.json"});

test('Spotify Oynatma Litesi Oluşturma,düzenleme ve doğrulama',async({page})=> {

    const basePage=new BasePage(page);
    const playlistPage=new PlaylistPage(page);

    await   test.step('Playlist Oluşturulur ve doğrulama yapılır',async () => {

        await basePage.goToSpotify();
        await basePage.rejectingCookies();
        await playlistPage.createPlaylist();
    });

    await test.step('Oynatma listesi adı ve kapak resmi değiştirilir ',async ()=>{
        await playlistPage.renamedPlaylist();
        await playlistPage.uploadImage();
        await expect(playlistPage.playListEditedVerification).toContainText('Favorilerim');
    });

    await test.step('Müzik eklenir ve doğrulama yapılır',async ()=>{
        await playlistPage.addMusic();
        await expect(playlistPage.rastMakamiMusiki).toContainText('Rast Makamı - Turkish Music Therapy');
    });

    await test.step('Oynatma listesi silinir',async ()=>{
        await playlistPage.deletePlaylist();
    });
});
