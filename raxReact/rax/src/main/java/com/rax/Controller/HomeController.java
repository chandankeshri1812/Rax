package com.rax.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rax.model.User;
import com.rax.service.UserServices;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class HomeController {

	@Autowired
	private UserServices userServices;

	@GetMapping("/")
	public void Home() {
		System.out.println("Home page ");
	}

	@PostMapping("/createUser")
	public String createUser(@ModelAttribute("user") User user, Model model) {

		System.out.println("Before user created : " + user);
		userServices.createUser(user);
//		System.out.println("user created : "  + user );
		model.addAttribute(user);
		return "created new User";
	}

	@GetMapping("/allUser")
	public List<User> getAllUser(User user) {
		System.out.println("get all user");
		List<User> allUser = userServices.getAllUser(user);
		System.out.println(allUser);
		return userServices.getAllUser(user);
	}

	@RequestMapping(value = "/getUserByEmail", method = RequestMethod.POST)
	public String getUserByEmail(@RequestParam("email") String email) {
		String email2 = userServices.getUserByEmail(email).getEmail();
		System.out.println("user email : " + email);
		System.out.println("user by email : "+ email2);
		try {
			if (email.equals(userServices.getUserByEmail(email).getEmail())) {
				
				System.out.println("Valid user email");
				return "Valid user email";
			}
		} catch (Exception e) {
			e.printStackTrace();
//				System.out.println(  e.printStackTrace() );
				return "not Valid user email";
			
		}
		return email;

	}

}
