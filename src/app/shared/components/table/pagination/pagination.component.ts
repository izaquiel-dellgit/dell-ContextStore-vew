import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @ViewChild('pageInput')
  pageInput!: ElementRef;
  
  @Input()
  changesSubject!: Observable<any>;

  @Output()
  onPageChanged:EventEmitter<any> = new EventEmitter<any>()

  @Output()
  onItemsPerPageChanged:EventEmitter<any> = new EventEmitter<any>()

  @Input()
  items:any[] = [];

  @Input()
  pageSize:number = 5;

  @Input()
  currentPage:number = 0;

  totalPages:number = 0;

  @Input()
  fromItem:number = 0;

  @Input()
  toItem:number = 0;

  pageSizes = [5,10,15,20,25,30,35,40]

  constructor() { 
    // This is intentional
  }

  ngOnInit(): void {
    this.calculateValues()
    this.changesSubject.subscribe( 
      (res) => {
        this.items = res
        this.calculateValues()
      },
      (err) => {
        this.items = []
        this.calculateValues()
      })
  }

  ngOnChanges() {
    this.calculateValues()
  }

  calculateValues(){
    if (this.items.length > 0){
      if(this.currentPage == 0){
        this.currentPage = 1;
      }
      this.totalPages = Math.ceil(this.items.length/this.pageSize)
      this.calculateFromToItems()
    } else {
      this.items = []
      this.currentPage = 0;
      this.totalPages = 0;
      this.fromItem = 0;
      this.toItem = 0;
    }
  }
  calculateFromToItems(){
    this.fromItem = (this.currentPage - 1)*this.pageSize
    this.toItem = Math.min( this.currentPage*this.pageSize - 1, this.items.length - 1)
  }

  previousClicked(){
    if(this.currentPage > 1){
      this.currentPage = this.currentPage - 1
      this.calculateFromToItems()
      this.onPageChanged.emit({from:this.fromItem,to:this.toItem,currentPage:this.currentPage, pageSize:this.pageSize})
    }
  }
  nextClicked(){
    if(this.currentPage < this.totalPages){
      this.currentPage = this.currentPage + 1
      this.calculateFromToItems()
      this.onPageChanged.emit({from:this.fromItem,to:this.toItem,currentPage:this.currentPage, pageSize:this.pageSize})
    }
  }
  changeCurrentPageOnBlur(event:any){
    var newPage = parseInt(event.target.value)
    if(newPage >= 1 && newPage <= this.totalPages && newPage != this.currentPage){
      this.currentPage = newPage
      this.calculateFromToItems()
      this.onPageChanged.emit({from:this.fromItem,to:this.toItem,currentPage:this.currentPage, pageSize:this.pageSize})
    } else {
      this.pageInput.nativeElement.value = this.currentPage
    }
  }
  changeCurrentPageOnKeyEnter(event:any){
    var newPage = parseInt(event.srcElement.value)
    if(newPage >= 1 && newPage <= this.totalPages && newPage != this.currentPage){
      this.currentPage = newPage
      this.calculateFromToItems()
      this.onPageChanged.emit({from:this.fromItem,to:this.toItem,currentPage:this.currentPage, pageSize:this.pageSize})
    } else {
      this.pageInput.nativeElement.value = this.currentPage
    }
  }
  isPreviousDisabled(){
    return this.currentPage <= 1;
  }
  isNextDisabled(){
    return this.currentPage >= this.totalPages
  }
  changeItemsPerPage(event:any){
    this.pageSize = parseInt(event.target.value)
    this.calculateValues()
    this.onItemsPerPageChanged.emit(this.pageSize)
    this.onPageChanged.emit({from:this.fromItem,to:this.toItem,currentPage:this.currentPage, pageSize:this.pageSize})
  }
}
