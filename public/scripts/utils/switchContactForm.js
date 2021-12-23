/* * * * * * * * * * * * * * * * * * * */
/*  Build                              */
/*  contact form on Photograph page    */
/* * * * * * * * * * * * * * * * * * * */

export default class SwitchContactModal {
    constructor() {
        this._modalOpen = false;
        this.$modalForm = document.querySelector('.contactModal');
        this.$contactButton = document.querySelector('.photographer__profileCard__contactButton');
        this.$closeButton = document.querySelector('.contactModal__content__header__closeIcon');
        this.$submitButton = document.querySelector('.contactModal__content__form__submit');

        // Bind this context to following methods
        this.triggerModal = this.triggerModal.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.addListeners = this.addListeners.bind(this);
    }

    triggerModal(event) {
        if (event.type === 'click' || event.keyCode === 27) {
            this._modalOpen = !this._modalOpen;
            if (this._modalOpen) {
                this.$modalForm.style.display = 'flex';
                document.getElementById('firstname').focus();
                document.documentElement.addEventListener('keydown', this.triggerModal);
            } else {
                this.$modalForm.style.display = 'none';
                document.documentElement.removeEventListener('keydown', this.triggerModal);
            }
        }
    }

    submitForm(event) {
        event.preventDefault();
        const formData = new FormData(document.querySelector('.contactModal__content__form'));
        // Affichage des champs du formulaire dans la console
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        this.triggerModal({ type: 'click' });
    }

    addListeners() {
        this.$contactButton.addEventListener('click', this.triggerModal);
        this.$closeButton.addEventListener('click', this.triggerModal);
        this.$submitButton.addEventListener('click', this.submitForm);
    }
}
