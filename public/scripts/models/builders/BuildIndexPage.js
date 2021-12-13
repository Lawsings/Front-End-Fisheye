import PhotographerProfileSmall from '../../templates/PhotographerProfileSmall.js';

export default class BuildIndexPage {
    constructor(photographersList, domNode) {
        this.photographersList = photographersList;
        this.dom = domNode;
    }

    init() {
        this.photographersList.forEach((e) => {
            const htmlCardTemplate = new PhotographerProfileSmall(e).render();
            this.dom.appendChild(htmlCardTemplate);
        });
    }
}
