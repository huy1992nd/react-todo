import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo, updateTodo } from '../../actions/index';

class todoItems extends Component {

  constructor(...props) {
    super(...props);
  }

  createTasks = item => {
    return (<li key={item.id} onClick={() => this.handerRemove(item.id)}>
       <span className={item.update ? 'updateStyle todo-item' : 'noneUpdateStyle todo-item'}>{item.text}</span>
       </li>)
  }

  handerRemove = (key) => {
    this.props.removeTodo(key);
  }

  render() {
    const listItems = this.props.todos.map(this.createTasks);
    return (
      <ul id="filters" className="list-unstyled">{listItems}</ul>
    )

  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  updateTodo: id => dispatch(updateTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoItems)