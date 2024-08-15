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
      name: 'Holden Caulfield',
      role: 'UI Developer',
      description:
        'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
      imageUrl: 'https://showcase.empower.net/wp-content/uploads/2019/08/team-member-02.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Alper Kamu',
      role: 'Designer',
      description:
        'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
      imageUrl: 'https://showcase.empower.net/wp-content/uploads/2019/08/team-member-03.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Atticus Finch',
      role: 'UI Developer',
      description:
        'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
      imageUrl: 'https://showcase.empower.net/wp-content/uploads/2019/08/team-member-04.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Heny Letham',
      role: 'Designer',
      description:
        'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
      imageUrl: 'https://showcase.empower.net/wp-content/uploads/2019/08/team-member-01.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];
}
