package com.toubibnet.toubibnet.model;

import java.io.Serializable;

import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	@Getter
	private final String jwttoken;
	@Getter
	private final UserDetails user;


}