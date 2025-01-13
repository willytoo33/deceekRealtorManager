import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
describe('ProjectsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=projects.component.spec.js.map