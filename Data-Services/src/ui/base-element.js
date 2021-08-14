import $ from 'jquery';

export class BaseElement {
    constructor() {
        this.element = null; // jQuery object
    }

    appendToElement(el) {
        this.createElement();
        el.appendToElement(this.element);
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'Please override getElementString() in base element';
    }

}