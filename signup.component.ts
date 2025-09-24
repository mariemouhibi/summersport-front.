import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router : Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.minLength(3), Validators.required]],
      lastName: ["" ,  [Validators.minLength(3), Validators.required]],
      email: ["" ,  [Validators.email, Validators.required]],
      password: ["",[Validators.minLength(3), Validators.required]],
      cPassword: [""],

    },
    {
      validators:MustMatch("password","confirmPwd")
    }
    )

  }
  signup() {
    console.log(this.signupForm.value);
  this.userService.Signup(this.signupForm.value).subscribe((data)=>{
    this.router.navigate(["login"]);
  }
  )
  }



}