import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentProfileService} from "../../../user/services/student-profile.service";
import {StudentProfile} from "../../../user/model/student-profile";
@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent {
  id: number=0;
  studentProfile: StudentProfile | undefined
  constructor(private router:Router,
              private route: ActivatedRoute,
              private studentProfileService: StudentProfileService
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);


  }
  shouldRun = true;

  navigateHome() {
    this.studentProfileService.getStudentProfileId(Number(this.id)).subscribe( (data: any) => {
      console.log(data);
      if (data != null) {
        this.studentProfile = data;
      }
    });
    this.router.navigate(['home'],{ queryParams: { id: this.id } });
  }

  navigateSubscription() {
    this.studentProfileService.getStudentProfileId(Number(this.id)).subscribe( (data: any) => {
      console.log(data);
      if (data != null) {
        this.studentProfile = data;
      }
    });
    this.router.navigate(['subscription'],{ queryParams: { id: this.id } });
  }

  navigateMentorProfile() {
    this.studentProfileService.getStudentProfileId(Number(this.id)).subscribe( (data: any) => {
      console.log(data);
      if (data != null) {
        this.studentProfile = data;
      }
    });
    this.router.navigate([`mentor-profile/`+this.id],{ queryParams: { id: this.id } });
  }

  navigateStudentProfile() {
    this.studentProfileService.getStudentProfileId(Number(this.id)).subscribe( (data: any) => {
      console.log(data);
      if (data != null) {
        this.studentProfile = data;
      }
    });
    this.router.navigate(['student-profile/'+this.id],{ queryParams: { id: this.id } });
  }
  navigateSetting() {
    this.studentProfileService.getStudentProfileId(Number(this.id)).subscribe( (data: any) => {
      console.log(data);
      if (data != null) {
        this.studentProfile = data;
      }
    });
    this.router.navigate(['settings'],{ queryParams: { id: this.id } });
  }

  showNotifications(){

  }

  navigateLogin() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
