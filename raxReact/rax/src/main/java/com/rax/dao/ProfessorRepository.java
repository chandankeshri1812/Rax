package com.rax.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rax.model.Professor;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Long>{

}
