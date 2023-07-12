package com.rax.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Professor {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;

	@Column(length=50)
	private String professorName;
	
	@Column(length=1000)
	private String professDetails;
	
	@Column(length=4)
	private String yearOfJoining;
	
	@Column(length=50)
	private String role;
	
	@Column(length=50,unique=true)
	private String professorEmail;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProfessorName() {
		return professorName;
	}

	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}

	public String getProfessDetails() {
		return professDetails;
	}

	public void setProfessDetails(String professDetails) {
		this.professDetails = professDetails;
	}

	public String getYearOfJoining() {
		return yearOfJoining;
	}

	public void setYearOfJoining(String yearOfJoining) {
		this.yearOfJoining = yearOfJoining;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getProfessorEmail() {
		return professorEmail;
	}

	public void setProfessorEmail(String professorEmail) {
		this.professorEmail = professorEmail;
	}

	@Override
	public String toString() {
		return "Professor [id=" + id + ", professorName=" + professorName + ", professDetails=" + professDetails
				+ ", yearOfJoining=" + yearOfJoining + ", role=" + role + ", professorEmail=" + professorEmail + "]";
	}

	public Professor(long id, String professorName, String professDetails, String yearOfJoining, String role,
			String professorEmail) {
		super();
		this.id = id;
		this.professorName = professorName;
		this.professDetails = professDetails;
		this.yearOfJoining = yearOfJoining;
		this.role = role;
		this.professorEmail = professorEmail;
	}

	public Professor() {
		super();
		// TODO Auto-generated constructor stub
	}

}
