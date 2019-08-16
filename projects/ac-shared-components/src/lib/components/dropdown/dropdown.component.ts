import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-dropdown',
  templateUrl: './dropdown.component.html',
  styles: ["li { cursor: pointer; }"]
})
export class DropdownComponent {
  @Input() title: string;
  @Input() items: string[];
  @Input() selected: number;
  @Input() error: boolean;
  @Input() isDisabled: boolean;
  @Output() selectEmitter: EventEmitter<number>;

  constructor() {
      this.selectEmitter = new EventEmitter<number>();
  }

  select(index: number) {
      this.selected = index;
      this.selectEmitter.emit(this.selected);
  }
}