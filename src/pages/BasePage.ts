import{expect,Page,Locator} from "@playwright/test";


export class BasePage{
    readonly page: Page;

    readonly libraryButton: Locator;
    readonly expectedYourLibraryText: string;
    readonly rejectCookiesButton: Locator;
    readonly spotifyLogo: Locator; 
    readonly userNameButton:Locator;


    constructor (page: Page){

        this.page=page;
        
        this.libraryButton=page.getByRole('button', { name: 'Collapse Your Library' });
        this.expectedYourLibraryText="Your Library";
        this.rejectCookiesButton=page.getByRole('button',{name:'REJECT ALL'});
        this.spotifyLogo=page.getByTestId('global-nav-bar').getByRole('link', { name: 'Spotify' });
        this.userNameButton=page.getByTestId('user-widget-link');
    };

    
    async goToSpotify(){
        await this.page.goto('/');
    };

    
    async rejectingCookies(){
        
        await this.rejectCookiesButton.click();
    };
    
};