package com.toubibnet.toubibnet.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.toubibnet.toubibnet.model.Doctor;
import com.toubibnet.toubibnet.model.JwtDoctorSignUpRequest;
import com.toubibnet.toubibnet.model.JwtSignInRequest;
import com.toubibnet.toubibnet.model.JwtUserSignUpRequest;
import com.toubibnet.toubibnet.model.Role;
import com.toubibnet.toubibnet.model.User;
import com.toubibnet.toubibnet.repository.DoctorRepo;
import com.toubibnet.toubibnet.repository.RoleRepo;
import com.toubibnet.toubibnet.repository.UserRepo;
@Service
public class AuthenticationService {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepo userRepository;
	
	@Autowired
	private DoctorRepo doctorRepository;
	
	private RoleRepo roleRepository;
	
	private Role adminRole;
	private Role doctorRole;
	private Role userRole;

	@Autowired
	public AuthenticationService(RoleRepo roleRepository) {
		this.roleRepository=roleRepository;
		adminRole=roleRepository.findByName(Role.ADMIN);
		doctorRole=roleRepository.findByName(Role.DOCTOR);
		userRole=roleRepository.findByName(Role.USER);

	}

	public void authenticate(JwtSignInRequest authRequest) throws Exception {
		Objects.requireNonNull(authRequest.getEmail());
		Objects.requireNonNull(authRequest.getPassword());

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(),authRequest.getPassword()));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	public void signUpUser(JwtUserSignUpRequest signUpRequest) {
		User user = new User();
		user.setEmail(signUpRequest.getEmail());
		user.setFirstName(signUpRequest.getFirstName());
		user.setLastName(signUpRequest.getLastName());
		user.setPhoneNumber(signUpRequest.getPhoneNumber());
		user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
		user.getRoles().add(userRole);
		userRepository.save(user);
	}
	public void signUpDoctor(JwtDoctorSignUpRequest signUpRequest) {
		Doctor doctor = new Doctor();
		doctor.setEmail(signUpRequest.getEmail());
		doctor.setFirstName(signUpRequest.getFirstName());
		doctor.setLastName(signUpRequest.getLastName());
		doctor.setPhoneNumber(signUpRequest.getPhoneNumber());
		doctor.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
		
		doctor.setDescription(signUpRequest.getDescription());
		doctor.setAddress(signUpRequest.getAddress());
		doctor.setGovernotate(signUpRequest.getGovernorate());
		doctor.setSpeciality(signUpRequest.getSpeciality());
		doctor.getRoles().add(userRole);
		doctor.getRoles().add(doctorRole);
		doctorRepository.save(doctor);
	}


}
