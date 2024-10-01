import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ContactFormComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
