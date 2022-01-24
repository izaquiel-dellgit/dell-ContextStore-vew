import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
// import { Change, ChangeType } from 'src/app/shared/models/diff.model';
// import { mapChangeType, unique } from 'src/app/shared/utils';
import { OrderKind, TableHeader } from './header/header.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
//
//   @Input()
//   changes: Change [] = []
//
//   filteredChanges : Change[] = []
//
//   @Input()
//   selectedChange: Change | undefined
//
//   @Input()
//   mainChange: Change | undefined
//
//   @Input()
//   changesSubject!: Observable<any>;
//
//   @Input()
//   fromItem:number = 0
//
//   @Input()
//   toItem:number = 5
//
//   @Output()
//   onRowClicked:EventEmitter<any> = new EventEmitter<any>();
//
//   @Output()
//   onPaginationChanged:EventEmitter<any> = new EventEmitter<any>();
//
//   exhibitedChanges: Change[] = new Array<Change>(5)
//
//   @Input()
//   pageSize = 5
//
//   @Input()
//   currentPage = 0
//
//   mapStringChangeType:Map<string,ChangeType> = new Map<string,ChangeType>(
//     [
//       ['Removed',ChangeType.DELETE],
//       ['Added',ChangeType.NEW],
//       ['Updated',ChangeType.UPDATE]
//     ]
//   )
//
//   selectedObjectTypes: any[] = []
//   selectedChangeTypes:any[] = []
//   searchText:string = ''
//
//   constructor() {
//     // This is intentional
//   }
//
//   ngOnInit(): void {
//     if(this.changes.length > 0){
//       this.selectedObjectTypes = unique(this.changes.map( ch => ch.objectType))
//       this.selectedChangeTypes = unique(this.changes.map( ch => mapChangeType.get(ch.changeType)))
//       this.filteredChanges = [...this.changes]
//       this.fillExhibitedChanges(this.fromItem,Math.min(this.toItem,this.changes.length-1))
//     }
//     this.changesSubject.subscribe( ev => {
//       this.changes = ev
//       this.selectedObjectTypes = unique(this.changes.map( ch => ch.objectType))
//       this.selectedChangeTypes = unique(this.changes.map( ch => mapChangeType.get(ch.changeType)))
//       this.filteredChanges = [...ev]
//       this.fillExhibitedChanges(0,Math.min(this.pageSize-1,this.changes.length-1))
//       this.onRowClicked.emit({clicked:undefined,parent:undefined})
//     })
//
//   }
//   fillExhibitedChanges(from:number,to:number){
//     this.fromItem = from
//     this.toItem = to
//     this.exhibitedChanges = new Array<Change>(this.pageSize)
//     var count:number = 0;
//     for(var i=this.fromItem; i <= Math.min(this.toItem,this.changes.length-1);i++){
//       if(!this.exhibitedChanges[count]){
//         this.exhibitedChanges[count] = this.filteredChanges[i]
//         count = count + 1
//       } else{
//         this.exhibitedChanges.push(this.filteredChanges[i])
//       }
//     }
//   }
//
//   changePage(event:any){
//     this.fillExhibitedChanges(event.from,event.to)
//     this.onPaginationChanged.emit(event)
//   }
//
//   changeItemsPerPage(event:any){
//     this.pageSize = parseInt(event)
//   }
//   sort(event:TableHeader){
//     var column = event.value
//     var order = event.order
//     if(column == 'Object'){
//       if(order == OrderKind.ASCENDING){
//         this.filteredChanges.sort( (ch1,ch2) =>
//           ch1.objectType.localeCompare(ch2.objectType)
//         )
//       } else if (order == OrderKind.DESCENDING){
//         this.filteredChanges.sort( (ch1,ch2) =>
//           ch2.objectType.localeCompare(ch1.objectType)
//         )
//       }
//       this.fillExhibitedChanges(this.fromItem,this.toItem)
//     } else if (column == 'Name') {
//       if(order == OrderKind.ASCENDING){
//         this.filteredChanges.sort( (ch1,ch2) =>
//           ch1.description.localeCompare(ch2.description)
//         )
//       } else if (order == OrderKind.DESCENDING){
//         this.filteredChanges.sort( (ch1,ch2) =>
//           ch2.description.localeCompare(ch1.description)
//         )
//       }
//       this.fillExhibitedChanges(this.fromItem,this.toItem)
//     } else if (column == 'Change') {
//       if(order == OrderKind.ASCENDING){
//         this.filteredChanges.sort( (ch1,ch2) =>
//           ch1.changeType - ch2.changeType
//         )
//       } else if (order == OrderKind.DESCENDING){
//         this.filteredChanges.sort( (ch1,ch2) =>
//           ch2.changeType - ch1.changeType
//         )
//       }
//       this.fillExhibitedChanges(this.fromItem,this.toItem)
//     }
//   }
//
//   applyFilters(){
//     this.filteredChanges = this.changes.filter( ch => {
//       var chTypeName = mapChangeType.get(ch.changeType)
//
//       return this.selectedChangeTypes.find((ele:any) => ele.item_name == chTypeName)
//     })
//
//     this.filteredChanges = this.filteredChanges.filter( ch => {
//       return this.selectedObjectTypes.find((ele:any) => ele.item_name == ch.objectType)
//     })
//     if(this.searchText.length > 0){
//       this.filteredChanges = this.filteredChanges.filter( ch => {
//         return ch.description.includes(this.searchText) ||
//                 ch.description.includes(this.searchText.toUpperCase())
//       })
//     }
//     this.fillExhibitedChanges(this.fromItem,Math.min(this.toItem,this.changes.length-1))
//   }
//   filterByChangeType(event:any){
//     this.selectedChangeTypes = event
//     this.applyFilters()
//   }
//
//   filterByObjectType(event:any){
//     this.selectedObjectTypes = event
//     this.applyFilters()
//   }
//

//   filterBySearchText(event:string){
//     this.searchText = event
//     this.applyFilters()
//   }
}


