import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';
import { Doctor } from '../../shared/models/Doctor';
import { EGovernorate } from '../../shared/models/enum/EGovernorate';
import { ESpeciality } from '../../shared/models/enum/ESpecialty';
import { User } from '../../shared/models/User';
import { UpdateUserService } from '../update-user.service';

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.css'],
})
export class CheckAccountComponent implements OnInit {
  doctor: Doctor | null = null;
  user: User | null = null;
  isDoctor: boolean;
  updateOn: boolean;

  specialities: Array<String> = [];
  governorates: Array<String> = [];
  selectedSpecialty: String = '';
  selectedGovernorate: String = '';

  userFormGroup:FormGroup;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private updateUserService:UpdateUserService,
    private routingService: RoutingService
  ) {
    this.isDoctor = this.tokenService.isDoctor();
    if(this.isDoctor){
      this.doctor = JSON.parse(localStorage.getItem("user")!);
      this.userFormGroup = new FormGroup({
        'name': new FormControl(this.doctor?.firstName, [Validators.required]),
        'familyName': new FormControl(this.doctor?.lastName, [Validators.required]),
        "phoneNumber": new FormControl(this.doctor?.phoneNumber, [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(8), Validators.maxLength(8)]),
        "password": new FormControl("",[Validators.required]),
        "retypedPassword": new FormControl("",[Validators.required]),
        "governorate": new FormControl(this.doctor?.governorate,[Validators.required]),
        "speciality": new FormControl(this.doctor?.speciality,[Validators.required]),
        "address": new FormControl(this.doctor?.address,[Validators.required]),
        "description": new FormControl(this.doctor?.description,[Validators.required]),
      });
    }else{
      this.user = this.tokenService.getUser();
      this.userFormGroup = new FormGroup({
        'name': new FormControl(this.user?.firstName, [Validators.required]),
        'familyName': new FormControl(this.user?.lastName, [Validators.required]),
        "phoneNumber": new FormControl(this.user?.phoneNumber, [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(8), Validators.maxLength(8)]),
        "password": new FormControl("",[Validators.required]),
        "retypedPassword": new FormControl("",[Validators.required]),
      });
    }
    this.updateOn = false;
    this.tokenService.redirectIfNotSignedIn();
    this.routingService.setCommunActiveRouteTo('Profile');
  }

  goToUpdate() {
    document.getElementById('profileContainer')!.style.transition = '0.5s';
    document.getElementById('profileContainer')!.style.marginTop = '-100%';
    setTimeout(() => {
      this.updateOn = true;
      setTimeout(() => {
        document.getElementById('updateContainer')!.style.transition = '0.5s';
        document.getElementById('updateContainer')!.style.marginTop = '0';
      }, 100);
    }, 500);
  }
  disconnect(){
    this.tokenService.signOut();
  }
  goToHistory(){
    this.router.navigate(["/appointment/history/"+1])
  }
  goToFuture(){
    this.router.navigate(["/appointment/future/"+1])
  }
  goToProfile(){
    document.getElementById('updateContainer')!.style.marginTop = '-100%';
    setTimeout(() => {
      this.updateOn = false;
      setTimeout(() => {
        document.getElementById('profileContainer')!.style.marginTop = '0';
      }, 100);
    }, 500);
  }
  ngOnInit(): void {
    //animating
    setTimeout(() => {
      document.getElementById('profileContainer')!.style.marginTop = '0';
      document.getElementById('topDivider')!.style.top = '0';
      document.getElementById('bottomDivider')!.style.bottom = '0';
    }, 100);
    this.specialities = this.specialities.concat(
      Object.entries(ESpeciality)
        .filter((e) => !isNaN(e[0] as any))
        .map((e) => e[1].toString())
    );
    this.selectedSpecialty = this.specialities[0];
    this.governorates = this.governorates.concat(
      Object.entries(EGovernorate).map((e) => e[1].toString())
    );
    this.selectedGovernorate = this.governorates[0];
  }
  onSubmit(){
    this.userFormGroup.markAsTouched();
    if(this.userFormGroup.valid && this.userFormGroup.controls["password"].value==this.userFormGroup.controls["retypedPassword"].value){
      if(!this.isDoctor){
        this.copyNewUser();
        this.updateUserService.updateUser(this.user!).subscribe((user)=>console.log("user updated"+user));
      }else{
        this.copyNewDoctor();
        this.updateUserService.updateDoctor(this.doctor!).subscribe((doctor)=>console.log("user updated"+doctor));
      }
      this.goToProfile();
    }
  }
  copyNewUser(){
    this.user!.firstName = this.userFormGroup.controls["name"].value;
    this.user!.lastName = this.userFormGroup.controls["familyName"].value;
    this.user!.phoneNumber = this.userFormGroup.controls["phoneNumber"].value;
    this.user!.password = this.userFormGroup.controls["password"].value;
  }
  copyNewDoctor(){
    this.doctor!.firstName = this.userFormGroup.controls["name"].value;
    this.doctor!.lastName = this.userFormGroup.controls["familyName"].value;
    this.doctor!.phoneNumber = this.userFormGroup.controls["phoneNumber"].value;
    this.doctor!.password = this.userFormGroup.controls["password"].value;
    this.doctor!.address = this.userFormGroup.controls["address"].value;
    this.doctor!.speciality = this.userFormGroup.controls["speciality"].value;
    this.doctor!.description = this.userFormGroup.controls["description"].value;
    this.doctor!.governorate = this.userFormGroup.controls["governorate"].value;
  }
}
