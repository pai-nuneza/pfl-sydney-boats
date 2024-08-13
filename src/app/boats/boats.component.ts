import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boats',
  standalone: true,
  imports: [],
  templateUrl: './boats.component.html',
  styleUrl: './boats.component.css',
})
export class BoatsComponent {
  boatType: string = '';
  header: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.boatType = params.get('type')!;
      if (this.boatType == 'luxury') {
        this.header = 'Luxury';
      } else if (this.boatType == 'corporate') {
        this.header = 'Corporate';
      }
    });
  }
}
