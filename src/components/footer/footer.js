import React, {Component} from "react";
import "./footer.css";

import Button from "../button/button.js";

export default class Footer extends Component {
	render () {
		return (
		  <div className="footer">
			  <Button text="Gamble"/>
		   	  <Button background="#800029"
				      width="250px"
				      text="START"/>
			  <Button text="Auto"/>
	    	</div>
		)
	}
}