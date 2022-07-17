import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/modules/shared/models/Doctor';
import Appointment from '../../models/Appointment';
import { AppointmentService } from '../../services/appointment.service';
import {ConfirmationService} from 'primeng-lts/api';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  doctorId!:number;
  doctor!:Doctor;
  date!:Date;
  invalidDates: Array<Date>=[];
  availableDates: Date[]=[];
  selectedTime!:Date;
  msgs: any[] = [];
  position!: string;
  viewDates:boolean=false;
  
  constructor(private appointmentService:AppointmentService,private route:ActivatedRoute,
    private confirmationService: ConfirmationService, ) { }

  ngOnInit(): void {
    for(let i=0;i<30;i++){
      let invalidDate = new Date();
      invalidDate.setDate(new Date().getDate() - i-1)
      this.invalidDates.push(invalidDate);
    }
    this.route.params.subscribe((params)=>{
      console.log(params)
      let id=params['id'];
      this.doctorId=id;
      this.getDoctor(id);
    })
  }
  getDoctor(id:number){
    this.appointmentService.getDoctor(id).subscribe((response:Doctor)=>{
      this.doctor=response;
      console.log(this.doctor)
    })
  }
  formatDate(date:Date):string{
    date=new Date(date);
    let hour=date.getHours().toString();
    if(hour[0]=='8' || hour[0]=='9') hour="0"+hour;
    let minute=date.getMinutes().toString();
    if(minute=='0') minute='00';
    let formatedDate=`${hour}:${minute}`;
    return formatedDate;
  }
  onDateSelected(){
    if(this.date){
      this.availableDates=[];
    let day=this.date.getDate();
    let month=this.date.getMonth()+1;
    let year=this.date.getFullYear();
    this.appointmentService.getAvailableAppointments(this.doctorId,day,month,year).subscribe((response:Date[])=>{
      this.availableDates=response;
      this.viewDates=true;
    });
    }
  }
  onHourSelected(date:Date){
    this.selectedTime=date;
  }
  addAppointment(){
    let date=this.selectedTime;
    let user:any={
      id: 1

    };
    let appointment=new Appointment(date,user,this.doctor);
    console.log(appointment)
    this.appointmentService.addAppointment(appointment).subscribe((response)=>{
      console.log(response);
    })
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Etes vous sur de prendre le rendez vous?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          console.log("accepted");
            this.msgs = [{severity:'info', summary:'Succèes', detail:'Rendez-vous ajouté!'}];
            this.addAppointment();
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Echec', detail:'Rendez vous non ajouté!'}];
            console.log("rejected");
        }
    });
}
  
}

  

