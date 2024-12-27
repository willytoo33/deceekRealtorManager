import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { PropertiesComponent } from './properties/properties.component';
import { ConstructionComponent } from './construction/construction.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'construction', component: ConstructionComponent },
  // {path:'**', component: ErrorComponent}
];
