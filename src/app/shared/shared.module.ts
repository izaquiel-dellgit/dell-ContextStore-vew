import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { DellIconComponent } from './components/dell-icon/dell-icon.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DellIconComponent,
    ToggleButtonComponent,
    NavbarComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    DellIconComponent,
    ToggleButtonComponent,
    NavbarComponent,
    NavItemComponent
  ]
})

export class SharedModule {

}
