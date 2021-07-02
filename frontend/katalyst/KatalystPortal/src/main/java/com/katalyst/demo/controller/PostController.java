package com.katalyst.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.katalyst.demo.model.Post;
import com.katalyst.demo.service.PostService;

@CrossOrigin
@RestController
@RequestMapping("/api/PostService")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@PostMapping("/save")
	public ArrayList<Post> submitPost(@RequestBody Post post){
		ArrayList<Post> result = postService.submitPost(post);
		return result;
	}
	
	@GetMapping("/getPost")
	public ArrayList<Post> getAllPosts(){
		ArrayList<Post> result  = postService.getPosts();
		return result;
	}
	
	@DeleteMapping("/deletePost/{postid}")
	public ArrayList<Post> deletePost(@PathVariable("postid") Integer postid){
		System.out.println("deleted");
		return postService.deletePost(postid);
		
	}
	
	
}
