import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input()
  iconName: string = '';

  @Input()
  iconStyles: string = '';

  @Input()
  label: string = '';

  @Input()
  collapsed: boolean = true;

  @Input()
  selected: boolean = false;

  @Output()
  onChangeSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

  itemClicked() {
    if (!this.selected) {
      this.onChangeSelected.emit(this.iconName);
    }
  }
}
