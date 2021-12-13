import Api from './Api.js';

/**
 * Media type definition
 *
 * @typedef {Object} Media
 * @property {number} id
 * @property {number} photographerId
 * @property {string} title
 * @property {string} desc
 * @property {string} [image]
 * @property {string} [video]
 * @property {number} likes
 * @property {string} date
 * @property {number} price
 *
 */

export default class GetMedias extends Api {
    constructor(id) {
        super();
        this.id = id;
    }

    /**
     * Get all Medias for current Photographer
     * @param {number} id
     * @returns {Media[]} Array of Photographers
     */
    async getMedias() {
        const data = await this.fetchData();
        return data.media.filter((e) => e.photographerId === this.id);
    }
}
