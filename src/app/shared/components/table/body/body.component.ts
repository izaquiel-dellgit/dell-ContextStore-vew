import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IconTypes } from 'src/app/shared/components/icon/icon.component';
import { Change, ChangeType } from 'src/app/shared/models/diff.model';
import { countChanges, dbObjectTypesIconsMap } from 'src/app/shared/utils';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnChanges {
  // USING ONLY ONE BOOLEAN IT IS POSSIBLE TO HANDLE COLAPSE AND EXPAND
  // THIS IS A STATE THT CONSTROLS THE VIEW
  //COLAPSE = TRUE -> THE COMPONENT SHOWS ONLY THE FATHER
  // COLAPSE = FALSE -> CHILDREN DETAILS ARE EXHIBITED
  @Input()
  colapse: boolean;

  @Input()
  isChild?: boolean;

  @Input()
  change: Change | undefined

  @Input()
  selectedChange: Change | undefined

  @Input()
  mainChange: Change | undefined

  @Output()
  onClicked:EventEmitter<any> = new EventEmitter<any>();

  dbObjectTypesIconsMap = dbObjectTypesIconsMap

  constructor() {
    this.colapse = true
  }

  ngOnInit() {
    // This is intentional
  }

  ngOnChanges(changes:SimpleChanges){
    if(this.change && this.mainChange){
      if(this.change !== this.mainChange){
        this.colapse = true
      }
    }
  }
  getIconName() : IconTypes {
    return this.dbObjectTypesIconsMap.get(this.change?.objectType || "") as IconTypes
  }
 
  changeColapsed(): void {
    this.emitSelecteds(this.change)
  }

  
  getDifferences() {
    return countChanges(this.change)
  }

  getIconForChange() {
    if (this.change?.changeType == ChangeType.DELETE){
      return 'cancel'
    } else if (this.change?.changeType == ChangeType.NEW) {
      return 'add'
    } else {
      return 'update'
    }
  }

  emitSelecteds(event:any){
    this.onClicked.emit({clicked:event.clicked?event.clicked:event,parent:this.change})
  }
}
