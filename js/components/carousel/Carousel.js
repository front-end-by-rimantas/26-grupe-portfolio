class Carousel {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.listDOM = null;
        this.itemCount = this.data.list.length;
        this.activeItemIndex = 0;

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
        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidData() {
        return true;
    }

    generateList() {
        let HTML = '';
        const itemWidth = 100 / this.itemCount;

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
        let HTML = '';

        for (let i = 0; i < this.itemCount; i++) {
            const active = this.activeItemIndex === i ? 'active' : '';

            HTML += `<div class="circle ${active}"></div>`
        }

        return HTML;
    }

    render() {
        const HTML = `<div class="list" style="width: ${this.itemCount}00%;">
                        ${this.generateList()}
                    </div>
                    <div class="controls">
                        ${this.generateControls()}
                    </div>`;

        this.DOM.innerHTML = HTML;

        this.listDOM = this.DOM.querySelector('.list');
    }

    addEvents() {
        const allCircles = this.DOM.querySelectorAll('.circle');

        for (let i = 0; i < this.itemCount; i++) {
            const circle = allCircles[i];
            circle.addEventListener('click', () => {
                allCircles[this.activeItemIndex].classList.remove('active');
                circle.classList.add('active');
                this.activeItemIndex = i;

                // list -> margin-left: -${i}00%;
                this.listDOM.style.marginLeft = `-${i}00%`;
            });
        }
    }
}

export { Carousel }