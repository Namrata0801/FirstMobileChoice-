import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/service/user.service";
import { Router } from "@angular/router";


/** 
 * 
 * @param form
*/

function passwordMatchValidator(form) {
  const password = form.get('password')
  const confirmpassword = form.get('confirmpassword')

  if (password.value !== confirmpassword.value) {
    confirmpassword.setErrors({ passwordsMatch: true })
  } else {
    confirmpassword.setErrors(null)
  }
  return null
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  // getValues(value)
  // {
  //  console.log(JSON.stringify(value))
  //  console.log(value)

  // }
  registerForm: FormGroup

  constructor(private userservice: UserService, private router: Router) { }
  
  register() {
    console.log(this.registerForm.value)
    this.userservice.addUser(this.registerForm.value).subscribe((res) => {
      console.log("data added ", res) 
      alert("Registerd succesfully");
        this.router.navigate(['/login']);
      })

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileno: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('')

    },
      {
        validators: passwordMatchValidator

      })
  }
 





}