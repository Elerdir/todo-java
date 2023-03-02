package cz.kappega.todo.server.externalapi.authentication;

import cz.kappega.todo.server.externalapi.common.TodoRestRequest;
import cz.kappega.todo.server.externalapi.common.TodoRestTemplate;
import cz.kappega.todo.server.user.exchange.RegisterRequest;
import cz.kappega.todo.server.user.exchange.RegisterResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import static org.springframework.http.HttpMethod.POST;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

	private final TodoRestTemplate todoRestTemplate;

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
			String baseUrl = "";
			ResponseEntity<O> responseEntity = todoRestTemplate.exchange(baseUrl, todoRestRequest);

			return responseEntity.getBody();
		} catch (Exception e) {

		}

		return null;
	}
}