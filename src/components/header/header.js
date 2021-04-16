import React,{Component} from "react";
import "./header.css";


export default class Header extends Component {
	
	onValueChange = (e) => {
		this.props.onBetChange(e.target.value);
	}
	
	
	render() {
		const {balance, lastWin, bet = 50} = this.props;
		
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
					<form className="display">
						<input
							onChange={this.onValueChange}
							type="text"
							className="display"
							value={bet}/>
					</form>
			</div>
		</div>
		)
	}
}