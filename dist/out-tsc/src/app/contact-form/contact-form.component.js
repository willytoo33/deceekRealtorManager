import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
let ContactFormComponent = class ContactFormComponent {
    constructor() {
        this.name = '';
        this.email = '';
        this.phoneNumber = '';
        this.message = '';
    }
    onSubmit() {
        alert(`Your Details are:
        name: ${this.name}, 
        email: ${this.email}, 
        phone: ${this.phoneNumber},
        and message: ${this.message}
        `);
    }
};
ContactFormComponent = __decorate([
    Component({
        selector: 'app-contact-form',
        imports: [FormsModule],
        templateUrl: './contact-form.component.html',
        styleUrls: ['./contact-form.component.css']
    })
], ContactFormComponent);
export { ContactFormComponent };
//# sourceMappingURL=contact-form.component.js.map