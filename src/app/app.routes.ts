import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BoatsComponent } from './boats/boats.component';
import { HowComponent } from './how/how.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'boats/:type', component: BoatsComponent },
  { path: 'how', component: HowComponent },
  { path: '**', redirectTo: '/home' }
];
