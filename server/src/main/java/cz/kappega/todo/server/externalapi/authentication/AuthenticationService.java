package cz.kappega.todo.server.externalapi.authentication;

import cz.kappega.todo.server.externalapi.common.TodoRestRequest;
import cz.kappega.todo.server.externalapi.common.TodoRestTemplate;
import cz.kappega.todo.server.user.exchange.*;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import static org.springframework.http.HttpMethod.POST;

@Service
@RequiredArgsConstructor
@Log4j2
public class AuthenticationService {

	private static final String BASE_URL = "http://localhost:8082/api/v1";

	private final TodoRestTemplate todoRestTemplate;

	public UserResponse getListOfAppUsers(@NonNull UserRequest userRequest) {
		//ResponseEntity<UserResponse> responseEntity = todoRestTemplate.exchange(BASE_URL + "/user/list", POST, userRequest, UserResponse.class);
		return todoRestTemplate.exchange(BASE_URL + "/user/list", POST, userRequest, UserResponse.class).getBody();

		//return responseEntity.getBody();
	}

	public RegisterResponse registerUser(@NonNull RegisterRequest registerRequest) {
		return callApiInternal(TodoRestRequest
				.<Object, RegisterResponse>builder()
				.httpMethod(POST)
				.url("/user/register")
				.requestBody(registerRequest)
				.responseType(RegisterResponse.class)
				.build());
	}

	public void logout(LogoutRequest logoutRequest) {
	todoRestTemplate.exchange(BASE_URL + "/auth/logout", POST, logoutRequest, void.class).getBody();

	}
	protected <I, O> O callApiInternal(@NonNull TodoRestRequest<I, O> todoRestRequest) {

		try {
			//ResponseEntity<O> responseEntity = todoRestTemplate.exchange(BASE_URL, todoRestRequest);

			return null; //responseEntity.getBody();
		} catch (Exception e) {
			log.error("Error", e);
		}

		return null;
	}

}