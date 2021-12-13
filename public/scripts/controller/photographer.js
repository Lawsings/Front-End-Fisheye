import GetPhotographers from '../models/GetPhotographers.js';
import GetMedias from '../models/GetMedias.js';
import Likes from '../utils/Likes.js';
import BuildPhotographerPage from '../models/builders/BuildPhotographerPage.js';


class App {
    constructor() {
        /**
         * Query string parameters to display the correct subject
         * If id is wrong type, pass first photographerId
         * @type {number}
         */
        this._photographerId = parseInt(Object.fromEntries(new URLSearchParams(window.location.search).entries()).id) || 243;

        // Storage
        this._store = {
            photographerInfo: {},
            photographerWork: [],
            currentLikesId: [],
            totalLikes: 0,
        };
    }

    async fetchPhotographerData() {
        this._store.photographerInfo = await new GetPhotographers(this._photographerId).getPhotographerById();
        this._store.photographerWork = await new GetMedias(this._photographerId).getMedias();
        this._store.totalLikes = this._store.photographerWork.reduce((a, b) => a + b.likes, 0);
    }

    // Initialiaze the JS on photographer.html page

    async main() {
        // Fetch data
        await this.fetchPhotographerData();

        // Build page
        new BuildPhotographerPage(this._store);

        // Handle events : likes system
        new Likes(this._store).init();
    }
}

var app = new App();
app.main();
