import { Component } from '@angular/core';

@Component({
  selector: 'app-construction',
  standalone: true,
  imports: [],
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css'],
})
export class ConstructionComponent {
  ngOnInit() {
    console.log('Construction Component Initialized');
  }
}
