import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent {
  id: number=0;
  constructor(private router:Router,
              private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
  shouldRun = true;

  navigateHome() {
    this.router.navigate(['home'],{ queryParams: { id: this.id } });
  }

  navigateSubscription() {
    this.router.navigate(['subscription'],{ queryParams: { id: this.id } });
  }

  navigateMentorProfile() {
    this.router.navigate([`mentor-profile/`+this.id],{ queryParams: { id: this.id } });
  }

  navigateStudentProfile() {
    this.router.navigate(['student-profile/'+this.id],{ queryParams: { id: this.id } });
  }
  navigateSetting() {
    this.router.navigate(['settings'],{ queryParams: { id: this.id } });
  }

  navigateLogin() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
