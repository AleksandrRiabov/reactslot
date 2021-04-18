import React, {Component} from "react";
import "./slot.css";
import Header from "../header/header.js";
import Drums from "../drums/drums.js";
import Footer from "../footer/footer.js";

export default class Slot extends Component {
	state = {
		active: false,
		spin: [
			{
			firstSlot: [], 
			secondSlot: [],
			thirdSlot: [],
			winStatus: false
		}
		],
		balance: 1000,
		bet: 50,
		lastWin: 0,
		autoSpin: false,
		autoSpinTimerId: null
	}
    
    onReduceBet = () => {
		this.setState({
			bet: this.state.bet - 1
		});
	 }
   
	 onIncreaseBet = () => {
		this.setState({
			bet: this.state.bet + 1
		});
	 }

	
	makeSpin = () => {
		if (this.state.active) { //can be used once start to fetch
			return
		}
		
	   const firstSlot =  getRandomSimb (); 
	   const secondSlot =  getRandomSimb ();
	   const thirdSlot = getRandomSimb ();	
		
	   const winStatus = firstSlot === secondSlot && firstSlot === thirdSlot ? true : false;
		
	   const {balance, bet, lastWin} = this.state;
		
	   const newBal = winStatus ? (balance + bet * firstSlot.price) :( balance - bet);
	   const newlastWin = winStatus & lastWin !== (bet * firstSlot.price) ? (bet * firstSlot.price): lastWin;
		
	   this.setState ({
			spin: this.state.spin.map(spin => {
				return {firstSlot, secondSlot, thirdSlot, winStatus}
			}),
		   balance: newBal,
		   lastWin: newlastWin
		});
	}
	
    onStart = () => {
		if (this.state.autoSpinTimerId){
			clearInterval(this.state.autoSpinTimerId);
			this.setState({autoSpinTimerId: null, autoSpin: false});
			return
		}
		this.makeSpin();
	}
	
	
	onAutoSpin = () => {
		if (this.state.autoSpinTimerId){
			clearInterval(this.state.autoSpinTimerId);
			this.setState({autoSpinTimerId: null, autoSpin: false});
			return
		}
		
		
		this.makeSpin();
		
		const autoSpinTimerId = setInterval(() => {
			this.makeSpin();
		}, 2000);
		this.setState({autoSpinTimerId, autoSpin: true});
	}
    

	onGamble = () => {
	   if (this.state.spin[0].winStatus) {
		 
		   if (this.state.autoSpinTimerId){
			clearInterval(this.state.autoSpinTimerId);
			this.setState({autoSpinTimerId: null, autoSpin: false});
		   }
		   
		   const newSpin = this.state.spin.map(spin => {
			   return {...spin, winStatus: false}
		   });
		   this.setState({spin: newSpin}); 
	   }	
	}
	
	
    componentDidMount() {
		
		this.setState ({
			spin: [{
				firstSlot:  getRandomSimb (), 
				secondSlot: getRandomSimb (),
				thirdSlot: getRandomSimb (),
				winStatus: false,
			}]
		})
	}





    render() {
		const {firstSlot, secondSlot,thirdSlot, winStatus} = this.state.spin[0];
		const {balance, bet, lastWin, autoSpin} = this.state;
		
		
		
		return (
			<div className="slot">
			 	 <Header 
					  onIncreaseBet={ this.onIncreaseBet}
					  onReduceBet={ this.onReduceBet}
					  balance={balance}
					  lastWin={lastWin}
					  bet={bet}/>
			    <Drums firstSlot={firstSlot}
					secondSlot={secondSlot}
					thirdSlot={thirdSlot}
					winStatus={winStatus}/>
				<Footer 
					onGamble={() => {this.onGamble()}}
					onStart={() => {this.onStart()}}
					onAutoSpin={() => {this.onAutoSpin()}}
					winStatus={winStatus}
					autoSpin={autoSpin}/>
			</div>
		)
	}
}





const simbols = [
	{url: "https://timesofindia.indiatimes.com/photo/67586673.cms", id: 0, price: 20},
	{url: "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/british-shorthair-card-large.jpg?bust=1535569902", id: 1, price: 40},
	{url: "https://cf.ltkcdn.net/cats/images/std/258873-425x274-maine-coon-cat-white.jpg", id: 2, price: 100}
];

function getRandomSimb (num = 3) {
	const rand = Math.floor(Math.random() * num);
	return simbols[rand];
}