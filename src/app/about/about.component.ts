import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Fleet Manager',
      description:
        'With over 15 years in maritime management, Sarah ensures every vessel meets our highest standards of luxury and safety.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'James Anderson',
      role: 'Chief Captain',
      description:
        'A seasoned navigator with 20+ years on Sydney Harbour, James leads our team of expert captains with precision and care.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Emily Chen',
      role: 'Events Coordinator',
      description:
        'Emily specializes in creating unforgettable experiences, coordinating everything from corporate events to dream weddings on the water.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Michael Rodriguez',
      role: 'Customer Relations',
      description:
        'Michael ensures every client receives personalized attention and support from initial inquiry through to your perfect day on the harbour.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];
}
