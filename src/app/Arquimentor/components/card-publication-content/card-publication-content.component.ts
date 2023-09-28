import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-card-publication-content',
  templateUrl: './card-publication-content.component.html',
  styleUrls: ['./card-publication-content.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
})
export class CardPublicationContentComponent {

}
