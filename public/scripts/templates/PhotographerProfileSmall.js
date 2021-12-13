/* * * * * * * * * * * * * * * * */
/*  Miniature Card on Home Page  */
/* * * * * * * * * * * * * * * * */

/**
 * Create HTML photographer profile node
 * @param {Photographer}
 * @return {HTMLElement}
 */
export default class PhotographerProfileSmall {
    constructor({ name, id, city, country, tagline, price, portrait }) {
        Object.assign(this, { name, id, city, country, tagline, price, portrait });

        this.picture = `public/assets/photographers/${this.portrait}`;
    }

    render() {
        const content = `
            <article class="photographersSection__profile" data-id="${this.id}">
                <a class="photographersSection__profile__link" href="photographer.html?id=${this.id}">
                    <img src="${this.picture}" class="photographersSection__profile__link__picture" alt="${this.tagline}"></img>
                    <h2 class="photographersSection__profile__link__name">${this.name}</h2>
                </a>
                <p class="photographersSection__profile__location">${this.city}, ${this.country}</p>
                <p class="photographersSection__profile__description">${this.tagline}</p>
                <p class="photographersSection__profile__price">${this.price}€/jour</p>
            </article>
        `;

        return document.createRange().createContextualFragment(content);
    }
}
