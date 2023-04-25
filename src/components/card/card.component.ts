import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() color: string = '';

   get contentColor() {
    return this.color || 'black';
  }

}
