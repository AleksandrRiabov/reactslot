import React,{Component} from "react";
import "./header.css";


export default class Header extends Component {
	render() {
		return (
		<div className="header">
		    <div className="headerItem">
			   <div className="title">Balance</div>
				<div className="display">454</div>
			</div>	
				<div className="headerItem">
			   <div className="title">Last Win</div>
				<div className="display">$120</div>
			</div>
				<div className="headerItem">
			   <div className="title">Bet</div>
					<form>
						<input type="text" className="display" value={454}/>
					</form>
			</div>
		</div>
		)
	}
}