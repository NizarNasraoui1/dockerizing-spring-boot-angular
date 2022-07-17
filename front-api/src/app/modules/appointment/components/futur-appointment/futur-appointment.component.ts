import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from './../../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/modules/shared/models/Doctor';
import Appointment from '../../models/Appointment';

@Component({
  selector: 'app-futur-appointment',
  templateUrl: './futur-appointment.component.html',
  styleUrls: ['./futur-appointment.component.css']
})
export class FuturAppointmentComponent implements OnInit {

  doctor!:Doctor;
  appointments!:Appointment[];
  constructor(private appointmentService:AppointmentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      let doctorId=params['id'];
      this.getAppointments(doctorId);
    })
  }
  
  getAppointments(id:number){
    this.appointmentService.getFutureAppointments(id).subscribe((appointments:Appointment[])=>{
      this.appointments=appointments;
      console.log(appointments)
    })
  }
  formatDate(date:Date):string{
    date=new Date(date);
    let displayedDate=date.getDate().toString();
    displayedDate=`${displayedDate}/${date.getMonth()+1}/${date.getFullYear()} ${this.appointmentService.formatDate(date)}`;

    
    return displayedDate;
  }

}
