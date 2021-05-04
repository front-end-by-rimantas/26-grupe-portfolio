class Pricing {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.availableFeatures = {
            space: 'GB Linux Web Space',
            databases: ' MySQL Databases',
            support: '24/7 Tech Support',
            dailyBackup: 'Daily Backups',
            unlimitedEmail: 'Unlimited Email'
        }

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            return false;
        }

        this.DOM = document.querySelector(this.selector);

        this.render();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    generateFeatureListItems(featureList) {
        let HTML = '';

        for (const feature in featureList) {
            const featureValue = this.availableFeatures[feature];

            if (typeof featureList[feature] === 'number') {
                HTML += `<li>${featureList[feature] + featureValue}</li>`;
            }

            if (typeof featureList[feature] === 'boolean' &&
                featureList[feature] === true) {
                HTML += `<li>${featureValue}</li>`;
            }
        }

        return HTML;
    }

    render() {
        let HTML = '';

        for (const price of this.data.list) {
            HTML += `<div class="${price.classes} pricing">
                        <img src="${this.data.imgPath + price.img}" alt="">
                        <h3>${price.title}</h3>
                        <ul>
                            ${this.generateFeatureListItems(price.features)}        
                        </ul>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Pricing }