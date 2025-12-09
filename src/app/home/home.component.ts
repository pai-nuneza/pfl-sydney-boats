import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, HostListener, AfterViewInit } from '@angular/core';
import holidaysData from '../../assets/data/holidays.json';
import eventsData from '../../assets/data/events.json';
import { RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { RecommendedBoatsComponent } from '../recommended-boats/recommended-boats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RecommendedBoatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit {
  events = eventsData;
  holidays = holidaysData;
  showMore = false;
  backgroundImageUrl = 'https://media.nomadicmatt.com/2024/sydneythings1.jpeg';

  ngOnInit(): void {
    // Initial check for any visible elements
  }

  ngAfterViewInit(): void {
    // Check initial visibility after view is initialized
    setTimeout(() => this.checkScrollAnimation(), 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollAnimation();
  }

  private checkScrollAnimation(): void {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .stagger-children');
    
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Element is visible if its top is in viewport
      if (rect.top <= windowHeight * 0.85) {
        element.classList.add('visible');
      }
    });
  }

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
