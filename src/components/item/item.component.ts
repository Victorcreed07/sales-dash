import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() image: string = '';
  @Input() category: string = '';
  @Input() price: string = '';
  @Input() sale: string = '';

}
