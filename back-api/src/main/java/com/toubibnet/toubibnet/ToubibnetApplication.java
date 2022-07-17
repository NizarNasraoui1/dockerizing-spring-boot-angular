package com.toubibnet.toubibnet;

import com.toubibnet.toubibnet.model.Appointment;
import com.toubibnet.toubibnet.model.Doctor;
import com.toubibnet.toubibnet.model.User;
import com.toubibnet.toubibnet.repository.AppointementRepo;
import com.toubibnet.toubibnet.repository.DoctorRepo;
import com.toubibnet.toubibnet.repository.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalDateTime;

@SpringBootApplication
public class ToubibnetApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToubibnetApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserRepo userRepo, DoctorRepo doctorRepo
			, AppointementRepo appointementRepo) {
		return args -> {
//			LocalDateTime date= LocalDate.now().atTime(9,30);
//			Appointment appointment=new Appointment();
//			appointment.setDate(date);
//			Doctor doctor=new Doctor();
//			appointment.setDoctor(doctor);
//			doctor.getAppointmentList().add(appointment);
//			doctorRepo.save(doctor);
//			User user=new User();
//			userRepo.save(user);

		};
	}
}
