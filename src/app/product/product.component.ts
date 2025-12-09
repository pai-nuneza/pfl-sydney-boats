import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import boatsData from '../../assets/data/boats.json';
import { RecommendedBoatsComponent } from '../recommended-boats/recommended-boats.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RecommendedBoatsComponent, CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  boat: any;
  savedBoats: Set<number> = new Set();
  showModal = false;
  modalTitle = '';
  modalMessage = '';
  modalType: 'success' | 'info' | 'loading' = 'info';
  isLoading = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const boatIdParam = this.route.snapshot.paramMap.get('id');

    // Check if boatIdParam is null and handle it
    if (boatIdParam === null) {
      console.error('Boat ID is null.');
      // Optionally, redirect to a different route if no ID is found
      this.router.navigate(['/']);
      return;
    }

    const boatId = +boatIdParam;

    // Find the boat by ID
    this.boat = boatsData.find((b) => b.id === boatId);

    console.log('found!', this.boat);
    if (!this.boat) {
      console.error('Boat not found.');
      // Handle case where the boat is not found, e.g., redirect to a 404 page
      this.router.navigate(['/']);
    }
    
    // Load saved boats from localStorage
    const saved = localStorage.getItem('savedBoats');
    if (saved) {
      this.savedBoats = new Set(JSON.parse(saved));
    }
  }

  enquireNow(): void {
    this.modalTitle = 'Enquiry Submitted';
    this.modalMessage = `Thank you for your interest in ${this.boat.name}!\n\nBoat Details:\n• Price: $${this.boat.price}/hr\n• Max Guests: ${this.boat.maxGuests}\n\nRedirecting to contact page...`;
    this.modalType = 'loading';
    this.showModal = true;
    this.isLoading = true;
    
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/contact']);
    }, 1500);
  }

  saveForLater(): void {
    if (this.savedBoats.has(this.boat.id)) {
      this.savedBoats.delete(this.boat.id);
      this.modalTitle = 'Removed from Saved';
      this.modalMessage = `${this.boat.name} has been removed from your saved boats.`;
      this.modalType = 'info';
    } else {
      this.savedBoats.add(this.boat.id);
      this.modalTitle = 'Saved Successfully!';
      this.modalMessage = `${this.boat.name} has been saved for later. You can view it anytime in your saved boats.`;
      this.modalType = 'success';
    }
    // Save to localStorage
    localStorage.setItem('savedBoats', JSON.stringify(Array.from(this.savedBoats)));
    this.showModal = true;
  }

  isSaved(): boolean {
    return this.savedBoats.has(this.boat.id);
  }

  shareOnFacebook(): void {
    const url = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  }

  shareOnTwitter(): void {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out ${this.boat.name} - ${this.boat.shortDescription}`);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  }

  shareViaEmail(): void {
    const subject = encodeURIComponent(`Check out ${this.boat.name}`);
    const body = encodeURIComponent(`I found this amazing boat rental:\n\n${this.boat.name}\n${this.boat.shortDescription}\n\nPrice: $${this.boat.price}/hr\nMax Guests: ${this.boat.maxGuests}\n\nView details: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  shareOnLinkedIn(): void {
    const url = encodeURIComponent(window.location.href);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  }

  requestQuote(): void {
    this.modalTitle = 'Quote Request';
    this.modalMessage = `Processing your quote request for ${this.boat.name}...\n\nBoat Details:\n• Price: $${this.boat.price}/hr\n• Max Guests: ${this.boat.maxGuests}\n\nRedirecting to contact page...`;
    this.modalType = 'loading';
    this.showModal = true;
    this.isLoading = true;
    
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/contact']);
    }, 1500);
  }

  callNow(): void {
    window.location.href = 'tel:+61293284748';
  }

  closeModal(): void {
    this.showModal = false;
    this.isLoading = false;
  }
}
