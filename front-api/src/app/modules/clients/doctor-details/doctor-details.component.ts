import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../../shared/models/Doctor';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  @Input() doctor!:Doctor;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getName():String{
    return "Dr. "+this.doctor.firstName+" "+this.doctor.lastName;
  }
  getAppointement():void{
    this.router.navigate(["appointment/list/"+this.doctor.id])
  }
}
