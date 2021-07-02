package com.katalyst.demo.model;


import java.sql.Timestamp;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Post {
	@Id
	private int postId; //UUID universal unique identifier
	//info of user posting the pic
	private int userId;
	private String username;
	private String imageurl;
	
	//post info
	private String description;
	private String postimgurl;
	private int likecount;
	private Timestamp datetime;
	
	public Post() {
		
	}

	public Post(int postId, int userId, String username, String imageurl, String description, String postimgurl,
			int likecount, Timestamp datetime) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.username = username;
		this.imageurl = imageurl;
		this.description = description;
		this.postimgurl = postimgurl;
		this.likecount = likecount;
		this.datetime = datetime;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPostimgurl() {
		return postimgurl;
	}

	public void setPostimgurl(String postimgurl) {
		this.postimgurl = postimgurl;
	}

	public int getLikecount() {
		return likecount;
	}

	public void setLikecount(int likecount) {
		this.likecount = likecount;
	}

	public Timestamp getDatetime() {
		return datetime;
	}

	public void setDatetime(Timestamp datetime) {
		this.datetime = datetime;
	}

	@Override
	public String toString() {
		return "Post [postId=" + postId + ", userId=" + userId + ", username=" + username + ", imageurl=" + imageurl
				+ ", description=" + description + ", postimgurl=" + postimgurl + ", likecount=" + likecount
				+ ", datetime=" + datetime + "]";
	}
	
	
	

}
