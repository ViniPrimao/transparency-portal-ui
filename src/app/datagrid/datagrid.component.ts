

import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

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
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule],
})
export class DatagridComponent implements OnInit {
  dataSource: SupplyElements[] = [];
  columnsToDisplay = ['supplyName', 'supplyValue', 'lastUpdateDate', 'createdDate', 'nodeId', 'chainId', 'fromPlace', 'toPlace', 'updateBy', 'destiny', 'arrived'];
  
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: SupplyElements | null = null;

  toggleExpansion(element: any): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  ngOnInit(): void {
    this.dataSource = [
      {
        "supplyDTO": [
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "a8d9c05f-624b-4b94-884e-7d8e583cd9ed",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "690998da-3cd3-4268-bf14-8c311611ddad",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "9a6cf150-7bd4-469b-8a20-30c50a5d5584",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "38883259-89f2-485a-abf3-b15d05da841d",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "51507672-b3c9-42e6-9df7-5c2624080ed7",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "7caaf4cf-509a-4544-8b41-8b708ec6e483",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "b15dcfd5-caea-40fc-83ae-d9f244ac0f10",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "89a94a03-118f-49b7-88b3-d8a7c0740fdb",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "52476fe4-9fe7-44ad-931d-466edeaa048a",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "a8d9c05f-624b-4b94-884e-7d8e583cd9ed",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "690998da-3cd3-4268-bf14-8c311611ddad",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "9a6cf150-7bd4-469b-8a20-30c50a5d5584",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "38883259-89f2-485a-abf3-b15d05da841d",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "51507672-b3c9-42e6-9df7-5c2624080ed7",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "7caaf4cf-509a-4544-8b41-8b708ec6e483",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "b15dcfd5-caea-40fc-83ae-d9f244ac0f10",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "89a94a03-118f-49b7-88b3-d8a7c0740fdb",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "52476fe4-9fe7-44ad-931d-466edeaa048a",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "a8d9c05f-624b-4b94-884e-7d8e583cd9ed",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "690998da-3cd3-4268-bf14-8c311611ddad",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "9a6cf150-7bd4-469b-8a20-30c50a5d5584",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "38883259-89f2-485a-abf3-b15d05da841d",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "51507672-b3c9-42e6-9df7-5c2624080ed7",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "7caaf4cf-509a-4544-8b41-8b708ec6e483",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "b15dcfd5-caea-40fc-83ae-d9f244ac0f10",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "89a94a03-118f-49b7-88b3-d8a7c0740fdb",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "52476fe4-9fe7-44ad-931d-466edeaa048a",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "a8d9c05f-624b-4b94-884e-7d8e583cd9ed",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "690998da-3cd3-4268-bf14-8c311611ddad",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "9a6cf150-7bd4-469b-8a20-30c50a5d5584",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "38883259-89f2-485a-abf3-b15d05da841d",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "51507672-b3c9-42e6-9df7-5c2624080ed7",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "7caaf4cf-509a-4544-8b41-8b708ec6e483",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "b15dcfd5-caea-40fc-83ae-d9f244ac0f10",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "89a94a03-118f-49b7-88b3-d8a7c0740fdb",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "52476fe4-9fe7-44ad-931d-466edeaa048a",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "a8d9c05f-624b-4b94-884e-7d8e583cd9ed",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "690998da-3cd3-4268-bf14-8c311611ddad",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "9a6cf150-7bd4-469b-8a20-30c50a5d5584",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "38883259-89f2-485a-abf3-b15d05da841d",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "51507672-b3c9-42e6-9df7-5c2624080ed7",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "7caaf4cf-509a-4544-8b41-8b708ec6e483",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "b15dcfd5-caea-40fc-83ae-d9f244ac0f10",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "89a94a03-118f-49b7-88b3-d8a7c0740fdb",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "52476fe4-9fe7-44ad-931d-466edeaa048a",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "a8d9c05f-624b-4b94-884e-7d8e583cd9ed",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "690998da-3cd3-4268-bf14-8c311611ddad",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "9a6cf150-7bd4-469b-8a20-30c50a5d5584",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "38883259-89f2-485a-abf3-b15d05da841d",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "51507672-b3c9-42e6-9df7-5c2624080ed7",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "7caaf4cf-509a-4544-8b41-8b708ec6e483",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "b15dcfd5-caea-40fc-83ae-d9f244ac0f10",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "89a94a03-118f-49b7-88b3-d8a7c0740fdb",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          },
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "32ef9eeb-42b5-468a-bd4c-26736ba02d73",
            "chainId": "52476fe4-9fe7-44ad-931d-466edeaa048a",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          }
        ]
      },
      {
        "supplyDTO": [
          {
            "supplyName": "Medical Supply",
            "supplyValue": 500.0,
            "lastUpdateDate": "2023-09-07T14:30:00",
            "createdDate": "2023-09-07T14:30:00",
            "nodeId": "470cc96c-ad1f-49f1-ae0c-70579ad30f5c",
            "chainId": "6d12ba0c-1d37-4142-954d-d490e81a8d4d",
            "fromPlace": "Supplier Warehouse",
            "toPlace": "Hospital XYZ",
            "updateBy": "John Doe",
            "destiny": "Storage Unit B",
            "arrived": false
          }
        ]
      }
    ];
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