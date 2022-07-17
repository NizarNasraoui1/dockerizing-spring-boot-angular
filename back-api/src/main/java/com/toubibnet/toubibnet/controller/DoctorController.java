package com.toubibnet.toubibnet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.toubibnet.toubibnet.exception.UserNotFoundException;
import com.toubibnet.toubibnet.model.Doctor;
import com.toubibnet.toubibnet.model.User;
import com.toubibnet.toubibnet.service.DoctorService;

@CrossOrigin
@RestController
@RequestMapping("/doctor")
public class DoctorController {
	@Autowired
	DoctorService doctorService;
	@GetMapping("/all")
	public ResponseEntity<List<Doctor>> getAllDoctors() {
		List<Doctor> Doctors = doctorService.findAllDoctors();
		return new ResponseEntity<>(Doctors, HttpStatus.OK);
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Doctor> getDoctorById(@PathVariable("id") Long id) {
		try {
			Doctor Doctor = doctorService.findDoctorById(id);
			return new ResponseEntity<>(Doctor, HttpStatus.OK);
		}catch(UserNotFoundException e) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor Doctor) {
		System.out.println(Doctor.toString());
		Doctor newDoctor = doctorService.addDoctor(Doctor);
		return new ResponseEntity<>(newDoctor, HttpStatus.CREATED);
	}

	@PutMapping("/update")
	public ResponseEntity<Doctor> updateDoctor(@RequestBody Doctor Doctor) {
		Doctor updateDoctor = doctorService.updateDoctor(Doctor);
		return new ResponseEntity<>(updateDoctor, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteDoctor(@PathVariable("id") Long id) {
		doctorService.deleteDoctor(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
