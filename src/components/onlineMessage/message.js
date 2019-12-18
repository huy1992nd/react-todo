import React, { Component, Fragment } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

class Message extends Component {
    constructor() {
        super();
        this.state = {
            list_message: [],
            group: null
        }
        // this.addItems = this.addItems.bind(this);
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
				<span className= 'noneUpdateStyle todo-item'>
					{item.message}
				</span>
			</li>
		)
    }

    render() {
        const listMessage = this.state.list_message.map(this.createMessage);
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                    <div className="contact-form form-add-task" >
                <form  onSubmit={this.getMessage} >
                    <div className="row form-group">
                        <div className="col-md-3"></div>
                        <div className="col-md-5">
                        <input type="text"  id="name" className="form-control" placeholder="Task" ref="taskInput"/>
                        </div>
                        <div className="col-md-1"><button className="btn btn-danger" type="submit">get Message</button></div>
                        <div className="col-md--3"></div> 
                    </div>
                </form>
            </div>
                    </div>
                    <div className="about row">
                        <div className="col-lg-5">
                            <div className="span5 about-carousel">
                                <div id="myCarousel" className="carousel slide">

                                    <div className="carousel-inner">
                                        <div className="active item">
                                            <img src="lib/img/about_1.jpg" alt="" />
                                            <div className="carousel-caption">
                                                <p>Donec luctus ullamcorper nulla</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <img src="lib/img/about_2.jpg" alt="" />
                                            <div className="carousel-caption">
                                                <p>Blanditiis praesentium voluptatum</p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <img src="lib/img/about_1.jpg" alt="" />
                                            <div className="carousel-caption">
                                                <p>Honest and amazing things that bring positive results</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                                        <i className="icon-angle-left"></i>
                                    </a>
                                    <a className="carousel-control right" href="#myCarousel" data-slide="next">
                                        <i className="icon-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 about">
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