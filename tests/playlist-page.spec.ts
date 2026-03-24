import{test,expect} from "@playwright/test";
import{HomePage} from "../src/pages/HomePage";
import { PlaylistPage} from "../src/pages/PlaylistPage";

test.use({storageState: "spotify-session.json"});

test('Spotify Oynatma Litesi Oluşturma,düzenleme ve doğrulama',async({page})=> {

    const homePage=new HomePage(page);
    const playlistPage=new PlaylistPage(page);

    await   test.step('Playlist Oluşturulur ve doğrulama yapılır',async () => {

        await homePage.goToSpotify();
        await homePage.homePageVerification();
        await homePage.userSessionVerification();
        await homePage.rejectingCooking();

        await playlistPage.createPlaylist();
    });

    await test.step('Oynatma listesi adı ve kapak resmi değiştirilir ',async ()=>{
        await playlistPage.renamedPlaylist();
        await playlistPage.uploadImage();
        await playlistPage.renamedPlaylistVerification();
    });

    await test.step('Müzik eklenir ve doğrulama yapılır',async ()=>{
        await playlistPage.addMusic();
        await playlistPage.addedMusicVerification();
    });

    await test.step('Oynatma listesi silinir ve doğrulama yapılır',async ()=>{

    });
});
