import $ from 'jquery';

export class BaseElement {
    
    constructor() {
        this.element = null;  // jQuery object
    }
    
    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }
    
    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }
}