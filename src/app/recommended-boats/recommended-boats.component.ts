import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import boatsData from '../../assets/data/boats.json';
import { CommonModule } from '@angular/common';
import { Boat } from '../../models/boat';

@Component({
  selector: 'app-recommended-boats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-boats.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './recommended-boats.component.scss',
})
export class RecommendedBoatsComponent {
  boats: Boat[] = boatsData;
  recommendedBoats = this.boats.filter((boat) => boat.recommended);
}
