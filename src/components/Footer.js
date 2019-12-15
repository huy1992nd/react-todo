import React, { Component, Fragment } from 'react';

// import moment from 'moment';

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<footer className="footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-sm-3">
								<h1>contact info</h1>
								<address>
									<p>Address: No.28-63877 street</p>
									<p>lorem ipsum city, Country</p>

									<p>Phone : (123) 456-7890</p>
									<p>Fax : (123) 456-7890</p>
									<p>Email : <a href="/">support@vectorlab.com</a></p>
								</address>
							</div>
							<div className="col-lg-5 col-sm-5">
								<h1>latest tweet</h1>
								<div className="tweet-box">
									<i className="icon-twitter"></i>
									<em>Please follow <a href="/">@nettus</a> for all future updates of us! <a href="/">twitter.com/vectorlab</a></em>
								</div>
							</div>
							<div className="col-lg-3 col-sm-3 col-lg-offset-1">
								<h1>stay connected</h1>
								<ul className="social-link-footer list-unstyled">
									<li><a href="/"><i className="icon-facebook"></i></a></li>
									<li><a href="/"><i className="icon-google-plus"></i></a></li>
									<li><a href="/"><i className="icon-dribbble"></i></a></li>
									<li><a href="/"><i className="icon-linkedin"></i></a></li>
									<li><a href="/"><i className="icon-twitter"></i></a></li>
									<li><a href="/"><i className="icon-skype"></i></a></li>
									<li><a href="/"><i className="icon-github"></i></a></li>
									<li><a href="/"><i className="icon-youtube"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</Fragment>
		)
	}
}

export default Footer;