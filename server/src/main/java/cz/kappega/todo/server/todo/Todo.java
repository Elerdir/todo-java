package cz.kappega.todo.server.todo;

import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private Long id;
    private String text;
}
