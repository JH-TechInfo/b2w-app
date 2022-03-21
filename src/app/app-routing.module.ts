import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { QuicklinksComponent } from './components/quicklinks/quicklinks.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SchedulesComponent } from './components/schedules/schedules.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'schedule', component: SchedulesComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'quicklinks', component: QuicklinksComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
