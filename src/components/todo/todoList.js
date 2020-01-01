import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateTodo } from '../../actions/index';
class todoList extends Component {

  constructor(...props) {
    super(...props);
  }

  handerInputs = (e) => {
    e.preventDefault();
    if (!this.refs.taskInput.value.trim()) {
      return
    }
    var taskName = this.refs.taskInput.value;
    this.props.addTodo(taskName);
    this.refs.taskInput.value = '';
    this.refs.taskInput.focus();
  }

  handerUpdate = () => {
    if (!this.refs.taskInput.value.trim()) {
      return
    }
    var taskName = this.refs.taskInput.value;
    this.props.updateTodo(taskName);
    this.refs.taskInput.value = '';
    this.refs.taskInput.focus();
  }

  render() {
    return (
      <div className="contact-form form-add-task" >
          <form  onSubmit={this.handerInputs} >
              <div className="row form-group">
                <div className="col-md-2"></div>
                <div className="col-md-1">
                <span className="btn btn-danger" onClick={()=>{this.handerUpdate()}} >Update</span>
                </div>
                <div className="col-md-5">
                  <input type="text"  id="name" className="form-control" placeholder="Task" ref="taskInput"/>
                </div>
                <div className="col-md-1">
                  <button className="btn btn-danger" type="submit">Submit</button>
                </div>
                <div className="col-md--3"></div> 
              </div>
          </form>

      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo : (data) => dispatch(addTodo(data)),
    updateTodo : (data) => dispatch(updateTodo(data))
  }
}

export default connect(null,mapDispatchToProps)(todoList);
