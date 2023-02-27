package cz.kappega.todo.server.todo;

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
    private String description;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private String createdBy;
    @Column(nullable = false)
    private String assign;


    public Todo(String text, LocalDateTime createdAt) {
        this.text = text;
        this.createdAt = createdAt;
    }
}
