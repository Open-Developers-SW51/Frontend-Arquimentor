import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../../services/profile-service/profile-service.service";
import { ActivatedRoute } from '@angular/router';
import { Student } from "../../../interfaces/student";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  userProfile: Student | undefined;
    isEditing = false;
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}
  toggleEdit(): void {
    this.isEditing = true;
  }
  ngOnInit(): void {
    const studentId = this.route.snapshot.params['studentId'];


    if (studentId !== null) {

      this.profileService.getStudentProfileById(studentId).subscribe(
        (student: Student) => {

          this.userProfile = student;
        },
        (error) => {
          console.error('Error al obtener el perfil del estudiante:', error);
        }
      );
    } else {
      console.error('studentId es nulo. No se puede obtener el perfil del estudiante.');
    }
  }

  saveProfile(): void {
   this.isEditing = false;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}
