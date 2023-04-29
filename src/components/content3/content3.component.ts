import { Component } from '@angular/core';

export interface materials {

  Image: string;
  Category:string;
  Price:string;
  SalesType:string;

  }

  const ELEMENT_DATA: materials[] = [{Image:'../../assets/tires.jpg',Category:'Tires',Price:'SAR 15000',SalesType:'Bidding'},
    {Image:'../../assets/pipes.jpg',Category:'Pipes',Price:'SAR 10000',SalesType:'Bidding'}]

@Component({
  selector: 'app-content3',
  templateUrl: './content3.component.html',
  styleUrls: ['./content3.component.scss']
})
export class Content3Component {

  dataSource = ELEMENT_DATA;

   category = [
    { title: "Metals", value: "47",color:'primary' },
    { title: "Minings", value: "32",color:'accent' },
    { title: "Lubricants", value: "25",color:'warn' },
    { title: "Medicals", value: "45",color:'accent' },
    { title: "Industrials", value: "82",color:'primary' }
  ];

   buckets = [
    {title:"Municipal Waste",value:"7"},
    {title:"Metal Waste",value:"12"},
    {title:"Municipal Waste",value:"3"}

    ]

}
