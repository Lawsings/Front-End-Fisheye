/* * * * * * * * * * * * * * * * * * * */
/*  LightBox modal on Photograph page  */
/* * * * * * * * * * * * * * * * * * * */

export default class LightboxModal {
    constructor(mediaId, store) {
        // Get the list of all photographers medias
        this._photographerWork = store.photographerWork;
        // Extract current media to show with data-id
        this.currentMedia = this._photographerWork.find((e) => e.id == mediaId);
        // Spot the index of current image, for handling navigation
        this._currentIndex = this._photographerWork.findIndex((e) => e.id === this.currentMedia.id);

        // Bind this context for eventListenners
        this.manageKeyPress = this.manageKeyPress.bind(this);
        this.deleteModal = this.deleteModal.bind(this);
    }

    buildMediaHtml() {
        const balise = this._photographerWork[this._currentIndex].image ? 'img' : 'video';
        const source = this._photographerWork[this._currentIndex].image || this._photographerWork[this._currentIndex].video;
        const desc = this._photographerWork[this._currentIndex].desc;

        return `<${balise} class="lightBoxModal__media" src="public/assets/media/${source}" alt="${desc}" ${
            balise === 'video' ? 'controls="controls"' : ''
        }></${balise}>`;
    }

    buildHtml() {
        const content = `
            <div class="lightBoxModal" aria-label="${this._photographerWork[this._currentIndex].title}, closeup view">
                <button class="lightBoxModal__prevButton" aria-label="Précédent" tabindex="1">Image précédente</button>
                    <div class="lightBoxModal__mainContainer">
                        <div class="lightBoxModal__imgContainer">
                            ${this.buildMediaHtml()}
                            <button class="lightBoxModal__closeButton" aria-label="Fermer" tabindex="0">Close dialog</button>
                        </div>
                        <h2 class="lightBoxModal__mediaDesc">${this._photographerWork[this._currentIndex].title}</h2>
                    </div>
                <button class="lightBoxModal__nextButton" aria-label="Suivant" tabindex="2">Image suivante</button>
            </div>
        `;

        return document.createRange().createContextualFragment(content);
    }

    changeMedia(direction) {
        this._currentIndex = direction === 'next' ? this._currentIndex + 1 : this._currentIndex - 1;
        if (this._currentIndex < 0) {
            this._currentIndex = this._photographerWork.length - 1;
        } else if (this._currentIndex === this._photographerWork.length) {
            this._currentIndex = 0;
        }

        this.deleteModal();
        this.render();
    }

    manageKeyPress(e) {
        switch (e.keyCode) {
            case 27:
                this.deleteModal();
                break;
            case 39:
                this.changeMedia('next');
                break;
            case 37:
                this.changeMedia('prev');
                break;
            default:
                break;
        }
    }

    deleteModal() {
        document.querySelector('.lightBoxModal').remove();
        document.documentElement.removeEventListener('keydown', this.manageKeyPress);
    }

    render() {
        // Inject LightBox in DOM
        document.querySelector('body').appendChild(this.buildHtml());

        // Event listeners
        document.querySelector('.lightBoxModal__closeButton').addEventListener('click', this.deleteModal);
        document.querySelector('.lightBoxModal__nextButton').addEventListener('click', () => {
            this.changeMedia('next');
        });
        document.querySelector('.lightBoxModal__prevButton').addEventListener('click', () => {
            this.changeMedia('prev');
        });
        document.documentElement.addEventListener('keydown', this.manageKeyPress);
    }
}
