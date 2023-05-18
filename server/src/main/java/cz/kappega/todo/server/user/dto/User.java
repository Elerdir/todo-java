package cz.kappega.todo.server.user.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class User {

	private String firstName;

	private String lastName;

	private String email;

	private String fullName;
}
