import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { UpcomingFairs } from './shared/components/upcomingFairs/upcomingFairs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    UpcomingFairs,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
