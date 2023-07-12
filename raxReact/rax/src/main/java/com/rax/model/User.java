package com.rax.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	@NotNull
	@Column(length=50)
	private String name;
	
	@NotNull
	@Column(length=20)
	private String rollNo;
	
	@NotNull
	@Column(length=30,unique=true)
	private String email;
	
	@NotNull
    @Size(min = 8,max=15)
	private String password;
	
	@NotNull
	@Column(length=10,unique=true)
	private String contactNo;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRollNo() {
		return rollNo;
	}

	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", rollNo=" + rollNo + ", email=" + email + ", password="
				+ password + ", contactNo=" + contactNo + "]";
	}

	public User(long id, @NotNull String name, @NotNull String rollNo, @NotNull String email,
			@NotNull @Size(min = 8) String password, @NotNull String contactNo) {
		super();
		this.id = id;
		this.name = name;
		this.rollNo = rollNo;
		this.email = email;
		this.password = password;
		this.contactNo = contactNo;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
