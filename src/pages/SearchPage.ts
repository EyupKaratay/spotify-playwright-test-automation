import{Page,Locator} from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly songSearchBox: Locator;
    readonly song: Locator;
    readonly artistName: Locator;
    readonly goToAlbum: Locator;
    readonly albumPage: Locator;
    readonly artistFollowButton: Locator;
    readonly artistUnfollowingButton: Locator;
    readonly artistPageName: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.songSearchBox = page.getByTestId('search-input');
        this.song = page.getByTestId('track-list').getByRole('link', { name: 'Rast Makamı - Turkish Music' });
        this.artistName = page.getByRole('link', { name: 'Oruç Güvenç ve Tümata' }).nth(1);
        this.goToAlbum = page.getByRole('menuitem', { name: 'Go to album' });
        this.albumPage = page.getByTestId('entityTitle').getByRole('heading', { name: 'Rast Makamı - Turkish Music' });
        this.artistFollowButton = page.getByTestId('action-bar-row').getByRole('button', { name: 'Follow' });
        this.artistUnfollowingButton = page.getByRole('button', { name: 'Following' });
        this.artistPageName = page.getByTestId('adaptiveEntityTitle').getByText('Oruç Güvenç ve Tümata');
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