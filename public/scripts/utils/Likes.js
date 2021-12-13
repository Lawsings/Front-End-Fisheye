/* * * * * * * * * * * * * * * * * * */
/*  Handle likes on Photograph page  */
/* * * * * * * * * * * * * * * * * * */

export default class Likes {
    constructor(store) {
        this._store = store;

        this.$totalLikes = document.querySelector('.photographer__stickyMiniBar__likes');
        this.$likesContainer = document.querySelectorAll('.displayMediaSection__mediaCard__desc__likes');

        this.handleClick = this.handleClick.bind(this);
    }
    updateLikes(action, node) {
        let nodeLikes = parseInt(node.textContent);
        node.textContent = nodeLikes + (action === 'INC' ? 1 : -1);
        this._store.totalLikes = this._store.totalLikes + (action === 'INC' ? 1 : -1);
        console.log(this._store);
        console.log(node);
        Object.assign(
            this._store.photographerWork.find((e) => e.id === parseInt(node.dataset.id)),
            { likes: parseInt(node.textContent) }
        );
        this.render();
    }

    handleClick(e) {
        const mediaId = e.target.dataset.id;
        let isClicked;
        if (this._store.currentLikesId.indexOf(mediaId) < 0) {
            this._store.currentLikesId.push(mediaId);
            isClicked = false;
        } else {
            isClicked = true;
            this._store.currentLikesId.splice(this._store.currentLikesId.indexOf(mediaId), 1);
        }

        this.updateLikes(isClicked ? 'DEC' : 'INC', e.target);
    }

    init() {
        this.$likesContainer.forEach((e) => e.addEventListener('click', this.handleClick));
    }

    render() {
        this.$totalLikes.textContent = this._store.totalLikes;
    }
}
