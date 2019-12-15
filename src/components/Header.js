import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Header extends Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
	render() {
		const { match, location, history } = this.props;
		return(
			<header className="header-frontend">
				<div className="navbar navbar-default navbar-static-top">
					<div className="container">
						<div className="navbar-header">
								<a className="navbar-brand" href="/">Demo<span>React </span></a>
						</div>
						<div className="navbar-collapse collapse ">
							<ul className="nav navbar-nav">
								<li className={`${location.pathname == '/'? 'active' : ''}`}><Link to={'/'}>Home</Link></li>
								<li className={`${location.pathname == '/todo'? 'active' : ''}`}><Link to={'/todo'}>Todo</Link></li>
								<li><input type="text" placeholder=" Search" className="form-control search"/></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default withRouter(Header);