import{Page,Locator} from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly songSearchBox: Locator;
    readonly artistName: Locator;
    readonly song: Locator;
    readonly goToAlbum: Locator;
    readonly albumPage: Locator;
    readonly artistFollowButton: Locator;
    readonly artistUnfollowingButton: Locator;
    readonly artistPageName: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.songSearchBox = page.getByTestId('search-input');
        this.artistName = page.getByRole('link', { name: 'John Wasson' }).nth(2);
        this.song = page.getByRole('link', { name: 'Caravan' }).nth(1);
        this.goToAlbum = page.getByRole('menuitem', { name: 'Go to album' });
        this.albumPage = page.getByTestId('entityTitle').getByRole('heading', { name: 'Whiplash (Original Motion' });
        this.artistFollowButton = page.getByTestId('action-bar-row').getByRole('button', { name: 'Follow' });
        this.artistUnfollowingButton = page.getByRole('button', { name: 'Following' });
        this.artistPageName = page.getByTestId('adaptiveEntityTitle').getByText('John Wasson');
    }

    async searchForSong(songName: string) {
        await this.songSearchBox.fill(songName);
        await this.songSearchBox.press('Enter');
    }

    async goToAlbumPage() {
        await this.song.click({button:'right'});
        await this.goToAlbum.click();
    }

    async goToArtistPage() {
        await this.artistName.click();
    }

    async followArtist() {
       await this.artistFollowButton.click();
    }

    async unfollowArtist() {
        await this.artistUnfollowingButton.click();
    }

}