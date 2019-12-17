import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { changeSearch } from '../actions/index';
class Header extends Component {
	constructor(...props) {
    super(...props);
	}
	
	static propTypes = {
    location: PropTypes.object.isRequired
	};

	handleChange = (e) => {
		e.preventDefault();
		this.props.changeSearch(e.target.value);
	}

	render() {
		const {  location } = this.props;
		return(
			<header className="header-frontend">
				<div className="navbar navbar-default navbar-static-top">
					<div className="container">
						<div className="navbar-header">
								<a className="navbar-brand" href="/">Demo<span>React </span></a>
						</div>
						<div className="navbar-collapse collapse ">
							<ul className="nav navbar-nav">
								<li className={`${location.pathname === '/'? 'active' : ''}`}><Link to={'/'}>Home</Link></li>
								<li className={`${location.pathname === '/todo'? 'active' : ''}`}><Link to={'/todo'}>Todo</Link></li>
								<li><input value={this.props.search_str}  onChange= {this.handleChange} type="text" placeholder=" Search" className="form-control search"/></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

const mapStateToProps = state => ({
	search_str: state.search_str
})

const mapDispatchToProps = dispatch => {
  return {
    changeSearch : (text) => dispatch(changeSearch(text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
