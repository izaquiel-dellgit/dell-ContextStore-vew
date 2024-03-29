import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBarComponent } from './btn-bar.component';

describe('BtnBarComponent', () => {
  let component: BtnBarComponent;
  let fixture: ComponentFixture<BtnBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test case toggleShowParameters', () => {
    expect(component.toggleShowParameters()).toBe(void 0)
  });

  it('test case toggleShowSummary', () => {
    expect(component.toggleShowSummary()).toBe(void 0)
  });

  it('test case toggleShowTable', () => {
    expect(component.toggleShowTable()).toBe(void 0)
  });

  it('test case toggleShowDiffResults', () => {
    expect(component.toggleShowDiffResults()).toBe(void 0)
  });

});
