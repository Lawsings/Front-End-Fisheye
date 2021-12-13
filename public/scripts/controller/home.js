/* * * * * * * * * * * * * * * * * * * */
/*  Main JS entry point for Home page  */
/* * * * * * * * * * * * * * * * * * * */
import GetPhotographers from '../models/GetPhotographers.js';
import BuildIndexPage from '../models/builders/BuildIndexPage.js';

class App {
    constructor() {
        // Dom nodes
        this.dom = {
            $photographersSection: document.querySelector('.photographersSection'),
        };

        // Properties
        this._api = new GetPhotographers();
        this._photographersList = [];
    }

    // Initialiaze the JS on index.html page

    async main() {
        // Fetch data
        this._photographersList = await this._api.getList();
        // Build page
        new BuildIndexPage(this._photographersList, this.dom.$photographersSection).init();
    }
}

const app = new App();
app.main();
