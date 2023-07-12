package com.rax.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rax.model.Professor;

@Service
public interface ProfessorService {

	public List<Professor> getAllProfessor();
	
	public Professor createProfessor(Professor professor);
	
	
	
	
}
