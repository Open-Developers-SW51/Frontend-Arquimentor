import {Component, OnInit} from '@angular/core';
import {SingIn} from "../../model/sing-in";
import {CreateAccountService} from "../../services/create-account.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  singIn: SingIn;
  dataSource: MatTableDataSource<any>;
  constructor(
    private createAccountService: CreateAccountService,
    private router: Router
  ) {
    this.singIn = {} as SingIn;
    this.dataSource = new MatTableDataSource<any>();
  }
  ngOnInit(): void {

  }

  singInAccount() {
    this.createAccountService.singIn(this.singIn).subscribe(
      (response: any) => {
        this.dataSource.data.push({...response});
        console.log(this.dataSource)
        this.dataSource.data = this.dataSource.data.map((p: SingIn) => {
          console.log(p);
          console.log("token: "+p.token);
          localStorage.setItem('token', p.token);
          alert("login iniciado")
          this.router.navigate(['home']);
          return p;
        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        alert("username or password incorrect")
      }
    );
  }
}
