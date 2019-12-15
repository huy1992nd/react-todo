import React, { Component, Fragment } from 'react';

class Home extends Component {
	render() {
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
							<h3>Welcome to Demo react</h3>
							<p>
								Welcome To demo react
								This is an app to add todo list
                </p>
							<p>
								Thanks
                </p>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Home;