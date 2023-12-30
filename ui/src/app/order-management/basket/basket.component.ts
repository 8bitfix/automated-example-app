import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  @Input() visibleDialog: boolean = false;
  @Output() basketClosed = new EventEmitter();
  quantities2 = [1, 2, 3];

  handleBasketClosed() {
    this.basketClosed.emit(false);
  }
}
