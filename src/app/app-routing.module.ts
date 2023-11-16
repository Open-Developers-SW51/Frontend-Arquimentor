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



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'student-profile/:studentId', component: StudentProfileComponent },
  { path: 'mentor-profile/:mentorId', component: MentorProfileComponent },
  { path: 'publication/:publicationId', component: PublicationIdComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'landingpage', component: LandigPageComponent },
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: 'subscription', component: SubscriptionContentComponent},
  { path: 'create-post', component: CreatePostComponent},

  { path: 'subscription', component: SubscriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
