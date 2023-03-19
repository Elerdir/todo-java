package cz.kappega.todo.server.user;

import cz.kappega.todo.server.externalapi.authentication.AuthenticationService;
import cz.kappega.todo.server.user.exchange.*;
import cz.kappega.todo.server.utils.TodoUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

	private final AuthenticationService authenticationService;

	public RegisterResponse register(RegisterRequest registerRequest) {
		return null;
	}

	public LoginResponse login(LoginRequest loginRequest) {
		return null;
	}

	public void logout(LogoutRequest logoutRequest) {
		authenticationService.logout(logoutRequest);
	}

	public UserResponse getListOfAppUsers(TokenRequest token) {
		UserResponse users = authenticationService.getListOfAppUsers(UserRequest.of(TodoUtil.APP, token.getToken()));

		return users;
	}
}
