import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/User';
import { SignUpService } from '../signUp.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {
  userInfo:User ={
    id:0,
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    password:"",
    roles:[],
  }
  constructor( private signUpService : SignUpService,
    private router:Router) { }

  ngOnInit() {
  }
  signUp(){
    this.signUpService.signUpUser(this.userInfo).subscribe(()=>{
      this.router.navigate(["client/login"])
    },
    (error) =>console.log(error)
    );
  }
}
