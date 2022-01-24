import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { dark, light } from './theme';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run #getAvailableThemes()', () => {
    expect(service.getAvailableThemes()).toEqual([light, dark]);
  });

  it('should run #getActiveTheme()', () => {
    expect(service.getActiveTheme()).toEqual(light);
  });

  it('should run #setDarkTheme()', () => {
    spyOn(service, 'setActiveTheme').and.callThrough();
    service.setDarkTheme();
    expect(service.setActiveTheme).toHaveBeenCalledWith(dark);
  });

  it('should run #setLightTheme()', () => {
    spyOn(service, 'setActiveTheme').and.callThrough();
    service.setLightTheme();
    expect(service.setActiveTheme).toHaveBeenCalledWith(light);
  });

  it('should run #setSavedTheme()', () => {
    spyOn(service, 'setActiveTheme').and.callThrough();
    service.setSavedTheme();
    expect(service.setActiveTheme).toHaveBeenCalled();
  });
  it('should run #isDarkTheme()', () => {
    service.setDarkTheme();
    expect(service.isDarkTheme()).toBeTrue();
  });
});
