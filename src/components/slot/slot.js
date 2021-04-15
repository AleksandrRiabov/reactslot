import React, {Component} from "react";
import "./slot.css";
import Header from "../header/header.js";
import Drum from "../drum/drum.js";
import Footer from "../footer/footer.js";

export default class Slot extends Component {
	state = {
		
	}

    componentDidMount() {
		console.log("Did Mount");
	}

    render() {
		return (
			<div className="slot">
			  <Header/>
			  <div className="drums">
				  	<Drum/>
					<Drum/>
					<Drum/>
				</div>
				<Footer/>
			</div>
		)
	}
}
