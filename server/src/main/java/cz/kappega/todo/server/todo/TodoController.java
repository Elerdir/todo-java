package cz.kappega.todo.server.todo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/todos")
@AllArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @CrossOrigin("*")
    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @CrossOrigin("*")
    @PostMapping
    public void addTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);
    }

    @CrossOrigin("*")
    @DeleteMapping(path = "/{todoId}")
    public void deleteTodo(
            @PathVariable("todoId") Long todoId) {
        todoService.deleteTodo(todoId);
    }

    @CrossOrigin("*")
    @PatchMapping(path = "/{todoId}")
    public void updateTodo(@PathVariable("todoId") Long todoId,
                              @RequestBody Todo todo) {
        todoService.updateTodo(todoId, todo);
    }
}
