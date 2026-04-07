import{Page,Locator,expect} from "@playwright/test";

export class PlaylistPage{

    readonly page: Page;
    
    readonly createPlayListButton: Locator;
    readonly playListButton: Locator;
    readonly playListMoreOptions: Locator;
    readonly playListEditsDetails: Locator;
    readonly playListNameEditButton: Locator;
    readonly playListVerification: Locator;
    readonly playListEditedVerification: Locator;
    readonly musicSearchBox: Locator;
    readonly addMusicButton: Locator;
    readonly caravanWhiplashJazzMusic: Locator;
    readonly imageUpload: Locator;

    constructor(page: Page){
        this.page = page;

        this.createPlayListButton = page.getByRole('button',{name:'Create',exact:true});
        this.playListButton = page.getByRole('menuitem',{name:'Playlist'});
        this.playListMoreOptions = page.getByTestId('action-bar-row').getByTestId('more-button');
        this.playListEditsDetails = page.getByRole('menuitem', { name: 'Edit details' })
        this.playListNameEditButton = page.getByTestId('playlist-edit-details-name-input')
        this.playListVerification = page.getByRole('button', { name: 'My Playlist #2 – Edit details' });
        this.playListEditedVerification = page.getByRole('button', { name: 'Favorilerim – Edit details' });
        this.musicSearchBox = page.getByRole('searchbox', { name: 'Search for songs or episodes' });
        this.caravanWhiplashJazzMusic = page.getByTestId('playlist-tracklist').getByTestId('internal-track-link');
        this.addMusicButton = page.getByTestId('add-to-playlist-button').first();
        this.imageUpload = page.getByTestId('image-file-picker');
    }


    async createPlaylist(){
        await this.createPlayListButton.click();
        await this.page.waitForTimeout(250);
        await this.playListButton.click();
    }

    async verifyPlayList(){
        await expect(this.playListVerification).toContainText('2. My Playlist');
    }

    async renamedPlaylist(){
        await this.playListMoreOptions.click();
        await this.playListEditsDetails.click();
        await this.playListNameEditButton.click();
        await this.playListNameEditButton.fill('Favorilerim');
    }

    async uploadImage(){
        await this.imageUpload.setInputFiles('/home//pardus//İndirilenler//Shire.jpg');
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    async renamedPlaylistVerification(){
        await expect(this.playListEditedVerification).toContainText('Favorilerim');
    }

    async addMusic(){
        await this.musicSearchBox.click();
        await this.musicSearchBox.fill('Caravan',);
        await this.addMusicButton.click();
    }

    async addedMusicVerification(){
        await expect(this.caravanWhiplashJazzMusic).toContainText('Caravan');
    }

    async deletePlaylist(){
        await this.playListMoreOptions.click();
        await this.page.getByRole('menuitem', { name: 'Delete' }).click();
        await this.page.getByRole('button', { name: 'Delete' }).click();
    }

    
}
