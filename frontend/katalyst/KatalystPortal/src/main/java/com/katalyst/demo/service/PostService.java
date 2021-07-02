package com.katalyst.demo.service;



import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.katalyst.demo.Repository.PostRepository;
import com.katalyst.demo.model.Post;

@Service
public class PostService {
	
	@Autowired
	private PostRepository postrepo;
	
	public ArrayList<Post> submitPost(Post post){
		Date date = new Date();
		long time = date.getTime();
		Timestamp datetime = new Timestamp(time);
		int min=10,max=10000;
		post.setPostId((int)(Math.random()*(max-min))+min);
	
		post.setLikecount(0);
		post.setDatetime(datetime);
		postrepo.save(post);
		return getPosts();
	}
	
	
	public ArrayList<Post> getPosts(){
		return (ArrayList<Post>) postrepo.findAll();
	}
	
	public ArrayList<Post> deletePost(Integer postid){
		postrepo.deleteById(postid);
		return getPosts();
	}

}
