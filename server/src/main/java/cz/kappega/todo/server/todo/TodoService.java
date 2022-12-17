package cz.kappega.todo.server.todo;

import cz.kappega.todo.server.todo.exeption.TodoNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TodoService {
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public void deleteTodo(Long todoId) {
        if(!todoRepository.existsById(todoId)) {
            throw new TodoNotFoundException(
                    "Todo with id " + todoId + " does not exists");
        }
        todoRepository.deleteById(todoId);
    }
}
