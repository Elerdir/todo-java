package cz.kappega.todo.server.user;

import cz.kappega.todo.server.user.exchange.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;

	@GetMapping("/list-of-app-users")
	public UserResponse getListOfAppUsers(@RequestBody TokenRequest token) {
		return userService.getListOfAppUsers(token);
	}

	@PostMapping("/register")
	public RegisterResponse register(@RequestBody RegisterRequest registerRequest) {
		return userService.register(registerRequest);
	}

	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest loginRequest) {
		return userService.login(loginRequest);
	}

	@PostMapping("/logout")
	public void logout(@RequestBody LogoutRequest logoutRequest) {
		userService.logout(logoutRequest);
	}
}
