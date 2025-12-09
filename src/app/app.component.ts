import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { initFlowbite } from 'flowbite';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Harbour Fleet';
  newsletterForm!: FormGroup;
  newsletterSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {  
    initFlowbite();
    
    this.newsletterForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  subscribeNewsletter(): void {
    this.newsletterSubmitted = true;

    if (this.newsletterForm.valid) {
      console.log('Newsletter subscription:', this.newsletterForm.value);
      alert('Thank you for subscribing to our newsletter!');
      this.newsletterForm.reset();
      this.newsletterSubmitted = false;
    }
  }
}
