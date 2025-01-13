import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.menuValue = false;
        this.menu_icon = 'bi bi-list';
    }
    toggleMenu() {
        this.menuValue = !this.menuValue;
        this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
    }
    closeMenu() {
        this.menuValue = false;
        this.menu_icon = 'bi bi-list';
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        imports: [RouterModule],
        templateUrl: './header.component.html',
        styleUrl: './header.component.css'
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map