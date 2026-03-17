import{Page,Locator,expect} from "@playwright/test";

export class PlaylistPage{

    readonly page: Page;
    
    readonly createPlayListButton: Locator;
    readonly playListButton: Locator;
    readonly playListNameButton: Locator;
    readonly playListEditsDetails: Locator;
    readonly playListNameEditButton: Locator;
    readonly playListVerification: Locator;
    readonly playListEditedVerification: Locator;

    constructor(page: Page){
        this.page = page;

        this.createPlayListButton = page.getByRole('button',{name:'Create',exact:true});
        this.playListButton = page.getByRole('menuitem',{name:'Playlist'});
        this.playListNameButton = page.getByRole('button',{name:'2. My Playlist',exact:true});
        this.playListEditsDetails = page.getByRole('button',{name:'Edits Details'});
        this.playListNameEditButton = page.getByRole('button',{name:'2. My Playlist - playlist by ali | Spotify'});
        this.playListVerification = page.getByRole('button',{name:'2. My Playlist',exact:true});
        this.playListEditedVerification = page.getByRole('button',{name:'Favorilerim',exact:true});
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
        await this.playListNameButton.click({button:'right'});
        await this.playListEditsDetails.click();
        await this.playListNameEditButton.fill('Favorilerim');
    }

    async renamedPlaylistVerification(){
        await expect(this.playListEditedVerification).toContainText('Favorilerim');
    }

    
}

