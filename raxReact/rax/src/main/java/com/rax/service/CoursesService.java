package com.rax.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rax.model.Course;

@Service
public interface CoursesService {

	public List<Course> getAllcourses();
	
	public Course createCourse(Course course);
	
}
