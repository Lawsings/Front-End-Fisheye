/* * * * * * * * * * * * * * * * * * * * * * * */
/*  Miniature Image Card on Photographer Page  */
/* * * * * * * * * * * * * * * * * * * * * * * */

export default class MediaImage {
    constructor({ id, title, image, likes, date, desc }) {
        const content = `
        <article data-date=${date} class="displayMediaSection__mediaCard" data-id=${id}>
            <a href="#" class="displayMediaSection__mediaCard__link" aria-label="${title}, closeup view">
                <img src="public/assets/media/${image}" class="displayMediaSection__mediaCard__picture" alt="${desc}"></img>
            </a>
            <div class="displayMediaSection__mediaCard__desc">
                <p class="displayMediaSection__mediaCard__desc__title">${title}</p>
                <p class="displayMediaSection__mediaCard__desc__likes" aria-label="likes" data-id=${id}>${likes}</p>
            </div>
        </article>
        `;

        return document.createRange().createContextualFragment(content);
    }
}
