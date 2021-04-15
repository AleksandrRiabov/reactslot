import React, {Component} from "react";
import "./button.css";


export default class Button extends Component {
	
	
	render () {
		const {text, width = "140px", height = "50px", background = "green", color = "#fafafa", func} = this.props;
		
		return (
		<button 
			style={{
				width: width, 
				height: height,
				background: background,
				color: color
		    }}
			className="button"
			onClick={func}>{text}</button>
		)
	}
}
