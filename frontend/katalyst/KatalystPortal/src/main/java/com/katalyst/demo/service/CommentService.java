package com.katalyst.demo.service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.katalyst.demo.Repository.CommentRepository;
import com.katalyst.demo.model.Comment;

@Service
public class CommentService {
	
	@Autowired
	private CommentRepository commentRepo;
	
	public Comment saveComment(Comment comment) {
		return commentRepo.save(comment);
	}
	
	public ArrayList<Comment> getAllComments(UUID postid){
		return commentRepo.findAllByPostid(postid);
	}
}
