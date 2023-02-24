package cz.kappega.todo.server.todo.states;

import cz.kappega.todo.server.todo.Todo;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
@ToString(exclude = "todo")
public class State {

	@Id
	private Long id;
	private String state;

	@OneToOne(
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY,
			optional = false
	)
	@JoinColumn(
			name = "id",
			referencedColumnName = "id"
	)
	private Todo todo;
}
