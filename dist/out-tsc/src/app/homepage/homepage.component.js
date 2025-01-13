import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';
let HomepageComponent = class HomepageComponent {
    ngOnInit() {
        console.log('Homepage Initialized');
    }
};
HomepageComponent = __decorate([
    Component({
        selector: 'app-homepage',
        imports: [ContactFormComponent, FooterComponent],
        templateUrl: './homepage.component.html',
        styleUrls: ['./homepage.component.css']
    })
], HomepageComponent);
export { HomepageComponent };
//# sourceMappingURL=homepage.component.js.map