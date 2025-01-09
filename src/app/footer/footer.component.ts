import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

@Component({
    selector: 'app-footer',
    imports: [FontAwesomeModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  company: string = 'Deceek Property Management'

  faCoffee = faCoffee;
  faLinkedin = faLinkedin
  faInstagram = faInstagram
  faWhatsapp = faWhatsapp
  

}
