import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomeSectionComponent,
    AboutMeSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
