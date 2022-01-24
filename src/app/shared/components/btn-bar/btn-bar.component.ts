import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.scss']
})
export class BtnBarComponent implements OnInit {

  showParameters:boolean = false
  showSummary:boolean = false
  showTable:boolean = false
  showDiffResults:boolean = false

  @Output()
  onShowParameters:EventEmitter<void> = new EventEmitter<void>()

  @Output()
  onShowSummary:EventEmitter<void> = new EventEmitter<void>()

  @Output()
  onShowTable:EventEmitter<void> = new EventEmitter<void>()

  @Output()
  onShowDiffResults:EventEmitter<void> = new EventEmitter<void>()

  constructor() { 
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

  toggleShowParameters(){
    this.showParameters = ! this.showParameters;
    this.onShowParameters.emit()
  }
  toggleShowSummary(){
    this.showSummary = ! this.showSummary;
    this.onShowSummary.emit()
  }
  toggleShowTable(){
    this.showTable = ! this.showTable;
    this.onShowTable.emit()
  }
  toggleShowDiffResults(){
    this.showDiffResults = ! this.showDiffResults;
    this.onShowDiffResults.emit()
  }

}
