import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DellIconComponent } from './dell-icon.component';

describe('DellIconComponent', () => {
  let component: DellIconComponent;
  let fixture: ComponentFixture<DellIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DellIconComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DellIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
