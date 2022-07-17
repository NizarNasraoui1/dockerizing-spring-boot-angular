package com.toubibnet.toubibnet.service;

import com.toubibnet.toubibnet.model.Doctor;
import com.toubibnet.toubibnet.model.User;
import com.toubibnet.toubibnet.repository.AppointementRepo;
import com.toubibnet.toubibnet.repository.DoctorRepo;
import com.toubibnet.toubibnet.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.toubibnet.toubibnet.model.Appointment;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AppointmentService {
    @Autowired
    AppointementRepo appointementRepo;
    @Autowired
    DoctorRepo doctorRepo;
    @Autowired
    UserRepo userRepo;

    public Appointment addAppointment (Appointment appointment){
        User user=appointment.getUser();
        Doctor doctor=appointment.getDoctor();
        Appointment newAppointment =this.appointementRepo.save(appointment);
        return null;
    }
    public List<Appointment>getTakenAppointments(Long doctorId){
        List<Appointment>appointments=this.appointementRepo.getFutureAppointmentsByDoctorId(doctorId);
        return appointments;
    }
    public List<LocalDateTime>getAvailableAppointments(Long doctorId,Integer day,Integer month,Integer year){
        List<Appointment>takenAppointments=new ArrayList<>();
        List<LocalDateTime>availableAppointments=new ArrayList<>();
        takenAppointments=this.getTakenAppointments(doctorId);
        Integer hour=8;
        while(hour<18){
            if(hour!=12 && hour!=13){
                availableAppointments.add(LocalDate.of(year,month,day).atTime(hour,0));
                availableAppointments.add(LocalDate.of(year,month,day).atTime(hour,30));

            }

            hour++;
        }
        takenAppointments.forEach((appointment -> {
            LocalDateTime date=appointment.getDate();
            if(availableAppointments.contains(date)){
                availableAppointments.remove(date);
            }
        }));


        return availableAppointments;
    }


    public List<Appointment> getAllFutureAppointments(Long doctorId) {
        return this.appointementRepo.getFutureAppointmentsByDoctorId(doctorId);
    }
    public List<Appointment> getAllAppointmentsHistory(Long doctorId) {
        List<Appointment>appointments=this.appointementRepo.findAllByDoctorIdOrderByDateDesc(doctorId);
        return this.appointementRepo.findAllByDoctorIdOrderByDateDesc(doctorId);
    }


}
