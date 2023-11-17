import {HttpClient, HttpResponse} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import{Student} from "../../model/student";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup | undefined;
  isRegister = false;
  private http: any;

  constructor(private formBuilder: FormBuilder,  http: HttpClient) {
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(5)]
    });
  }

  register(): void {
    if (this.registerForm && this.registerForm.valid) {
      const studentData= this.registerForm.value as Student;
      this.isRegister = true;

    }
  }

}
