import { TestBed } from '@angular/core/testing';
import { ConstructionComponent } from './construction.component';
describe('ConstructionComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConstructionComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ConstructionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=construction.component.spec.js.map