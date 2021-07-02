package com.katalyst.demo.controller;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.katalyst.demo.model.Comment;
import com.katalyst.demo.service.CommentService;

@CrossOrigin
@RestController
@RequestMapping("/api/comment")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@PostMapping("/save")
	public Comment SaveComment(@RequestBody Comment comment) {
		Date date = new Date();
		long time = date.getTime();
		Timestamp timestamp = new Timestamp(time);
		
		comment.setTimestamp(timestamp);
		comment.setCommentId(UUID.randomUUID());
		return commentService.saveComment(comment);
		
	}
	
	@GetMapping("/getComments/{postid}")
	public ArrayList<Comment> getAllComments(@PathVariable("postid") UUID postid){
		return commentService.getAllComments(postid);
	}

}
