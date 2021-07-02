package com.katalyst.demo.model;

import java.sql.Timestamp;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="comments")
public class Comment {
	@Id
	private UUID commentId;
	
	private UUID postid;
	private UUID userid;
	
	private String comment;
	private Timestamp timestamp;
	
	public Comment() {}

	public Comment(UUID commentId, UUID postid, UUID userid, String coment, Timestamp timestamp) {
		super();
		this.commentId = commentId;
		this.postid = postid;
		this.userid = userid;
		this.comment = coment;
		this.timestamp = timestamp;
	}

	public UUID getCommentId() {
		return commentId;
	}

	public void setCommentId(UUID commentId) {
		this.commentId = commentId;
	}

	public UUID getPostid() {
		return postid;
	}

	public void setPostid(UUID postid) {
		this.postid = postid;
	}

	public UUID getUserid() {
		return userid;
	}

	public void setUserid(UUID userid) {
		this.userid = userid;
	}

	public String getComent() {
		return comment;
	}

	public void setComent(String coment) {
		this.comment = coment;
	}

	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
	
	
}