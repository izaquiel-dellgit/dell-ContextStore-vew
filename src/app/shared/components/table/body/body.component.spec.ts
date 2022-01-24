import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeType } from 'src/app/shared/models/diff.model';
import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    component.change = {objectType:'Type',description:'empty',changeType:ChangeType.NEW,sourceContent:'empty',targetContent:'empty',changes:[]}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnChanges', () => {
    const mockedChange = {objectType:'Type',description:'empty',changeType:ChangeType.NO_CHANGE,sourceContent:'empty',targetContent:'empty',changes:[]}
    component.mainChange = mockedChange
    component.selectedChange = mockedChange
    expect(component.ngOnChanges({})).toBe(void 0)
  });

  it('should changeColapsed', () => {
    expect(component.changeColapsed()).toBe(void 0)
  });

  it('should getDifferences', () => {
    expect(component.getDifferences()).toBeDefined()
  });
});
