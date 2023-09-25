import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from './Arquimentor/components/profiles/student-profile/student-profile.component';
import { MentorProfileComponent } from './Arquimentor/components/profiles/mentor-profile/mentor-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/student-profile', pathMatch: 'full' },
  { path: 'student-profile/:studentId', component: StudentProfileComponent },
  { path: 'mentor-profile/:mentorId', component: MentorProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
