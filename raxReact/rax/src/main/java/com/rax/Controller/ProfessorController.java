package com.rax.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rax.model.Professor;
import com.rax.service.ProfessorService;

@RestController
@CrossOrigin
@RequestMapping(value ="/professor")
public class ProfessorController {

	@Autowired
	private ProfessorService professorService;
	
	@GetMapping("/allProfessor")
	public List<Professor> getAllProfessor() {
		return professorService.getAllProfessor();
	}
	
	@PostMapping("/createProfessor")
	public String createProfessor(@ModelAttribute("professor") Professor professor) {
		System.out.println("professor: " + professor);
		
		try {
			 Professor createProfessor = professorService.createProfessor(professor);
			return "succesfully";
		}catch(Exception e) {
//			 e.printStackTrace();
			 return "error caused in creating professor";
		}
		
	}
	
	
}
