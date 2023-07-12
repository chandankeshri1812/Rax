package com.rax.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rax.dao.UserRepository;
import com.rax.model.User;

@Service
public class UserServiceImpl implements UserServices {

	@Autowired
	private UserRepository userRepository;

	public List<User> getAllUser(User user) {
		return userRepository.findAll();
	}

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public User getUserByEmail(String email) {
		return userRepository.getUserByUserName(email);
	}

}
