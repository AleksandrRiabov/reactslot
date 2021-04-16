import React, {Component} from "react";
import "./drums.css";
import Drum from "../drum/drum.js";

export default class Drums extends Component {
	render() {
		const {firstSlot, secondSlot, thirdSlot, winStatus} = this.props;
		
		const WinningCrossLine = function(){
			return winStatus ? <div className="crossLine"></div> : null;
		}
		
		return (
		    <div className="drums">
			        <Drum img={firstSlot.url}/>
					<Drum img={secondSlot.url}/>
					<Drum img={thirdSlot.url}/>
				    <WinningCrossLine/>
			</div>
		)
	}
}