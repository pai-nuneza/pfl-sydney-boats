import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import holidaysData from '../../assets/data/holidays.json';
import eventsData from '../../assets/data/events.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  events = eventsData;
  holidays = holidaysData;
  showMore = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
