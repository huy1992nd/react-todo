const todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'REMOVE_TODO':
      var id = action.id;
      var new_state = state.filter(item => item.id !== id)
      return new_state
      
    default:
      return state
  }
}

export default todos
