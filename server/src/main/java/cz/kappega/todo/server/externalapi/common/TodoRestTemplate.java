package cz.kappega.todo.server.externalapi.common;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.springframework.web.util.UriComponentsBuilder;
import java.util.List;
import java.util.Map;

import java.net.URI;
import java.util.Collections;
import java.util.stream.Collectors;

//@NoArgsConstructor(access = AccessLevel.PRIVATE)
//@AllArgsConstructor(access = AccessLevel.PRIVATE, staticName = "of")
@Service
public class TodoRestTemplate {
	private static final RestTemplate restTemplate = new RestTemplate();

//	public <I, O> ResponseEntity<O> exchange(String baseUrl, TodoRestRequest<I, O> todoRestRequest) {
//		return restTemplate.exchange(
//				uri(baseUrl, todoRestRequest),
//				todoRestRequest.getHttpMethod(),
//				requestEntity(todoRestRequest),
//				todoRestRequest.getResponseType());
//	}

	public <I, O> ResponseEntity<O> exchange(String url, HttpMethod httpMethod, I request, Class<O> responseType) {

		//RestTemplate restTemplate = new RestTemplate();

		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);

		return restTemplate.exchange(
				url,
				httpMethod,
				new HttpEntity<>(request, httpHeaders),
				responseType);
	}

//	private static TodoRestTemplate init(
//			@NonNull RestTemplateBuilder builder,
//			@NonNull CloseableHttpClient closeableHttpClient) {
//		RestTemplate restTemplate = builder
//				.requestFactory(() -> new HttpComponentsClientHttpRequestFactory())
//				.build();
//
//		return of(restTemplate);
//	}

//	public static TodoRestTemplate init(@NonNull RestTemplateBuilder builder) {
//		return init(builder, HttpClients.createDefault());
//	}

//	public static TodoRestTemplate initWithProxy(
//			@NonNull RestTemplateBuilder builder,
//			@NonNull TodoProxySettings todoProxySettings) {
//		if (!todoProxySettings.isInitialized()) {
//			throw new RuntimeException(String.format(
//					"Proxy Host or Proxy Port are not set in properties. Proxy Host: %s, Proxy Port: %s",
//					todoProxySettings.getHost(),
//					todoProxySettings.getPort()));
//		}
//
//		CloseableHttpClient httpClient = HttpClientBuilder.create()
//				.setProxy(todoProxySettings.httpHost())
//				.setDefaultCredentialsProvider(todoProxySettings.credentialsProvider())
//				.build();
//
//		return init(builder, httpClient);
//	}

	private static <I, O> URI uri(
			@NonNull String baseUrl,
			@NonNull TodoRestRequest<I, O> todoRestRequest) {
		return UriComponentsBuilder
				.fromUriString(baseUrl)
				.path(todoRestRequest.getUrl())
				.uriVariables(todoRestRequest.getPathVariables())
				.queryParams(asMultiValueMap(todoRestRequest.getRequestParams() == null ? Collections.emptyMap() : todoRestRequest.getRequestParams()))
				.build()
				.toUri();
	}

	private static <I> HttpEntity<I> requestEntity(
			@NonNull TodoRestRequest<I, ?> todoRestRequest) {
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setAccept(todoRestRequest.hasAccepts() ? todoRestRequest.getRequestAccepts() : Collections.singletonList(MediaType.APPLICATION_JSON));
		httpHeaders.setContentType(todoRestRequest.getRequestContentType() == null ? MediaType.APPLICATION_JSON : todoRestRequest.getRequestContentType());

//		if (todoRestRequest.getBasicAuthCredentials() != null) {
//			httpHeaders.set(HttpHeaders.AUTHORIZATION, todoRestRequest.getBasicAuthCredentials().asBasicAuthorizationHeaderValue());
//		}
//
//		if (todoRestRequest.getBearerAuthToken() != null) {
//			httpHeaders.set(HttpHeaders.AUTHORIZATION, todoRestRequest.getBearerAuthToken().asBearerAuthorizationHeaderValue());
//		}

		return new HttpEntity<> (todoRestRequest.getRequestBody(), httpHeaders);
	}

	private static MultiValueMap<String, String> asMultiValueMap(Map<String, Object> source) {
		Map<String, List<String>> result = source.entrySet().stream()
				.filter(e -> e.getValue() != null)
				.collect(Collectors.toMap(Map.Entry::getKey, e -> Collections.singletonList(String.valueOf(e.getValue()))));

		return new LinkedMultiValueMap<>(result);
	}
}
