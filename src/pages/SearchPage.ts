import{Page,Locator} from "@playwright/test";

export class SearchPage {
    readonly page: Page;
    readonly songSearchBox: Locator;
    readonly artistName: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.songSearchBox = page.getByTestId('search-input');
        this.artistName = page.getByRole('link', { name: 'John Wasson' }).nth(2);
    }

    async searchForSong(songName: string) {
        await this.songSearchBox.fill(songName);
        await this.songSearchBox.press('Enter');
    }

}