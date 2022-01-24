import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {

  @Output()
  toggleClicked = new EventEmitter<any>();

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

  toggleAction() : void{
    this.toggleClicked.emit();
  }

}
