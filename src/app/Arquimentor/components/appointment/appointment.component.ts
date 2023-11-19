import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  showOverlay = false;
  currentUrl: string | undefined;

  constructor(private route: ActivatedRoute,private router2: Router) {
    // Obtén el parámetro de consulta 'currentUrl'
    this.route.queryParams.subscribe(params => {
      this.currentUrl = params['currentUrl'];
    });
  }
  openOverlay() {
    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  back() {
    this.router2.navigate([this.currentUrl]);
  }
}
