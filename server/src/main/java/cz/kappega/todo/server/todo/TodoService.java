package cz.kappega.todo.server.todo;

import cz.kappega.todo.server.todo.exeption.TodoNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class TodoService {
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        List<Todo> all = todoRepository.findAll();
        return all;
    }

    public void addTodo(Todo todo) {
        todo.setCreatedAt(LocalDateTime.now());
        todoRepository.save(todo);
    }

    public void deleteTodo(Long todoId) {
        if(!todoRepository.existsById(todoId)) {
            throw new TodoNotFoundException(
                    "Todo with id " + todoId + " does not exists");
        }
        todoRepository.deleteById(todoId);
    }

    public void updateTodo(Long todoId, Todo todo) {
        if (!todoRepository.existsById(todoId)) {
            throw new TodoNotFoundException(
                    "Todo with id " + todoId + " does not exists");
        }

        Optional<Todo> byId = todoRepository.findById(todoId);
        if (byId.isPresent()) {
            Todo todo1 = byId.get();
            todo1.setText(todo.getText());
            todoRepository.saveAndFlush(todo1);
        }
    }
}
