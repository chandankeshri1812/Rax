package com.rax.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rax.model.Course;
import com.rax.service.CoursesService;

@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {

	@Autowired
	private CoursesService coursesService;
	
	@GetMapping("/allcourses")
	public List<Course> getAllCourse() {
		List<Course> allcourses = coursesService.getAllcourses();
//		System.out.println("all courses are : " + allcourses);
		return allcourses;
	}
	
	@PostMapping("/courseCreate")
	public Course createCourses(@ModelAttribute("course") Course course) {
		System.out.println("course are created : " + course);
		System.out.println("course are created : " + coursesService.createCourse(course));
		return coursesService.createCourse(course);
	}
	
}
