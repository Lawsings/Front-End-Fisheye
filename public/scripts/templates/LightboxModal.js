/* * * * * * * * * * * * * * * * * * * * * */
/*  Big Card Profile on Photographer Page  */
/* * * * * * * * * * * * * * * * * * * * * */

export default class PhotographerProfileLarge {
    constructor(store) {
        this._infos = store;
        this.$main = document.getElementById('main');
    }

    render() {
        const { name, city, country, tagline, price, portrait } = this._infos.photographerInfo;
        const totalLikes = this._infos.totalLikes;

        // Top card
        const card = `
            <article class="photographer__profileCard">
                <div class="photographer__profileCard__infos">
                        <h1 class="photographer__profileCard__infos__name">${name}</h1>
                        <p class="photographer__profileCard__infos__location">${city}, ${country}</p>
                        <p class="photographer__profileCard__infos__description">${tagline}</p>
                </div>
                <button class="photographer__profileCard__contactButton">Contactez-moi</button>
                <img class="photographer__profileCard__picture" src="public/assets/photographers/${portrait}" alt="Mimi Keel">
            </article>
        `;

        // Mini sticky info bar
        const stickyInfoBar = `
        <div class="photographer__stickyMiniBar">
                <p class="photographer__stickyMiniBar__likes">${totalLikes}</p>
                <svg role="img" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="likes">
                    <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#000"></path>
                </svg>
            <p class="photographer__stickyMiniBar__price">${price}€ / jour</p>
        </div>
        `;

        // Render to html
        this.$main.innerHTML = card + stickyInfoBar;
    }
}
