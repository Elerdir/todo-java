package cz.kappega.todo.server.externalapi.common;

import lombok.*;
import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.impl.client.BasicCredentialsProvider;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class TodoProxySettings {
	private static final String SCHEMA = "HTTP";
	private String host;
	private int port;
	private String username;
	private String password;

	public boolean isInitialized() {
		return host != null && port != 0;
	}

	public HttpHost httpHost() {
		return new HttpHost(getHost(), getPort(), SCHEMA);
	}

	public CredentialsProvider credentialsProvider() {
		CredentialsProvider credentialsProvider = new BasicCredentialsProvider();
		credentialsProvider.setCredentials(
				new AuthScope(getHost(), getPort()),
				new UsernamePasswordCredentials(getUsername(), getPassword()));

		return credentialsProvider;
	}
}
