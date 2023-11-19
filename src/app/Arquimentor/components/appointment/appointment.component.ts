import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  showOverlay = false;
  id: number=0;
  idPublication: string="degg";

  constructor(private route: ActivatedRoute,private router: Router) {
    // Obtén el parámetro de consulta 'currentUrl'
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.route.queryParams.subscribe(params => {
      this.idPublication = params['idPublication'];
    });
  }
  openOverlay() {
    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  back() {
    console.log(this.idPublication);
    this.router.navigate(["publication/"+this.idPublication],{ queryParams: { id: this.id } });
  }
}
