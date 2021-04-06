import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubPageComponent } from './components/sub-page/sub-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cars', component: SubPageComponent },
  { path: 'car/:carID', component: SubPageComponent },
  { path: 'brands', component: SubPageComponent },
  { path: 'car-detail', component: SubPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
