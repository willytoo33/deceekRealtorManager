import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';
// import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ContactFormComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {}
