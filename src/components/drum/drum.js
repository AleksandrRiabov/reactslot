import React, {Component} from "react";
import "./drum.css";

export default class Drum extends Component {
	
	render() {
		return (
		   <div className="drum">
			   <img data-simbol 
				   src={this.props.img}
				   alt=""></img>
			</div>
		)
	}
}