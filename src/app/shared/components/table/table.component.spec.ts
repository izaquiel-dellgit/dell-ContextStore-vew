import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subscription } from 'rxjs';
import { ChangeType } from 'src/app/shared/models/diff.model';
import { OrderKind } from './header/header.component';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let mockObs = new Observable<any>()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.changesSubject = mockObs;
    component.changes = [{objectType:'Types',description:'empty',changeType:ChangeType.NEW,sourceContent:'empty',targetContent:'empty',changes:[]}]    
    component.selectedChangeTypes = ['Removed','Added','Updated']
    component.selectedObjectTypes  = ['Types']
    spyOn(mockObs,'subscribe').and.returnValue(new Subscription());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngInit', () => {
    expect(component.ngOnInit()).toBe(void 0);
  });

  it('should changePage', () => {
    expect(component.changePage({from:0,to:5})).toBe(void 0);
  });

  it('should changeItemsPerPage', () => {
    expect(component.changeItemsPerPage(5)).toBe(void 0)
  });

  it('should sort', () => {
    var fakeSortEvent = {value:"Object",label:"Object",order:OrderKind.ASCENDING}
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.UNORDERED
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.DESCENDING
    expect(component.sort(fakeSortEvent)).toBe(void 0) 
    fakeSortEvent.value = 'Name'
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.UNORDERED
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.ASCENDING
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.value = 'Change'
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.DESCENDING
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.UNORDERED
    expect(component.sort(fakeSortEvent)).toBe(void 0)
  });

  it('should filterByChangeType', () => {
    expect(component.filterByChangeType(['Added'])).toBe(void 0);
  });

  it('should filterByObjectType', () => {
    expect(component.filterByObjectType(['Types'])).toBe(void 0)
  });

  it('should filterBySearchText', () => {
    expect(component.filterBySearchText('empty')).toBe(void 0);
  });
});
