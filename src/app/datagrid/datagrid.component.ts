

import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule]
})
export class DatagridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<SupplyElements>;
  loading = false;
  columnsToDisplay = [
    'supplyName',
    'supplyValue',
    'lastUpdateDate',
    'createdDate',
    'fromPlace',
    'toPlace',
    'updateBy',
    'destiny',
    'arrived'
  ];

  formattedColumnNames: Record<string, string> = {
    supplyName: 'Supply Name',
    supplyValue: 'Supply Value',
    lastUpdateDate: 'Last Update Date',
    createdDate: 'Created Date',
    fromPlace: 'From Place',
    toPlace: 'To Place',
    updateBy: 'Update By',
    destiny: 'Destiny',
    arrived: 'Arrived',
  };

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: SupplyElements | null = null;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize = 10;

  handlePageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
  }

  toggleExpansion(element: any): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  ngOnInit(): void {
    this.updateDataGrid();
  }

  public async updateDataGrid() {
    this.loading = true;
    this.http.get<any[]>('http://localhost:8080/').subscribe(async (data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}

export interface SupplyDTO {
  supplyName: string;
  supplyValue: number;
  lastUpdateDate: string;
  createdDate: string;
  nodeId: string;
  chainId: string;
  fromPlace: string;
  toPlace: string;
  updateBy: string;
  destiny: string;
  arrived: boolean;
}

export interface SupplyElements {
  supplyDTO: SupplyDTO[];
}