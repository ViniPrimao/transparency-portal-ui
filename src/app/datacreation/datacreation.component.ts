import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatagridComponent, SupplyElements } from '../datagrid/datagrid.component';
import { delay } from 'rxjs';

@Component({
  selector: 'app-datacreation',
  templateUrl: './datacreation.component.html',
  styleUrls: ['./datacreation.component.css']
})
export class DataCreationComponent implements OnInit {
  private baseUrl = 'http://localhost:8080';
  dataSource: SupplyElements[];

  constructor(private http: HttpClient,
    private dataGrid: DatagridComponent) {
    this.dataSource = [];
  }


  ngOnInit(): void {
    this.collectDataToList();
  }

  formData: {
    supplyName: string;
    supplyValue: number;
    fromPlace: string;
    toPlace: string;
    destiny: string;
    arrived: boolean | null;
    nodeId: String;
  } = {
      supplyName: '',
      supplyValue: 0,
      fromPlace: '',
      toPlace: '',
      destiny: '',
      arrived: null,
      nodeId: ''
    };


  clearForm(): void {
    this.formData.supplyName = '';
    this.formData.supplyValue = 0;
    this.formData.fromPlace = '';
    this.formData.toPlace = '';
    this.formData.destiny = '';
    this.formData.nodeId = '';
    this.formData.arrived = null;
  }

  async submitForm() {
    console.log('Form Data:', this.formData);

    this.http.post(`${this.baseUrl}`, this.formData)
      .subscribe(
        () => {
          this.clearForm();
          this.collectDataToList();
          this.dataGrid.updateDataGrid();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

  public onSupplySelect(event: any) {
    this.formData = event.value;
  }

  public collectDataToList() {
    this.http.get<any[]>('http://localhost:8080/nodes').subscribe((data) => {
      this.dataSource = data;
    });
  }
}
