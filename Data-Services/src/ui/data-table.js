import { BaseElement } from './base-element.js';

export class DataTable extends BaseElement {

    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    getElementString() {
        let thTags = '';
        for (const h of this.headers) {
            thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>\n`
        }

        let trTags = '';
        for (const row of this.data) {
            trTags += `<tr>`
            let tdTags = '';
            for (const property of this.headers) {
                let field = row[property.toLowerCase()];
                trTags += `<td class="mdl-data-table__cell--non-numeric">${field}</td>`;
            }
            trTags += '</tr>';
        }
        
        return `
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                    ${thTags}
                </thead>
                <tbody>
                    ${trTags}
                </tbody>
            </table>
        `
    }
}
