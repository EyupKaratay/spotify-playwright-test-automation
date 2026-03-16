import{Page,Locator} from "@playwright/test";

export class PlaylistPage{

    readonly page: Page;
    
    readonly createPlayListButton: Locator;
    readonly playListButton: Locator;
    readonly playListNameButton: Locator;
    readonly playListEditsDetails: Locator;
    readonly playListNameEditButton: Locator;

    constructor(page: Page){
        this.page=page;
        this.createPlayListButton = page.getByRole('button',{name:'Create',exact:true});
        this.playListButton= page.getByRole('menuitem',{name:'Playlist'});
        this.playListNameButton=page.getByRole('button',{name:'2. My Playlist'});
        this.playListEditsDetails=page.getByRole('button',{name:'Edits Details'});
        this.playListNameEditButton=page.getByRole('button',{name:'2. My Playlist - playlist by ali | Spotify'});
    }

    
    async createPlaylist(){
        await this.createPlayListButton.click();
        await this.page.waitForTimeout(250);
        await this.playListButton.click();
        await this.playListNameButton.click({button:'right'});
        await this.playListEditsDetails.click();
        await this.playListNameEditButton.fill('Favorilerim');
    }

}

