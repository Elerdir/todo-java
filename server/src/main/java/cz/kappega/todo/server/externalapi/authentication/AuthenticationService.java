package cz.kappega.todo.server.externalapi.authentication;

import cz.kappega.todo.server.externalapi.common.TodoRestRequest;
import cz.kappega.todo.server.externalapi.common.TodoRestTemplate;
import cz.kappega.todo.server.user.exchange.RegisterRequest;
import cz.kappega.todo.server.user.exchange.RegisterResponse;
import cz.kappega.todo.server.user.exchange.UserRequest;
import cz.kappega.todo.server.user.exchange.UserResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import static org.springframework.http.HttpMethod.GET;
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