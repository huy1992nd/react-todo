const todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          update: false
        }
      ]

    case 'UPDATE_TODO':
      var text_arr = action.text.split(',');
      var update_state = state;
      if(text_arr.length === 2){
          update_state = state.map(item=>{
          if(item.text === text_arr[0]){
            item.text = text_arr[1];
            item.update = true;
          }
          return item;
        })
      }
      return  update_state;

    case 'REMOVE_TODO':
      var id = action.id;
      var new_state = state.filter(item => item.id !== id)
      return new_state
      
    default:
      return state
  }
}

export default todos
