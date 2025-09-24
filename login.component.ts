import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup
  log:any={}
  isLoginFailed:boolean
  isLoggedIn:boolean
  roles:any=[];
  data:any
  constructor(private userService:UserService,
    private tokenStorage:TokenStorageService,
    private router:Router) { }

  ngOnInit() {
  }


  login(){
    console.log("here login", this.log);
    this.userService.login(this.log).subscribe ((data) => {
      this.tokenStorage.saveToken(data.accessToken);       
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['/']);
      
    })    

  }}

