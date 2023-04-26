import { Component } from '@angular/core';


export interface materials {
  Buyers: {
    name:string;
    icon:string;
  };
  ID: number;
  Material: string;
  Destinations: string;
  Schedule: {
    status: string;
    update: string;
  };
  Quantity: string;
  Remaining: {
    remain: string;
    trucks: string;
  };
  InTransit: {
    remain: string;
    trucks: string;
  };
  Delivered: {
    remain: string;
    trucks: string;
  };
  Received: {
    remain: string;
    trucks: string;
  };
}

const ELEMENT_DATA: materials[] = [
  {Buyers: {name:'ACAM',icon:'../../assets/saudi-riyal.png'}, ID: 483, Material: 'Copper Cathode', Destinations: 'Diriyah', Schedule: {status:'Scheduled',update:'Updated 30 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'0 mt',trucks:'0 trucks'}, InTransit:{remain:'30 mt',trucks:'7 trucks'}, Delivered:{remain:'0 mt',trucks:'0 trucks'}, Received:{remain:'1470 mt',trucks:'35 trucks'}},
  {Buyers: {name:'Reviva',icon:'../../assets/building.png'}, ID: 812, Material: 'Scraps', Destinations: 'Al-Gweilyaah', Schedule: {status:'UnScheduled',update:'Updated 27 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'200 mt',trucks:'7 trucks'}, InTransit:{remain:'0 mt',trucks:'0 trucks'}, Delivered:{remain:'100 mt',trucks:'3 trucks'}, Received:{remain:'700 mt',trucks:'12 trucks'}},
  {Buyers: {name:'Eiyadha',icon:'../../assets/mecca.png'}, ID: 212, Material: 'Plastics', Destinations: 'Jubail', Schedule: {status:'Scheduled',update:'Updated 15 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'0 mt',trucks:'0 trucks'}, InTransit:{remain:'0 mt',trucks:'0 trucks'}, Delivered:{remain:'200 mt',trucks:'7 trucks'}, Received:{remain:'1,700 mt',trucks:'41 trucks'}},
  {Buyers: {name:'Rajhi Metal',icon:'../../assets/riyal.png'}, ID: 342, Material: 'Aluminum', Destinations: 'Lihyan', Schedule: {status:'UnScheduled',update:'Updated 14 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'0 mt',trucks:'0 trucks'}, InTransit:{remain:'50 mt',trucks:'4 trucks'}, Delivered:{remain:'250 mt',trucks:'9 trucks'}, Received:{remain:'950mt',trucks:'16 trucks'}},
  {Buyers: {name:'ACAM',icon:'../../assets/saudi-riyal.png'}, ID: 483, Material: 'Copper Cathode', Destinations: 'Diriyah', Schedule: {status:'Scheduled',update:'Updated 30 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'0 mt',trucks:'0 trucks'}, InTransit:{remain:'30 mt',trucks:'7 trucks'}, Delivered:{remain:'0 mt',trucks:'0 trucks'}, Received:{remain:'1470 mt',trucks:'35 trucks'}},
  {Buyers: {name:'Reviva',icon:'../../assets/building.png'}, ID: 812, Material: 'Scraps', Destinations: 'Al-Gweilyaah', Schedule: {status:'UnScheduled',update:'Updated 27 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'200 mt',trucks:'7 trucks'}, InTransit:{remain:'0 mt',trucks:'0 trucks'}, Delivered:{remain:'100 mt',trucks:'3 trucks'}, Received:{remain:'700 mt',trucks:'12 trucks'}},
  {Buyers: {name:'Eiyadha',icon:'../../assets/mecca.png'}, ID: 212, Material: 'Plastics', Destinations: 'Jubail', Schedule: {status:'Scheduled',update:'Updated 15 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'0 mt',trucks:'0 trucks'}, InTransit:{remain:'0 mt',trucks:'0 trucks'}, Delivered:{remain:'200 mt',trucks:'7 trucks'}, Received:{remain:'1,700 mt',trucks:'41 trucks'}},
  {Buyers: {name:'Rajhi Metal',icon:'../../assets/riyal.png'}, ID: 342, Material: 'Aluminum', Destinations: 'Lihyan', Schedule: {status:'UnScheduled',update:'Updated 14 days ago'}, Quantity: '1,500 mt', Remaining:{remain:'0 mt',trucks:'0 trucks'}, InTransit:{remain:'50 mt',trucks:'4 trucks'}, Delivered:{remain:'250 mt',trucks:'9 trucks'}, Received:{remain:'950mt',trucks:'16 trucks'}}
  
  
];

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.scss']
})
export class Content2Component {



  displayedColumns: string[] = ['Buyers', 'ID', 'Material', 'Destinations','Schedule','Quantity','Remaining','InTransit','Delivered','Received'];
  dataSource = ELEMENT_DATA;

  data = [
    { title: "Remaining Orders", content: "60",color:'gray' },
    { title: "In-Transit Orders", content: "42",color:'#adad1c' },
    { title: "Delivered Orders", content: "12",color:'blue' },
    { title: "Received Orders", content: "06",color:'green' }
  ];

}
