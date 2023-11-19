import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArquimentorService} from "../../services/arquimentor.service";
import {Publication} from "../../model/publication";
import {MatTableDataSource} from "@angular/material/table";
import {StudentService} from "../../services/student.service";
import {Student} from "../../model/student";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  publicationsA: Array<Publication> = [];
  id: number=0;
  student: Student | undefined;
  constructor(private router:Router,
              private arquimentorService: ArquimentorService,
              private studentService: StudentService,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
  addPost(): void {
    this.router.navigate(['/create-post']);
  }

  ngOnInit(): void {
    this.arquimentorService.getAll().subscribe((response: any) => {
      this.publicationsA = response;
      console.log(this.publicationsA)
    });
    this.studentService.getStudentByUserId(this.id).subscribe((response: any) => {
      this.student = response;
    });
  }

}
