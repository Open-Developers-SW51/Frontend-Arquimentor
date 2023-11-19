import {Component, Input, OnInit} from '@angular/core';
import {Publication} from "../../model/publication";
import {Router} from "@angular/router";


@Component({
  selector: 'app-card-publication-content',
  templateUrl: './card-publication-content.component.html',
  styleUrls: ['./card-publication-content.component.css']
})
export class CardPublicationContentComponent implements OnInit{
  @Input() publications: Array<Publication>=[];

  constructor(private router:Router) {
  }

  ngOnInit(): void {

  }

  SeeIdPublication(id:number) {
    console.log(id)
    this.router.navigate([`/publication/`+id]);
  }




}
