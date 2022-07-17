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
import com.toubibnet.toubibnet.model.User;
import com.toubibnet.toubibnet.service.UserService;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping("/all")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> Users = userService.findAllUsers();
		return new ResponseEntity<>(Users, HttpStatus.OK);
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
		try {
			User User = userService.findUserById(id);
			return new ResponseEntity<>(User, HttpStatus.OK);
		}catch(UserNotFoundException e) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public ResponseEntity<User> addUser(@RequestBody User User) {
		System.out.println(User.toString());
		User newUser = userService.addUser(User);
		return new ResponseEntity<>(newUser, HttpStatus.CREATED);
	}

	@PutMapping("/update")
	public ResponseEntity<User> updateUser(@RequestBody User User) {
		User updateUser = userService.updateUser(User);
		return new ResponseEntity<>(updateUser, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
		userService.deleteUser(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}

