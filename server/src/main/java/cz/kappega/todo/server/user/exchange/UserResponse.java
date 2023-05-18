package cz.kappega.todo.server.user.exchange;

import cz.kappega.todo.server.user.dto.User;
import lombok.*;

import java.util.Collection;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class UserResponse {

	private Collection<User> users;
}
