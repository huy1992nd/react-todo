import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {

	render() {
		return(
			<div class="breadcrumbs">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-4">
                    <h1>Buttons</h1>
                </div>
                <div class="col-lg-8 col-sm-8">
                    <ol class="breadcrumb pull-right">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/todo'}>Todo</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
	}
}

export default Breadcrumbs;