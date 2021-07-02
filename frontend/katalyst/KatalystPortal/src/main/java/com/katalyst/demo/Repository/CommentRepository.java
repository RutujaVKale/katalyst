package com.katalyst.demo.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.katalyst.demo.model.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment,UUID>{
	
	
	ArrayList<Comment> findAllByPostid(UUID postid);
}
