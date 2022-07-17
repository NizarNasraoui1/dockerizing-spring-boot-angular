import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../shared/models/Doctor';
import {ESpeciality} from '../../shared/models/enum/ESpecialty';
import{ EGovernorate}from '../../shared/models/enum/EGovernorate';
import { SignUpDoctorService } from '../sign-up-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-doctor',
  templateUrl: './sign-up-doctor.component.html',
  styleUrls: ['./sign-up-doctor.component.css']
})
export class SignUpDoctorComponent implements OnInit {
    listSpecialities:String[]=[];
    listGovernorates:String[]=[];
    doctorInfo:Doctor ={
      id:0,
      firstName:"",
      lastName:"",
      phoneNumber:"",
      email:"",
      password:"",
      roles:[],
      speciality:ESpeciality.Cardiologue,
      governorate:EGovernorate.Ariana,
      description:"",
      address:"",
    }

  constructor(private signUpDoctorService:SignUpDoctorService,private router:Router) {
    for (let log in ESpeciality) {
      if (isNaN(Number(log))) {
         this.listSpecialities.push(log);
     }
    }
     for (let log in EGovernorate) {
      if (isNaN(Number(log))) {
         this.listGovernorates.push(log);
     }
    }
    console.log(this.listGovernorates)
  }

  ngOnInit() {
  }
  signUp(){
    console.log(this.doctorInfo);
    this.signUpDoctorService.signUp(this.doctorInfo).subscribe(()=>{
      this.router.navigate(["client/login"])
      
    },
    (error) =>console.log(error)
    );
  }
}

