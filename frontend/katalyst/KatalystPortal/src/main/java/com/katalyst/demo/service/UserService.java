package com.katalyst.demo.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.katalyst.demo.Repository.UserRepository;
import com.katalyst.demo.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public User saveUser(User user) {
//		user.setUserid(UUID.randomUUID());
		user.setActivitystatus(true);
		
		Date date= new Date();
		long time = date.getTime();
		Timestamp timestamp = new Timestamp(time);
		user.setJoindate(timestamp);
		
		return userRepo.save(user);
	}
	
	public ArrayList<User> getAllUsers(){
		return (ArrayList<User>) userRepo.findAll();
	}
	
	public User getUserData(String userid) {
		return userRepo.findAllByuserid(userid);
	}

}
