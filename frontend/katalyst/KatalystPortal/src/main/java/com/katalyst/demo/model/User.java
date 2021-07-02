package com.katalyst.demo.model;

import java.sql.Timestamp;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User {
	
	@Id
	private String userid;
	private String username;
	private String userimageurl;	
	private boolean activitystatus;
	private Timestamp joindate;
	
	public User() {
		
	}

	public User(String userid, String username, String userimageurl, boolean activitystatus, Timestamp joindate) {
		super();
		this.userid = userid;
		this.username = username;
		this.userimageurl = userimageurl;
		this.activitystatus = activitystatus;
		this.joindate = joindate;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserimageurl() {
		return userimageurl;
	}

	public void setUserimageurl(String userimageurl) {
		this.userimageurl = userimageurl;
	}

	public boolean isActivitystatus() {
		return activitystatus;
	}

	public void setActivitystatus(boolean activitystatus) {
		this.activitystatus = activitystatus;
	}

	public Timestamp getJoindate() {
		return joindate;
	}

	public void setJoindate(Timestamp joindate) {
		this.joindate = joindate;
	}
	
	@Override
	public String toString() {
		return "User [userid=" + userid + ", username=" + username + ", userimageurl=" + userimageurl
				+ ", activitystatus=" + activitystatus + ", joindate=" + joindate + "]";
	}
	
	
	

}
