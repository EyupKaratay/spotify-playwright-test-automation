import{expect,Page,Locator} from "@playwright/test";

export class HomePage{
    readonly page: Page;

    readonly libraryButton: Locator;
    readonly expectedYourLibraryText: string;
    readonly userNameButton:Locator;
    readonly rejectCookiesButton: Locator;


    constructor (page: Page){

        this.page=page;
        
        this.libraryButton=page.getByRole('button', { name: 'Collapse Your Library' });
        this.expectedYourLibraryText="Your Library";

        this.userNameButton=page.getByTestId('user-widget-link')

        this.rejectCookiesButton=page.getByRole('button',{name:'REJECT ALL'});
    };

    async goToSpotify(){
        await this.page.goto("https://open.spotify.com/");
    };

    async homePageVerification(){
        await expect(this.libraryButton).toContainText(this.expectedYourLibraryText);
    };

    async userSessionVerification(){
        await expect(this.userNameButton).toBeVisible();
    };

    async rejectingCooking(){
        await this.rejectCookiesButton.click();
    };  
};