package com.rax.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rax.dao.CoursesRepostory;
import com.rax.model.Course;

@Service
public class CoursesServiceImpl implements CoursesService{

	@Autowired
	private CoursesRepostory coursesRepostory;
	
	@Override
	public List<Course> getAllcourses() {
		return coursesRepostory.findAll();
	}

	@Override
	public Course createCourse(Course course) {
		return coursesRepostory.save(course);
	}

}
