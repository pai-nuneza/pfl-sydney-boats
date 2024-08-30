import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import boatsData from '../../assets/data/boats.json';
import { CommonModule } from '@angular/common';
import { Boat } from '../../models/boat';

@Component({
  selector: 'app-how',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how.component.html',
  styleUrl: './how.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HowComponent {
  boats: Boat[] = boatsData;
  recommendedBoats = this.boats.filter((boat) => boat.recommended);
}
