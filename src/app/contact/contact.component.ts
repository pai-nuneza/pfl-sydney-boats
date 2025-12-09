import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10,}$/)]],
      eventOccasion: ['', Validators.required],
      preferredBoats: [''],
      charterDate: ['', Validators.required],
      preferredTime: [''],
      cateringPreferences: [''],
      beveragePreferences: [''],
      estimatedGuests: ['', [Validators.required, Validators.min(1)]],
      approxBudget: [''],
      comments: ['']
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Simulate form submission
    console.log('Form Data:', this.contactForm.value);
    
    // Show success message
    this.showSuccessMessage = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.contactForm.reset();
      this.submitted = false;
      this.showSuccessMessage = false;
    }, 3000);
  }
}
