package cz.kappega.todo.server.todo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import cz.kappega.todo.server.todo.exeption.TodoNotFoundException;

import java.time.LocalDateTime;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class TodoServiceTest {

    @Mock
    private TodoRepository todoRepository;
    private TodoService underTest;

    @BeforeEach
    void setUp() {
        underTest = new TodoService(todoRepository);
    }
    @Test
    void canGetAllTodos() {
        // when
        underTest.getAllTodos();

        // then
        verify(todoRepository).findAll();
    }

    @Test
    void canAddTodo() {
        // given
        LocalDateTime localDateTime = LocalDateTime.now();
        Todo todo = new Todo(
                "připomínka",
                localDateTime
        );

        // when
        underTest.addTodo(todo);

        // then
        ArgumentCaptor<Todo> todoArgumentCaptor = ArgumentCaptor.forClass(Todo.class);

        verify(todoRepository).save(todoArgumentCaptor.capture());

        Todo capturedTodo = todoArgumentCaptor.getValue();

        assertThat(capturedTodo).isEqualTo(todo);
    }

    @Test
    void canDeleteTodo() {
        // given
        long todoId = 1;
        given(todoRepository.existsById(todoId)).willReturn(true);

        // when
        underTest.deleteTodo(todoId);

        // then
        verify(todoRepository).deleteById(todoId);
    }

    @Test
    void willThrowWhenDeleteTodoNotFound() {
        // given
        long todoId = 1;
        given(todoRepository.existsById(todoId)).willReturn(false);

        // when
        // then
        assertThatThrownBy(() -> underTest.deleteTodo(todoId))
                .isInstanceOf(TodoNotFoundException.class)
                .hasMessageContaining( "Todo with id " + todoId + " does not exists");

        verify(todoRepository, never()).deleteById(any());
    }

    @Test
    void canUpdateTodo() {
        // given
        long todoId = 1;
        given(todoRepository.existsById(todoId)).willReturn(true);
        Todo todo = todoRepository.getById(todoId);

        // when
        underTest.updateTodo(todoId, todo);

        // then
        verify(todoRepository).findById(todoId);
    }
}