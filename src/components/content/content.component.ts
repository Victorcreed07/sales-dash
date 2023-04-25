import { Component } from '@angular/core';

export interface materials {
  PostingId: number;
  MaterialName: string;
  Quantity: string;
  Category: string;
  SubCategory: string;
  Price: string;
  PostedDate: Date;
}

const ELEMENT_DATA: materials[] = [
  {PostingId: 48321, MaterialName: 'ShreddedCable', Quantity: '100tons', Category: 'Metals', SubCategory: 'WEEE', Price: 'SAR 10,000', PostedDate: new Date('2023-04-25')},
  {PostingId: 48325, MaterialName: 'Coal Dust', Quantity: '80tons', Category: 'Mining', SubCategory: 'Tailing', Price: 'SAR 12,000', PostedDate: new Date('2023-02-22')},
  {PostingId: 48433, MaterialName: 'Microchip', Quantity: '105tons', Category: 'Metals', SubCategory: 'WEEE', Price: 'SAR 11,000', PostedDate: new Date('2023-05-11')},
  {PostingId: 48300, MaterialName: 'Semi Conductor', Quantity: '50tons', Category: 'Chips', SubCategory: 'WEEE', Price: 'SAR 6,000', PostedDate: new Date('2023-02-14')},
  
  
];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})



export class ContentComponent {

  displayedColumns: string[] = ['PostingId', 'MaterialName', 'Quantity', 'Category','SubCategory','Price','PostedDate'];
  dataSource = ELEMENT_DATA;

  data = [
    { title: "Overall Posted Cost", content: "12M SAR",color:'black' },
    { title: "Municipal Waste", content: "7M SAR",color:'green' },
    { title: "Metal Waste", content: "3M SAR",color:'#adad1c' },
    { title: "Hazardous", content: "2M SAR",color:'red' }
  ];

  category = [
    { title: "Metals", value: "47",color:'primary' },
    { title: "Minings", value: "32",color:'accent' },
    { title: "Lubricants", value: "25",color:'warn' },
    { title: "Medicals", value: "45",color:'accent' },
    { title: "Industrials", value: "82",color:'primary' }
  ];

}
