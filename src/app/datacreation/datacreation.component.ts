import { Component } from '@angular/core';

@Component({
  selector: 'app-datacreation',
  templateUrl: './datacreation.component.html',
  styleUrls: ['./datacreation.component.css']
})
export class datacreationComponent {
  formData: {
    supplyName: string;
    supplyValue: number;
    fromPlace: string;
    toPlace: string;
    destiny: string;
    arrived: boolean | null;
  } = {
      supplyName: '',
      supplyValue: 0,
      fromPlace: '',
      toPlace: '',
      destiny: '',
      arrived: null,
    };

  clearForm(): void {
    this.formData.supplyName = '';
    this.formData.supplyValue = 0;
    this.formData.fromPlace = '';
    this.formData.toPlace = '';
    this.formData.destiny = '';
    this.formData.arrived = null;
  }

  submitForm() {
    console.log('Form Data:', this.formData);
  }
}
