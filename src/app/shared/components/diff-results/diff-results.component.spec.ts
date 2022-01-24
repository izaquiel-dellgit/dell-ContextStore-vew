import { SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Change, ChangeType } from 'src/app/shared/models/diff.model';

import { DiffResultsComponent } from './diff-results.component';

describe('DiffResultsComponent', () => {
  let component: DiffResultsComponent;
  let fixture: ComponentFixture<DiffResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test case ngOnChange', () => {
    const changes: SimpleChanges = {}
    expect(component.ngOnChanges(changes)).toBe(void 0)
  });

  it('test case mountExchibitionTexts', () => {
    const change:Change = {objectType:"Table", description:"Empty",changeType:ChangeType.DELETE,sourceContent:"",targetContent:"",changes:[]}
    component.change = change
    expect(component.mountExibitionTexts()).toBe(void 0);
  });
  
});
