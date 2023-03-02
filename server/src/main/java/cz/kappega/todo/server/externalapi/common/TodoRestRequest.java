package cz.kappega.todo.server.externalapi.common;

import lombok.*;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;

import java.util.List;
import java.util.Map;

@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class TodoRestRequest<I, O> {

	private HttpMethod httpMethod;
	private String url;
	@Singular
	private Map<String, Object> pathVariables;
	@Singular
	private Map<String, Object> requestParams;
	private I requestBody;
	private MediaType requestContentType;
	private List<MediaType> requestAccepts;
	private Class<O> responseType;

	public boolean hasAccepts() {
		return this.requestAccepts != null && !this.requestAccepts.isEmpty();
	}
}
