import {Component, OnInit} from '@angular/core';
import {SingUp} from "../../model/sing-up";
import {CreateAccountService} from "../../services/create-account.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {StudentService} from "../../services/student.service";
import {Student} from "../../model/student";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  singUpM :SingUp ;
  student: Student;
  dataSource: MatTableDataSource<any>;
  constructor(
    private createAccountService: CreateAccountService,
    private router: Router,
    private studentService: StudentService,
  ) {
    this.student = {} as Student;
    this.singUpM = {} as SingUp;
    this.dataSource = new MatTableDataSource<any>();
  }
  ngOnInit(): void {
    this.singUpM.roles= ["ROLE_USER"];
  }

  registerAccount(): void {
    this.singUpM.id = 0;
    this.student.firstName=this.singUpM.username;
    this.student.password=this.singUpM.password;
    this.student.email="..@gmail.com";
    this.student.lastname="~";
    this.createAccountService.singUp(this.singUpM).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        this.dataSource.data = this.dataSource.data.map((p: SingUp) => {
          console.log(p);
          alert("user created")
          this.studentService.create(this.student).subscribe();
          this.router.navigate(['/']);
          return p;
        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
