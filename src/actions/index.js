let nextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const updateTodo = (text) => ({
  type: 'UPDATE_TODO',
  text
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

export const changeSearch = text => ({
  type: 'CHANGE_SEARCH',
  text
})

