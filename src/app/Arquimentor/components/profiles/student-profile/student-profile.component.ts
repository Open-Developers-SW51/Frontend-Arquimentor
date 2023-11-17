import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudentProfile} from "../../../model/student-profile";
import {StudentProfileService} from "../../../services/student-profile.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
    userProfile: StudentProfile | undefined;
    isEditing = false;
    dataSource: MatTableDataSource<any>;
    idRouter:Number | undefined;
  constructor(
    private studentProfileService: StudentProfileService,
    public route: ActivatedRoute

  ) {
    this.dataSource = new MatTableDataSource<any>();
  }
  toggleEdit(): void {
    this.isEditing = true;
  }
  ngOnInit(): void {
    const studentProfileId = this.route.snapshot.params['studentProfileId'];
    this.getStudentProfileId(studentProfileId);
    this.idRouter=studentProfileId;
  }

  saveProfile(): void {
   this.isEditing = false;
      this.studentProfileService.update(this.userProfile?.id,this.userProfile).subscribe(
        (response: any) => {
          this.dataSource.data.push({...response});
          console.log(this.dataSource)
          this.dataSource.data = this.dataSource.data.map((sp: StudentProfile) => {
            console.log(sp);
            alert("profile editado")
            //this.router.navigate(['/']);
            return sp;
          });
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

  cancelEdit(): void {
    this.isEditing = false;
    // @ts-ignore
    this.studentProfileService.getStudentProfileId(this.idRouter).subscribe((response: any) => {
      this.userProfile = response;
    });
  }

  private getStudentProfileId(studentProfileId: number) {
    this.studentProfileService.getStudentProfileId(studentProfileId).subscribe((response: any) => {
      this.userProfile = response;
      console.log(this.userProfile);
    });
  }


}
