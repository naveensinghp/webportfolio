import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './menu/menu.component';
import {MatDividerModule} from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogComponent } from './blog/blog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SkillsComponent } from './skills/skills.component';
import { NgxSkillBarModule } from "ngx-skill-bar";
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomepageComponent,
    BlogComponent,
    SkillsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxSkillBarModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
