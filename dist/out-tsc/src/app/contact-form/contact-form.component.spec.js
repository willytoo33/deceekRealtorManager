import { TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
describe('ContactFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ContactFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-form.component.spec.js.map