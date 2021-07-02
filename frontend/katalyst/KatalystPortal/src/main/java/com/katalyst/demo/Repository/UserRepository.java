package com.katalyst.demo.Repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.katalyst.demo.model.User;

@Repository
public interface UserRepository extends CrudRepository<User,String>{
	
	User findAllByuserid(String userid);

}
