import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// function updateProgress(percentage: number) {
//   const progressBar = document.querySelector('.progress-bar') as HTMLElement;
//   const progressText = document.querySelector('progress-percentage') as HTMLElement;

//   if (progressBar && progressText) {
//     progressBar.style.width = `${percentage}%`;
//     progressText.textContent = `${percentage}%`;
//   }
// }

// updateProgress(75);