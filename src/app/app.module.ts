import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { HeaderComponent } from './components/header/header.component';
 import { HomeContService } from './services/home-cont.service';
import { HomeComponent } from './components/home/home.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { QuicklinksComponent } from './components/quicklinks/quicklinks.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeadComponent } from './components/page-head/page-head.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SchedulesComponent,
    ResourcesComponent,
    QuicklinksComponent,
    ContactusComponent,
    AboutComponent,
    NotfoundComponent,
    FooterComponent,
    PageHeadComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [HomeContService],
  bootstrap: [AppComponent],

})
export class AppModule { }
