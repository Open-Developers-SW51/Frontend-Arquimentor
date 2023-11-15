import {Component, Input} from '@angular/core';
import {Publication} from "../../model/publication";

@Component({
  selector: 'app-card-publication-content',
  templateUrl: './card-publication-content.component.html',
  styleUrls: ['./card-publication-content.component.css']
})
export class CardPublicationContentComponent {
  @Input() publications: Array<Publication>=[];
}
