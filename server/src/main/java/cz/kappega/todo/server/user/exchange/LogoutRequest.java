package cz.kappega.todo.server.user.exchange;

import lombok.Data;

@Data
public class LogoutRequest {

	private String token;
}
