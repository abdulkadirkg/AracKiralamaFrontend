import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth.interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { HomeComponent } from './components/home/home.component';
import { ColorComponent } from './components/color/color.component';
import { SubPageComponent } from './components/sub-page/sub-page.component';

import { ToastrModule } from 'ngx-toastr';
import { SubNaviComponent } from './components/sub-navi/sub-navi.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { SwiperModule } from 'swiper/angular';
import { RentalComponent } from './components/rental/rental.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { NgPaymentCardModule } from 'ng-payment-card';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    FooterComponent,
    LandingComponent,
    SearchboxComponent,
    ShowroomComponent,
    TimelineComponent,
    HomeComponent,
    ColorComponent,
    SubPageComponent,
    SubNaviComponent,
    CarDetailComponent,
    RentalComponent,
    FilterPipe,
    FilterBrandPipe,
    FilterColorPipe,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
