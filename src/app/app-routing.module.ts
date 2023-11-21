import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './user/pages/student-profile/student-profile.component';
import { MentorProfileComponent } from './user/pages/mentor-profile/mentor-profile.component';
import {PublicationIdComponent} from "./Arquimentor/pages/publication-id/publication-id.component";
import { CreatePostComponent } from './Arquimentor/pages/create-post/create-post.component';
import {LoginComponent} from "./user/pages/login/login.component";
import {RegisterComponent} from "./user/pages/register/register.component";
import {MainComponent} from "./Arquimentor/pages/main/main.component";
import {SettingsComponent} from "./Arquimentor/pages/settings/settings.component";
import {SubscriptionContentComponent} from "./subscription/pages/subscription-content/subscription-content.component";
import {AppointmentComponent} from "./advice/components/appointment/appointment.component";
// @ts-ignore
import {AuthGuard} from "./shared/helpers/auth.guard.ts";
import {DetailArticleComponent} from "./subscription/pages/detail-article/detail-article.component";
import {NotificationListComponent} from "./advice/pages/notification-list/notification-list.component";




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'student-profile/:studentProfileId', component: StudentProfileComponent,canActivate: [AuthGuard] },
  { path: 'mentor-profile/:mentorProfileId', component: MentorProfileComponent,canActivate: [AuthGuard] },
  { path: 'publication/:publicationId', component: PublicationIdComponent,canActivate: [AuthGuard] },
  { path: 'home', component: MainComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'appointment', component: AppointmentComponent,canActivate: [AuthGuard]},
  { path: 'subscription', component: SubscriptionContentComponent,canActivate: [AuthGuard]},
  {path: 'notification', component: NotificationListComponent,canActivate: [AuthGuard]},
  { path: 'create-post', component: CreatePostComponent,canActivate: [AuthGuard]},
  {path:'settings',component:SettingsComponent,canActivate: [AuthGuard]},
  {path: 'detail/:id', component: DetailArticleComponent,canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
