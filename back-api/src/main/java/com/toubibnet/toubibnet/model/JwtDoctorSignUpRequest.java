package com.toubibnet.toubibnet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class JwtDoctorSignUpRequest extends JwtUserSignUpRequest {
	private Speciality speciality;
	private Governorate governorate;
	private String description;
	private String address;
	

}
