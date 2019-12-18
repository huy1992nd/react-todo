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
        socket.emit('list_message',{});
        
        // this.addItems = this.addItems.bind(this);
    }

    componentDidMount() {
        socket.on("list_message", data => {
            console.log('data is', data);
            this.setState({ list_message: data })
        });
    }
    

    createMessage = item => {
    	return (
			<li key={item.id} >
				<span className={item.update ? 'updateStyle todo-item' : 'noneUpdateStyle todo-item'}>
					{item.text}
				</span>
			</li>
		)
    }

    render() {
        const listMessage = this.state.list_message.map(this.createMessage);
        return (
            <Fragment>
                <div className="container">
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