import PhotographerProfileLarge from '../../templates/PhotographerProfileLarge.js';
import FilterForm from '../../templates/FilterForm.js';
import DisplayMediaSection from '../../templates/DisplayMediaSection.js';

export default class BuildPhotographerPage {
    constructor(store) {
        // Photographer profile top card & static mini bar
        new PhotographerProfileLarge(store).render();

        // Filter Field
        new FilterForm(store).render();

        // Photographers display media section
        new DisplayMediaSection(store).render();
    }
}
