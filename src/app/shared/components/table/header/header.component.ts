import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Change } from 'src/app/shared/models/diff.model';

export enum OrderKind {
  ASCENDING,DESCENDING,UNORDERED
}
export type TableHeader = {
  value:string,
  label:string,
  order:OrderKind | undefined
}

@Component({
  selector: 'app-table-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  changes!: Change[]

  @Output()
  onSorting:EventEmitter<TableHeader> = new EventEmitter<TableHeader>()

  headers:TableHeader[] = [
    {value:"Object",label:"Object",order:OrderKind.UNORDERED},
    {value:"Name",label:"Name",order:OrderKind.UNORDERED},
    {value:"Change",label:"Change",order:OrderKind.UNORDERED},
  ]

  ascendingOrderStyle:string = "dds__arrow-tri-solid-right ascending"
  descendingOrderStyle:string = "dds__arrow-tri-solid-right descending"

  orderKindAscending = OrderKind.ASCENDING
  orderKindDescending = OrderKind.DESCENDING
  orderKindUnordered = OrderKind.UNORDERED

  constructor() { 
    // This is intentional
  }

  ngOnInit(): void {
    this.changes = new Array<Change>()
  }

  sort(event:TableHeader){
    var header = this.headers.find(ev => ev.value == event.value)
    if(header){
      if (header.order == OrderKind.UNORDERED){
        this.resetOrders(header,OrderKind.ASCENDING)
      } else if (header.order == OrderKind.ASCENDING){
        this.resetOrders(header,OrderKind.DESCENDING)
      } else {
        this.resetOrders(header,OrderKind.ASCENDING)
      }
    }
    this.onSorting.emit(header)
  }
  resetOrders(header:TableHeader, orderKind:OrderKind){
    header.order = orderKind
    this.headers.forEach( h => {
      if(h.value != header.value){
        h.order = OrderKind.UNORDERED
      }
    })
  }

}
