package com.katalyst.demo.controller;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.katalyst.demo.model.User;
import com.katalyst.demo.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/userService")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/save")
	public User saveuserData(@RequestBody User user) {	
		
		return userService.saveUser(user);
		
	}
	
	@GetMapping("/getAllUsers")
	public ArrayList<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	
	@GetMapping("/getUser/{userid}")
	public User getUserData(@PathVariable("userid") String userid) {
		User user = userService.getUserData(userid);
		System.out.println(user.toString());
		return user;
	}

}
