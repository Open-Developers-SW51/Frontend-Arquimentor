import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './Arquimentor/components/profiles/student-profile/student-profile.component';
import { MentorProfileComponent } from './Arquimentor/components/profiles/mentor-profile/mentor-profile.component';
import {PublicationIdComponent} from "./Arquimentor/components/publication-id/publication-id.component";
import {ChatComponent} from "./Arquimentor/components/chat/chat.component";
import { CreatePostComponent } from './Arquimentor/components/create-post/create-post.component';
import {LandigPageComponent} from "./Arquimentor/components/landig-page/landig-page.component";
import {LoginComponent} from "./Arquimentor/components/login/login.component";
import {RegisterComponent} from "./Arquimentor/components/register/register.component";
import {MainComponent} from "./Arquimentor/pages/main/main.component";

import {SubscriptionContentComponent} from "./Arquimentor/components/subscription-content/subscription-content.component";

import {SubscriptionComponent} from "./Arquimentor/components/subscription/subscription.component";
import {AppointmentComponent} from "./Arquimentor/components/appointment/appointment.component";
// @ts-ignore
import {AuthGuard} from "./Arquimentor/helpers/auth.guard.ts";



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'student-profile/:studentProfileId', component: StudentProfileComponent },
  { path: 'mentor-profile/:mentorProfileId', component: MentorProfileComponent },
  { path: 'publication/:publicationId', component: PublicationIdComponent,canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent },
  { path: 'landingpage', component: LandigPageComponent },
  { path: 'home', component: MainComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'appointment', component: AppointmentComponent},
  { path: 'subscription', component: SubscriptionContentComponent},
  { path: 'create-post', component: CreatePostComponent},

  { path: 'subscription', component: SubscriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
