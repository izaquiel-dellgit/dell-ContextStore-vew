import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dell-icon',
  templateUrl: './dell-icon.component.html',
  styleUrls: ['./dell-icon.component.scss'],
})
export class DellIconComponent implements OnInit {
  @Input()
  dellStyles: string = '';

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }
}
