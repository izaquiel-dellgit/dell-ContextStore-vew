import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent, OrderKind } from './header.component';

describe('TableHeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let fakeSortEvent = {value:"Object",label:"Object",order:OrderKind.ASCENDING}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort', () => {
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.DESCENDING
    expect(component.sort(fakeSortEvent)).toBe(void 0)
    fakeSortEvent.order = OrderKind.UNORDERED
    expect(component.sort(fakeSortEvent)).toBe(void 0)
  });
});
