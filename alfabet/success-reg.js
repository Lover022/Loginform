import library from "./alfabet.js";

class SuccessReg {
    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.closeButton = document.querySelector('.close-button');
        this.close = document.querySelector('.close');
        this.userName = document.querySelector('.user-name');
        this.interval = null;
        this.openClose(true);

        this.closeButton.addEventListener('click', () => {
            this.openClose(true);
        });

        this.close.addEventListener('click', () => {
            this.openClose(true);
        });
    }

    openClose(open) {
        this.popup.classList.toggle('hidden', open);
    }

    writeName(name) {
        this.openClose(false);
        clearInterval(this.interval);
        const alphabet = library.en.alphabet;
        this.userName.textContent = '';
        let str = '';
        let i = 0;

        this.interval = setInterval(() => {
            const elem = alphabet[i];

            if (elem === undefined) {
                str += name[0];
                i = 0;
                name = name.slice(1);
                this.userName.textContent = str;
            } else {
                this.userName.textContent = `${str}${elem}`;
                i++;
                if (elem === name[0]) {
                    str += elem;
                    i = 0;
                    name = name.slice(1);
                }
            }

            if (name === '') {
                clearInterval(this.interval);
            }
        }, 35);
    }
}

export default SuccessReg;
