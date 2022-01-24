// @ts-nocheck
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { ThemeService } from 'src/app/styles/theme/theme.service';
import { AuthService } from '../../services/authentication/auth.service';

@Injectable()
class MockThemeService {
  setSavedTheme = () => {
    // This is intentional
  };
  getActiveTheme = () => {
    // This is intentional
  };
  isDarkTheme = () => {
    // This is intentional
  };
  setLightTheme = () => {
    // This is intentional
  };
  setDarkTheme = () => {
    // This is intentional
  };
}

@Injectable()
class MockAuthService {
  logout = () => {
    // This is intentional
  };
  loadUsersApplication = () => {
    // This is intentional
  };
}


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    const themeService = new MockThemeService();
    const authService = new MockAuthService();

    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: ThemeService, useValue: themeService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    spyOn(component['themeService'], 'setSavedTheme');
    component.ngOnInit();
    expect(component['themeService'].setSavedTheme).toHaveBeenCalled();
  });

  xit('should run #ngOnChanges()', async () => {
    spyOn(component, 'buildUserData');
    component.ngOnChanges({
      user: {
        currentValue: 'someValue',
        firstChange: false,
        isFirstChange: () => false,
        previousValue: ''
      }
    });
    expect(component.buildUserData).toHaveBeenCalled();
  });

  xit('should run #buildUserData()', async () => {
    component.user = {
      username: 'username'
    };
    component.buildUserData();
  });

  xit('should run #getActiveTheme()', async () => {
    spyOn(component['themeService'], 'getActiveTheme');
    component.getActiveTheme();
    expect(component['themeService'].getActiveTheme).toHaveBeenCalled();
  });

  xit('should run #logout()', async () => {
    spyOn(component['authenticationService'], 'logout');
    component.logout();
    expect(component['authenticationService'].logout).toHaveBeenCalled();
    expect(component.isUserDropdownVisible).toBeFalsy();
  });

  xit('should run #onUserMenuCliked()', async () => {
    component.showTrouxIdPage = true;
    component.isUserDropdownVisible = true;
    component.onUserMenuCliked();
    expect(component.showTrouxIdPage).toBeFalsy();
    expect(component.isUserDropdownVisible).toBeFalsy();
  });

  xit('should run #onTrouxIdClicked()', async () => {
    component.trouxidPage = new MockTrouxIdPageComponent();
    spyOn(component.trouxidPage, 'loadUsersApplication');
    component.onTrouxIdClicked();
    expect(component.trouxidPage.loadUsersApplication).toHaveBeenCalled();
  });

  it('should run #toggleTheme()', async () => {
    spyOn(component['themeService'], 'isDarkTheme').and.returnValue(true);
    spyOn(component['themeService'], 'setLightTheme');
    spyOn(component['themeService'], 'setDarkTheme');
    component.toggleTheme();
    expect(component['themeService'].isDarkTheme).toHaveBeenCalled();
    expect(component['themeService'].setLightTheme).toHaveBeenCalled();
    component['themeService'].isDarkTheme['and'].returnValue(false);
    component.toggleTheme();
    expect(component['themeService'].setDarkTheme).toHaveBeenCalled();
  });
});
