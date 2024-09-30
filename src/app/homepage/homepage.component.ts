import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
