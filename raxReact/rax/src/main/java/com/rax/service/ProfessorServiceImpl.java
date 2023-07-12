package com.rax.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rax.dao.ProfessorRepository;
import com.rax.model.Professor;

@Service
public class ProfessorServiceImpl implements ProfessorService {

	@Autowired
	private ProfessorRepository professorRepository;

	@Override
	public List<Professor> getAllProfessor() {
		return professorRepository.findAll();
	}

	@Override
	public Professor createProfessor(Professor professor) {
		return professorRepository.save(professor);
	}

}
