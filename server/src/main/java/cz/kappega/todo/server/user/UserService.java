package cz.kappega.todo.server.user;

import cz.kappega.todo.server.user.exchange.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
	public RegisterResponse register(RegisterRequest registerRequest) {
		return null;
	}

	public LoginResponse login(LoginRequest loginRequest) {
		return null;
	}

	public void logout(LogoutRequest logoutRequest) {
	}
}
