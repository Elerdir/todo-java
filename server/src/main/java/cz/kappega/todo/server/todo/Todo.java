package cz.kappega.todo.server.todo;

import cz.kappega.todo.server.todo.states.State;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Todo {
    @Id
    @SequenceGenerator(
            name = "todo_sequence",
            sequenceName = "todo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "todo_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private String text;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private State state;

    public Todo(String text, LocalDateTime createdAt, State state) {
        this.text = text;
        this.createdAt = createdAt;
        this.state = state;
    }
}
