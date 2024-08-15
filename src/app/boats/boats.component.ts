import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boats',
  standalone: true,
  imports: [CommonModule],
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

  onItemClick(item: number) {
    alert(item);
  }

  items = [
    {
      id: 1,
      title: 'Circa Spirit',
      price: '$790 /hr',
      maxGuests: 65,
      imageUrl:
        'https://chapmanyachting.com/wp-content/uploads/2023/01/CIRCA-1-1.jpg',
    },
    {
      id: 2,
      title: 'Coco',
      price: '$590 /hr',
      maxGuests: 23,
      imageUrl: 'https://www.filepicker.io/api/file/LTF6gN1RFOW677lhwv5A',
    },
    {
      id: 3,
      title: 'Obsession',
      price: '$550',
      maxGuests: 37,
      imageUrl:
        'https://www.fraseryachts.com/uploads/image/yachts/obsession/Fairline_yacht_for_sale_Obsession_11508.jpg',
    },
  ];
}
