import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import holidaysData from '../../assets/data/holidays.json';
import eventsData from '../../assets/data/events.json';
import { RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  events = eventsData;
  holidays = holidaysData;
  showMore = false;
  backgroundImageUrl = 'https://media.nomadicmatt.com/2024/sydneythings1.jpeg';

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
