import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SingUp} from "../../model/sing-up";
import {CreateAccountService} from "../../services/create-account.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  //registerForm: FormGroup | undefined;
  singUpM :SingUp ;
  dataSource: MatTableDataSource<any>;
  private http: any;
  constructor(
    private createAccountService: CreateAccountService,
    private router: Router
  ) {
    this.singUpM = {} as SingUp;
    this.dataSource = new MatTableDataSource<any>();
  }
  ngOnInit(): void {
    this.singUpM.roles= ["ROLE_USER"];
  }

  registerAccount(/*form: NgForm*/): void {
    this.singUpM.id = 0;
    this.createAccountService.singUp(this.singUpM).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        console.log(this.dataSource)
        this.dataSource.data = this.dataSource.data.map((p: SingUp) => {
          console.log(p);
          alert("user created")
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
