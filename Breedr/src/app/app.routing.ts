import {AnimalDetailsComponent} from './animal-details/animal-details.component';
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RouteNames} from './Route-Names.model';
import {LoginComponent} from "./login/login.component";

export const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent}, // should be changed to our default page
  {path: 'login', component: LoginComponent},
  {path: RouteNames.ANIMAL_DETAILS, component: AnimalDetailsComponent},
];
