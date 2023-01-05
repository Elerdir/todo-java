package cz.kappega.todo.server.todo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/todos")
@AllArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @PostMapping
    public void addTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);
    }

    @DeleteMapping(path = "{todoId}")
    public void deleteTodo(
            @PathVariable("todoId") Long todoId) {
        todoService.deleteTodo(todoId);
    }

// todo: zjistit, jestli test testuje co má
    @PatchMapping(path = "{todoId}")
    public void updateTodo(@PathVariable("todoId") Long todoId,
                              @RequestBody Todo todo) {
        todoService.updateTodo(todoId, todo);
    }
}
