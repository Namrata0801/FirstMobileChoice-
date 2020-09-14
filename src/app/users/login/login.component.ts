import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({

    // email: new FormControl('',[
    //   Validators.required,
    //   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  })
  get email() {
    return this.loginForm.get('email')

  }
  get password() {
    return this.loginForm.get('password')

  }

  constructor(private router : Router) { }

  ngOnInit(): void {
     

  }
  onSubmit(value) {
    console.log(value);
    console.log("succesfully");
    alert("LogIn successfully");
    this.router.navigate(['/main']);
  }
}

