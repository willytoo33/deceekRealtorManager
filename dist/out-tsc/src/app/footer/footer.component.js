import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
let FooterComponent = class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
        this.company = 'Deceek Property Management';
        this.faCoffee = faCoffee;
        this.faLinkedin = faLinkedin;
        this.faInstagram = faInstagram;
        this.faWhatsapp = faWhatsapp;
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        imports: [FontAwesomeModule],
        templateUrl: './footer.component.html',
        styleUrl: './footer.component.css'
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map