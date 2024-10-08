import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import boatsData from '../../assets/data/boats.json';
import { CommonModule } from '@angular/common';
import { Boat } from '../../models/boat';
import { RecommendedBoatsComponent } from '../recommended-boats/recommended-boats.component';

@Component({
  selector: 'app-how',
  standalone: true,
  imports: [CommonModule, RecommendedBoatsComponent],
  templateUrl: './how.component.html',
  styleUrl: './how.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HowComponent {
  boats: Boat[] = boatsData;
  recommendedBoats = this.boats.filter((boat) => boat.recommended);
}
