package cz.kappega.todo.server.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/todos")
public class TodoController {

    @GetMapping
    public List<Todo> getAllTodos() {
        return Arrays.asList(
                new Todo(1L, "projít se")
        );
    }
}
