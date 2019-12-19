import React, { Component, Fragment } from 'react';
import openSocket from 'socket.io-client';
import { DropDownList } from '@progress/kendo-react-dropdowns';
const socket = openSocket('http://localhost:8000');

class Message extends Component {
    constructor() {
        super();
        this.state = {
            list_message: [],
            list_group:[
                { text: 'All', id: 0 },
                { text: 'A', id: 1 },
                { text: 'B', id: 2 },
                { text: 'C', id: 3 }
            ],
            group: { text: 'All', id: 0 }
        }
        // this.addItems = this.addItems.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            group: event.target.value
        });
    }

    componentDidMount() {
        socket.on("list_message", data => {
            console.log('data is', data);
            this.setState({ list_message: data })
        });
    }

    getMessage = (e) => {
        e.preventDefault();
        socket.emit('get_message',{group: null});
      }
    

    createMessage = (item, index) => {
    	return (
			<li key={index} >
				<span className={item.group === 1 ? 'group1Style todo-item' : item.group === 2 ?'group2Style todo-item' : 'group3Style todo-item'}>
					{item.message}
				</span>
			</li>
		)
    }

    render() {
        const listMessage = this.state.list_message.filter(item => 
            this.state.group.id  ?   (item.group === this.state.group.id) : true
    ).map(this.createMessage);
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                    <div className="contact-form form-add-task" >
                <form  onSubmit={this.getMessage} >
                    <div className="row form-group">
                        <div className="col-md-3"></div>
                        <div className="col-md-5">
                        <DropDownList
                            className="form-control"
                            data={this.state.list_group}
                            textField="text"
                            dataItemKey="id"
                            value={this.state.group}
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="col-md-1"><button className="btn btn-danger" type="submit">get Message</button></div>
                        <div className="col-md--3"></div> 
                    </div>
                </form>
            </div>
                    </div>
                    <div className="about row">
                       <div className="col-lg-12 about">
                            <h3>List message</h3>
                            <div>
                                <ul id="filters" className="list-unstyled">{listMessage}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Message;