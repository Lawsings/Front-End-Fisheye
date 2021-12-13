/* * * * * * * * * * * * * * * * * * * * * * */
/*  DisplayMedia Section on Photograph page  */
/* * * * * * * * * * * * * * * * * * * * * * */

import mediaFactory from '../models/factories/mediaFactory.js';
export default class DisplayMediaSection {
    constructor(store) {
        this._photographerWork = store.photographerWork;
        this.$main = document.getElementById('main');
    }

    // Display all media cards for current photographer
    render() {
        const displayWorkSection = document.createElement('div');
        displayWorkSection.classList.add('displayMediaSection');

        this._photographerWork.forEach((e) => {
            displayWorkSection.appendChild(mediaFactory(e));
        });

        this.$main.appendChild(displayWorkSection);
    }
}
