import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutUsComponent}from './about-us/about-us.component'
import {FeedbackFormComponent}from './feedback-form/feedback-form.component'
import{HomeComponent}from './home/home.component'
import{PhotosComponent} from './photos/photos.component'
const routes: Routes = [{
  path:'Home',
  component:HomeComponent
},
{
  path:'Photos',
  component:PhotosComponent
},
{
  path:'AboutUs',
  component:AboutUsComponent
},
{
  path:'Feedbackpage',
  component:FeedbackFormComponent
},
{
  path:'Feedback',
  component:FeedbackFormComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
