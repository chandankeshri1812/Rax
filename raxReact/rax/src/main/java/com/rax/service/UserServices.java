package com.rax.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rax.model.User;

@Service
public interface UserServices {

	
	public List<User> getAllUser(User user);
	
	public User createUser(User user);
	
	public User getUserByEmail(String email);

	
}
