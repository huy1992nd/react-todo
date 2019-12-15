let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const updateTodo = id => ({
  type: 'UPDATE_TODO',
  id
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

