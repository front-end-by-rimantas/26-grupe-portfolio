class Features {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        if (!this.isValidData()) {
            return false;
        }

        console.log('continue....');
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector neatitinka formato (ne tuscias string)');
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti nurodyto elemento');
            return false;
        }

        return true;
    }

    // isValidDataImg() {}
    // isValidDataMax() {}
    // isValidDataStrategy() {}
    // isValidDataList() {}

    isValidData() {
        if (typeof this.data !== 'object' ||
            this.data === null ||
            Array.isArray(this.data)) {
            console.error('ERROR: data netinkamo formato (objektas)');
            return false;
        }
        return true;
    }

    // isValidItemImg() {}
    // isValidItemTitle() {}
    // isValidItemDescription() {}
    // isValidListItem() {}          atsako, ar objektas yra validus

    // filterData() {}               turi atrinkti tik validzius duomenis
    // render() {}                   turinio generavimas
}

export { Features }