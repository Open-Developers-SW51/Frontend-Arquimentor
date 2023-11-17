import { Component, OnInit } from '@angular/core';
import { ArquimentorService } from "../../../services/arquimentor.service";
import { ActivatedRoute } from '@angular/router';
import { Student } from "../../../model/student";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  userProfile: Student | undefined;
    isEditing = false;
  constructor(
    private profileService: ArquimentorService,
    private route: ActivatedRoute
  ) {}
  toggleEdit(): void {
    this.isEditing = true;
  }
  ngOnInit(): void {
    const studentId = this.route.snapshot.params['studentId'];

  }

  saveProfile(): void {
   this.isEditing = false;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}
