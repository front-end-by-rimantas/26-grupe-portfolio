class Carousel {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        this.DOM.classList.add('testimonials');

        this.render();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    generateList() {
        let HTML = '';
        const itemWidth = 100 / this.data.list.length;

        for (const testimonial of this.data.list) {
            const fullPath = this.data.imgPath + testimonial.img;

            HTML += `<div class="testimonial" style="width: ${itemWidth}%;">
                        <img src="${fullPath}" alt="${testimonial.fullName} image">
                        <div class="name">${testimonial.fullName}</div>
                        <div class="rating">${testimonial.rating}/5</div>
                        <div class="text">${testimonial.testimonial}</div>
                    </div>`;
        }

        return HTML;
    }

    generateControls() {
        let HTML = 'CONTROLS';

        return HTML;
    }

    render() {
        const HTML = `<div class="list" style="width: ${this.data.list.length}00%;">
                        ${this.generateList()}
                    </div>
                    <div class="controls">
                        ${this.generateControls()}
                    </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Carousel }