import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './Arquimentor/components/profiles/student-profile/student-profile.component';
import { MentorProfileComponent } from './Arquimentor/components/profiles/mentor-profile/mentor-profile.component';
import {PublicationIdComponent} from "./Arquimentor/components/publication-id/publication-id.component";
import {ChatComponent} from "./Arquimentor/components/chat/chat.component";
import { CreatePostComponent } from './Arquimentor/components/create-post/create-post.component';
import {LoginComponent} from "./Arquimentor/components/login/login.component";
import {RegisterComponent} from "./Arquimentor/components/register/register.component";
import {MainComponent} from "./Arquimentor/pages/main/main.component";
import {SettingsComponent} from "./Arquimentor/components/settings/settings.component";
import {SubscriptionContentComponent} from "./Arquimentor/components/subscription-content/subscription-content.component";
import {AppointmentComponent} from "./Arquimentor/components/appointment/appointment.component";
// @ts-ignore
import {AuthGuard} from "./Arquimentor/helpers/auth.guard.ts";
import {DetailArticleComponent} from "./Arquimentor/components/detail-article/detail-article.component";



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'student-profile/:studentProfileId', component: StudentProfileComponent,canActivate: [AuthGuard] },
  { path: 'mentor-profile/:mentorProfileId', component: MentorProfileComponent,canActivate: [AuthGuard] },
  { path: 'publication/:publicationId', component: PublicationIdComponent,canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent,canActivate: [AuthGuard]},
  { path: 'home', component: MainComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'appointment', component: AppointmentComponent,canActivate: [AuthGuard]},
  { path: 'subscription', component: SubscriptionContentComponent,canActivate: [AuthGuard]},
  { path: 'create-post', component: CreatePostComponent,canActivate: [AuthGuard]},
  {path:'settings',component:SettingsComponent,canActivate: [AuthGuard]},
  {path: 'detail/:id', component: DetailArticleComponent,canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'subscription', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
