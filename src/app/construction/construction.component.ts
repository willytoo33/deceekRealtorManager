import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-construction',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css'],
})
export class ConstructionComponent {
  appointmentForm: FormGroup;
  appointmentTypes = [
    'Consultation',
    'Project Estimation',
    'Site Inspection',
    'Contract Signing',
    'Progress Meeting',
  ];
  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      appointmentType: ['', Validators.required],
      preferredDate: ['', [Validators.required, this.futureDateValidator]],
      projectAddress: ['', Validators.required],
      message: [''],
    });
  }
  futureDateValidator(control: any) {
    if (!control.value) {
      return null;
    }
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today ? null : { pastDate: true };
  }
  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log('Form Data:', this.appointmentForm.value);
      // TODO: Add backend integration later
      alert('Appointment request submitted successfully!');
      this.appointmentForm.reset();
    }
  }
}
