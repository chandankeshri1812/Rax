package com.rax.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rax.model.Course;

@Repository
public interface CoursesRepostory extends JpaRepository<Course, Long>{

	
}
