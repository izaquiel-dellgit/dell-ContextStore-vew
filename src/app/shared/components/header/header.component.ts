import { Component, Input, OnInit } from '@angular/core';
import { light } from 'src/app/styles/theme/theme';
import { ThemeService } from 'src/app/styles/theme/theme.service';
// import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
//   @Input() user: User | null = null;
  lightMode: boolean = true;
  isUserDropdownVisible = false;
  showTrouxIdPage = false;

  constructor(
    private themeService: ThemeService //private authenticationService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.themeService.setSavedTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }

  toggleTheme(): void {
    this.themeService.isDarkTheme()
      ? this.themeService.setLightTheme()
      : this.themeService.setDarkTheme();
    this.lightMode = this.themeService.getActiveTheme() === light;
  }
}
