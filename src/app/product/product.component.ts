import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import boatsData from '../../assets/data/boats.json';
import { RecommendedBoatsComponent } from '../recommended-boats/recommended-boats.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RecommendedBoatsComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  boat: any;

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
  }
}
