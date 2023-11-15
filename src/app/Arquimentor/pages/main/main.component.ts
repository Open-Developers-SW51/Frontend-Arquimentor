import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArquimentorService} from "../../services/arquimentor.service";
import {Publication} from "../../model/publication";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  publicationsA: Array<Publication> = [];

  constructor(private router:Router, private arquimentorService: ArquimentorService) {
  }
  addPost(): void {
    this.router.navigate(['/create-post']);
  }

  ngOnInit(): void {
    this.arquimentorService.getAll().subscribe((response: any) => {
      this.publicationsA = response;
      console.log(this.publicationsA)
    });

  }

}
