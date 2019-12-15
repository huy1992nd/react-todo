import React, {Component} from 'react'
import TodoList from './todoList';
import TodoItems from './todoItems';

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
    this.addItems = this.addItems.bind(this);
    this.removeItems = this.removeItems.bind(this);
  }

  addItems(taskName) {
    const newTask = {
      text: taskName,
      key: Date.now()
    }

    if (newTask.text && newTask.text !== '') {
      this.setState(state => {
        return {
          items: [...state.items, newTask]
        }
      })
    }
  }

  removeItems(taskKey){
    if(taskKey){
      this.setState(state =>{
         let list_current_item = state.items;
         let list_item_update = list_current_item.filter(i=> i.key !== taskKey);
         return {
           items : list_item_update
         }
      })
    }
  }

  render(){
    return (
      <div className="container todo">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <TodoList addItems={this.addItems} />
          </div>
        </div>
        <div className="row">
          <div className="gallery-container">
              <TodoItems removeItems={this.removeItems}  entries={this.state.items} />
          </div>
        </div>
      </div>
    )
  }
}

export default Todo;