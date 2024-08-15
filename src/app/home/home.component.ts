import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  // Sample Data
  holidays = [
    {
      imageUrl:
        'https://www.ucruisesydney.com.au/static/e74d1d2b2fa96ca5e642689f5a1e689b/dac54/boxing-day-cruise-bg.jpg',
      title: 'Boxing Day',
    },
    {
      imageUrl:
        'https://www.vividsydney.com/sites/default/files/inline-images/SydneyHarbourBridge.jpg',
      title: 'Vivid Sydney',
    },
    {
      imageUrl:
        'https://ipa.org.au/wp-content/uploads/2023/01/23012023-Australia-day2023.jpg',
      title: 'Australia Day',
    },
    {
      imageUrl:
        'https://www.dubaiyachts.com/wp-content/uploads/2023/12/Newyear-Party-Main-1024x675.png',
      title: "New Year's Eve",
    },
    {
      imageUrl:
        'https://canvasyachtcharters.com/wp-content/uploads/2024/05/christmas-yacht-vacation.png',
      title: 'Christmas Day',
    },
  ];


  
}
