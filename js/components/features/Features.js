class Features {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.maxItems = 3;
        this.availableStategies = ['first', 'last', 'random'];
        this.strategy = this.availableStategies[0];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        if (!this.isValidData()) {
            return false;
        }

        if (!this.isValidDataImg()) {
            return false;
        }

        if (!this.isValidDataList()) {
            return false;
        }

        this.isValidDataMax();
        this.isValidDataStrategy();

        this.filterData();
        this.render();

        console.log(this.strategy);
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

    isValidDataImg() {
        if (typeof this.data.imgPath !== 'string' ||
            this.data.imgPath === '') {
            console.error('ERROR: duomenu imgPath yra netinkamo formato');
            return false;
        }
        return true;
    }

    isValidDataMax() {
        if (typeof this.data.maxItemsPerList !== 'number') {
            console.warn('WARNING: maxItems turi buti skaicius');
            return false;
        }

        if (!isFinite(this.data.maxItemsPerList)) {
            console.warn('WARNING: maxItems turi buti normalus skaicius');
            return false;
        }

        if (this.data.maxItemsPerList < 1) {
            console.warn('WARNING: maxItems turi buti teigiamas skaicius, didesnis arba lygus uz viena');
            return false;
        }

        if (this.data.maxItemsPerList % 1 !== 0) {
            console.warn('WARNING: maxItems turi buti teigiamas sveikas skaicius');
            return false;
        }

        this.maxItems = this.data.maxItemsPerList;
    }

    isValidDataStrategy() {
        if (typeof this.data.displayStrategy !== 'string' ||
            this.data.displayStrategy === '' ||
            !this.availableStategies.includes(this.data.displayStrategy)) {
            console.warn('WARNING: norima atvaizdavimo strategija yra neimanoma pasirinkti');
            return false;
        }

        this.strategy = this.data.displayStrategy;
    }

    isValidDataList() {
        if (!Array.isArray(this.data.list) ||
            this.data.list.length === 0) {
            console.error('ERROR: duomenu sarasas netinkamo formato arba tuscias');
            return false;
        }
        return true;
    }

    isValidData() {
        if (typeof this.data !== 'object' ||
            this.data === null ||
            Array.isArray(this.data)) {
            console.error('ERROR: data netinkamo formato (objektas)');
            return false;
        }
        return true;
    }

    isValidItemImg(item) {
        if (typeof item.img !== 'string' ||
            item.img === '') {
            return false;
        }
        return true;
    }

    isValidItemTitle(item) {
        if (typeof item.title !== 'string' ||
            item.title === '') {
            return false;
        }
        return true;
    }

    isValidItemDescription(item) {
        if (typeof item.description !== 'string' ||
            item.description === '') {
            return false;
        }
        return true;
    }

    isValidListItem(item) {
        if (typeof item !== 'object' ||
            item === null ||
            Array.isArray(item)) {
            return false;
        }
        return true;
    }

    filterData() {
        const validData = [];

        // turi atrinkti tik validzius duomenis
        for (const feature of this.data.list) {
            if (this.isValidListItem(feature) &&
                this.isValidItemImg(feature) &&
                this.isValidItemTitle(feature) &&
                this.isValidItemDescription(feature)) {
                validData.push(feature);
            }
        }

        this.data.list = validData;
    }

    render() {
        let HTML = '';

        let index = 0;
        for (const feature of this.data.list) {
            HTML += `<div class="col-12 col-md-6 col-lg-4">
                        FEATURE ${++index}
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Features }