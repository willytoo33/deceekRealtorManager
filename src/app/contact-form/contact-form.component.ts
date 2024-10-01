import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  message: string = '';

  onSubmit () {
    alert(
      `Your Details are:
        name: ${this.name}, 
        email: ${this.email}, 
        phone: ${this.phoneNumber},
        and message: ${this.message}
        `
    );
  }
}
