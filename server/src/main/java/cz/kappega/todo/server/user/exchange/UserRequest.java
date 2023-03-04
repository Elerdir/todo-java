package cz.kappega.todo.server.user.exchange;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PUBLIC, staticName = "of")
public class UserRequest {

	private String app;

	private String token;
}
