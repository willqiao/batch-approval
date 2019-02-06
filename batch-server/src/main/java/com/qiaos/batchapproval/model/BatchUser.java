package com.qiaos.batchapproval.model;

import java.util.Base64;
import java.util.Base64.Encoder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class BatchUser {
//	public static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	public static final Encoder encoder = Base64.getEncoder();
	public BatchUser() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BatchUser(String username, String userpwd, String roles) {
		super();
		this.username = username;
		this.userpwd = userpwd;
		this.roles = roles;
		
		this.encryptpwd = new String(encoder.encode(userpwd.getBytes()));
	}
	@Id
	@GeneratedValue
	private int userid;
	private String username;
	@Transient
	private String userpwd;
	
	private String encryptpwd;
	private String roles;
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserpwd() {
		return userpwd;
	}
	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}
	public String getEncryptpwd() {
		return encryptpwd;
	}
	public void setEncryptpwd(String encryptpwd) {
		this.encryptpwd = encryptpwd;
	}
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
	
	public boolean matchPwd(String rawpwd) {
		return new String(encoder.encode(rawpwd.getBytes())).equals(encryptpwd);
	}
	

}
