import React, {Component} from "react";
import "./footer.css";

import Button from "../button/button.js";

export default class Footer extends Component {
	
	render () {
        const { onStart, onAutoSpin, onGamble, winStatus, autoSpin} = this.props;
		
		
		return (
		  <div className="footer">
			  <Button text="Gamble"
				      func={onGamble}
				      background={winStatus ? "red" : "green"}/>
		   	  <Button 
				      func={onStart}
				      background="#800029"
				      width="250px"
				      text="START"/>
			  <Button text="Auto"
				  func={onAutoSpin}
				  background={autoSpin ? "#445455" : "green"}/>
	    	</div>
		)
	}
}