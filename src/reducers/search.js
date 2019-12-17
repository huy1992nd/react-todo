const search_str = (state = "", action) => {
  switch (action.type) {

    case 'CHANGE_SEARCH':
      return action.text
      
    default:
      return state
  }
}

export default search_str
