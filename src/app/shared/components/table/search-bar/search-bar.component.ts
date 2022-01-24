import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Change } from 'src/app/shared/models/diff.model';
import { mapChangeType, unique } from 'src/app/shared/utils';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @ViewChild("searchText") searchText!: ElementRef

  @Input()
  changes:Change[] = []

  @Input()
  changesSubject!: Observable<any>;

  @Output()
  onSelectedChangeType:EventEmitter<string[]> = new EventEmitter<string[]>()

  @Output()
  onSelectedObjectType:EventEmitter<string[]> = new EventEmitter<string[]>()

  @Output()
  onSearchTextChange:EventEmitter<string> = new EventEmitter<string>()

  optionsObjects:string[] = []

  optionsChanges:string[] = []

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    this.calculateOptions()
    this.changesSubject.subscribe( ev => {
      this.changes = ev
      this.calculateOptions()
    })
  }

  calculateOptions(){
    this.optionsObjects = unique(this.changes.map( ch => ch.objectType))
    this.optionsChanges = unique(this.changes.map( ch => mapChangeType.get(ch.changeType)))
  }

  selectedObjects(event:any){
    this.onSelectedObjectType.emit(event)
  }

  selectedChanges(event:any){
    this.onSelectedChangeType.emit(event)
  }

  textChanged(event:any){
    this.onSearchTextChange.emit(this.searchText.nativeElement.value)
  }
}
