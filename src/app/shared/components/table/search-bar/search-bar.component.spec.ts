import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subscription } from 'rxjs';
import { ChangeType } from 'src/app/shared/models/diff.model';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let fakeObs = new Observable<any>()
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    component.changesSubject = fakeObs;
    spyOn(fakeObs,'subscribe').and.returnValue(new Subscription());
    fixture.detectChanges();
  });

  it('should create', () => {
    component.changes = [{objectType:'Type',description:'empty',changeType:ChangeType.NO_CHANGE,sourceContent:'empty',targetContent:'empty',changes:[]}];
    expect(component).toBeTruthy();
  });

  it('should calculateOptions', () => {
    component.changes = [{objectType:'Type',description:'empty',changeType:ChangeType.NO_CHANGE,sourceContent:'empty',targetContent:'empty',changes:[]}];
    expect(component.calculateOptions()).toBe(void 0)
  });

  it('should selectedObjects', () => {
    expect(component.selectedObjects({})).toBe(void 0)
  });

  it('should selectedChanges', () => {
    expect(component.selectedChanges({})).toBe(void 0)
  });

  it('should textChange', () => {
    expect(component.textChanged({})).toBe(void 0)
  });
});
