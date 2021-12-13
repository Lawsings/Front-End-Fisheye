import Api from './Api.js';

/**
 * Photographer type definition
 *
 * @typedef {Object} Photographer
 * @property {string} name
 * @property {number} id
 * @property {string} city
 * @property {string} tagline
 * @property {number} price
 * @property {string} portrait
 */

export default class GetPhotographers extends Api {
    constructor(id) {
        super();
        this.id = id;
    }

    /**
     * Get All Photographers
     * @returns {Photographer[]}
     */
    async getList() {
        const data = await this.fetchData();
        return data.photographers;
    }
    /**
     * Get one Photographer by id
     * @param {number} id
     * @returns {Photographer}
     */
    async getPhotographerById() {
        const data = await this.getList();
        return data.find((e) => e.id === this.id);
    }
}
