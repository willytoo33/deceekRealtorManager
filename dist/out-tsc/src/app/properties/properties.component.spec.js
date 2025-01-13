import { TestBed } from '@angular/core/testing';
import { PropertiesComponent } from './properties.component';
describe('PropertiesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PropertiesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(PropertiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=properties.component.spec.js.map