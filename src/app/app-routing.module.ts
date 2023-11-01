import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './Arquimentor/components/profiles/student-profile/student-profile.component';
import { MentorProfileComponent } from './Arquimentor/components/profiles/mentor-profile/mentor-profile.component';
import {ViewProfileComponent} from "./Arquimentor/components/view-profile/view-profile.component";
import {ChatComponent} from "./Arquimentor/components/chat/chat.component";
import {ReviewsComponent} from "./Arquimentor/components/reviews/reviews.component";

import {LandigPageComponent} from "./Arquimentor/components/landig-page/landig-page.component";
import{CardPublicationContentComponent} from "./Arquimentor/components/card-publication-content/card-publication-content.component";
import {LoginComponent} from "./Arquimentor/components/login/login.component";
import {RegisterComponent} from "./Arquimentor/components/register/register.component";
import {MainComponent} from "./Arquimentor/components/main/main.component";
import {SubscriptionComponent} from "./Arquimentor/components/subscription/subscription.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'student-profile/:studentId', component: StudentProfileComponent },
  { path: 'mentor-profile/:mentorId', component: MentorProfileComponent },
  { path: 'view', component: ViewProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'reviews', component: ReviewsComponent },

  { path: 'landingpage', component: LandigPageComponent },
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'subscription', component: SubscriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
