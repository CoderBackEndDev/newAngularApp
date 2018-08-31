import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { BannerLogoComponent } from './banner-logo/banner-logo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule}from '@angular/forms';
import {ToastModule} from 'ng6-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HomeComponent,
    PhotosComponent,
    AboutUsComponent,
    FeedbackFormComponent,
    BannerLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
   // ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
