package com.toubibnet.toubibnet.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtUserSignUpRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;
	
    private String firstName;
    private String lastName;
    private String email;
    private Integer phoneNumber;
    private String password;
	
}