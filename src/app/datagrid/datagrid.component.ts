

import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  imports: [MatTableModule,
    NgFor,
    MatButtonModule,
    NgIf,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DatagridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<SupplyElements>;
  loading: boolean = false;

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data, filter) => {
      return data.supplyDTO.some(supply => {
        return Object.values(supply).some(value => {
          if (value !== null) {
            return value.toString().toLowerCase().includes(filter);
          }
          return false;
        });
      });
    };
    this.dataSource.filter = filterValue;
  }

  constructor(private http: HttpClient,
    private cdr: ChangeDetectorRef) {
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

    this.cdr.detectChanges();

    await delay(500);

    this.http.get<any[]>('http://localhost:8080/').subscribe(
      async (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.loading = false;

        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;

        this.cdr.detectChanges();
      }
    );
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
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