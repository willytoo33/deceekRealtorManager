import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-homepage',
    imports: [ContactFormComponent, FooterComponent],
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  ngOnInit() {
    console.log('Homepage Initialized');
  }
}
