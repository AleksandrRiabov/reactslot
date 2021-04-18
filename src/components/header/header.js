import React,{Component} from "react";
import "./header.css";


export default class Header extends Component {
	
render() {
		const {balance, lastWin, bet, onReduceBet, onIncreaseBet} = this.props;
		
		return (
		<div className="header">
		    <div className="headerItem">
			   <div className="title">Balance</div>
				<div className="display">${balance}</div>
			</div>	
				<div className="headerItem">
			   <div className="title">Last Win</div>
				<div className="display">${lastWin}</div>
			</div>
				<div className="headerItem">
			   <div className="title">Bet</div>
                  <div className="display">
							<button onClick={onReduceBet}>-</button>
 							 <span>{bet}</span>
							<button onClick={onIncreaseBet}>+</button>
						</div>
			</div>
		</div>
		)
	}
}