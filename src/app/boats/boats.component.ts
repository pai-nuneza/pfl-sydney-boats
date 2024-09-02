import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import boatsData from '../../assets/data/boats.json';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Boat } from '../../models/boat';

@Component({
  selector: 'app-boats',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './boats.component.html',
  styleUrl: './boats.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BoatsComponent {
  isSidebarOpen = false;
  boatType: string = '';
  header: string = '';

  boats: Boat[] = boatsData;

  filteredBoats: Boat[] = [];
  filterForm: FormGroup;

  filters: any = {
    search: '',
    guests: [],
    event: '',
    boatType: [],
    price: { min: 0, max: 2000 },
    features: [],
    catering: [],
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.filterForm = this.fb.group({
      search: [''],
      guests: [[]],
      event: [''],
      boatType: [[]],
      priceRange: this.fb.group({
        min: [0],
        max: [2000],
      }),
      features: [[]],
      catering: [[]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.boatType = params.get('type')!;
      if (this.boatType) {
        // Explicitly reset the boatType form control to an empty array first
        this.filterForm.get('boatType')?.setValue([], { emitEvent: false });
        this.filterForm.get('boatType')?.setValue([this.boatType]);
      }
    });

    // boatType
    this.applyFilters();
    this.filterForm.valueChanges.subscribe(() => this.applyFilters());
  }

  onItemClick(item: number) {
    alert(item);
  }

  // Function to update checkbox filters
  updateFilter(category: string, value: string, checked: boolean) {
    if (checked) {
      this.filters[category].push(value);
    } else {
      this.filters[category] = this.filters[category].filter(function (
        item: any
      ) {
        item !== value;
      });
    }
    this.applyFilters();
  }

  applyFilters(): void {
    const filters = this.filterForm.value;
    this.filteredBoats = this.boats.filter((boat) => {
      return (
        this.filterBySearch(boat, filters.search) &&
        this.filterByGuests(boat, filters.guests) &&
        this.filterByEvent(boat, filters.event) &&
        this.filterByBoatType(boat, filters.boatType) &&
        this.filterByPriceRange(boat, filters.priceRange) &&
        this.filterByFeatures(boat, filters.features) &&
        this.filterByCatering(boat, filters.catering)
      );
    });
  }

  // Implement the specific filtering logic for each criteria
  filterBySearch(boat: Boat, search: string): boolean {
    return search
      ? boat.name.toLowerCase().includes(search.toLowerCase())
      : true;
  }

  filterByGuests(boat: Boat, guests: string[]): boolean {
    if (!guests.length) return true;
    // Example filtering logic based on guests
    if (guests.includes('Up to 35 Guests') && boat.maxGuests <= 35) return true;
    if (
      guests.includes('36-70 Guests') &&
      boat.maxGuests > 35 &&
      boat.maxGuests <= 70
    )
      return true;
    if (guests.includes('More than 71 Guests') && boat.maxGuests > 70)
      return true;
    return false;
  }

  filterByEvent(boat: Boat, event: string): boolean {
    return event
      ? boat.events.map((e) => e.toLowerCase()).includes(event.toLowerCase())
      : true;
  }

  filterByBoatType(boat: Boat, boatTypes: string[]): boolean {
    console.log('boat type', boat.boatType);
    return !boatTypes.length || boatTypes.includes(boat.boatType);
  }

  filterByPriceRange(
    boat: Boat,
    priceRange: { min: number; max: number }
  ): boolean {
    return boat.price >= priceRange.min && boat.price <= priceRange.max;
  }

  filterByFeatures(boat: Boat, features: string[]): boolean {
    return (
      !features.length ||
      features.every((feature) => boat.features.includes(feature))
    );
  }

  filterByCatering(boat: Boat, catering: string[]): boolean {
    return (
      !catering.length ||
      catering.every((option) => boat.catering.includes(option))
    );
  }

  onCheckboxChange(event: any, controlName: string) {
    const control = this.filterForm.get(controlName);

    if (!control) {
      console.error(`Control with name ${controlName} does not exist.`);
      return;
    }

    const currentValue = control.value || []; // Ensure that the value is an array
    const value = event.target.value;

    if (event.target.checked) {
      control.setValue([...currentValue, value]); // Add the new value
    } else {
      control.setValue(currentValue.filter((item: string) => item !== value)); // Remove the unchecked value
    }

    control.updateValueAndValidity();
  }
}
