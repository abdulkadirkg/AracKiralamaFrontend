import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SubPageComponent } from './components/sub-page/sub-page.component';
import { CleanerGuard } from './guards/cleaner.guard';
import { LoginGuard } from './guards/login.guard';
import { PaymentGuard } from './guards/payment.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cars', component: SubPageComponent },
  { path: 'car/:carID', component: CarDetailComponent },
  { path: 'brands', component: SubPageComponent },
  { path: 'payment', component: PaymentComponent, canActivate: [LoginGuard,PaymentGuard], canDeactivate:[CleanerGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
