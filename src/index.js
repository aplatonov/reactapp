import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.timer = null;

		this.state = {
			milliseconds: 0,
		};

		this.interval = 98;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick();
		}, this.interval);
	}

	tick() {
		this.setState({
			milliseconds: this.state.milliseconds + this.interval,
		})
	}

	onClickStart = () => {
		if (!this.timer) { 
			this.timer = setInterval(() => {
				this.tick();
			}, this.interval);
		}
	};

	onClickStop = () => {
		clearInterval(this.timer);
		this.timer = null;
	};

	onInc = () => {
		this.setState({
			milliseconds: this.state.milliseconds + this.interval,
		})
	};

	onDec = () => {
		this.setState({
			milliseconds: this.state.milliseconds - this.interval,
		})
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	msToTime = (s) => {
		let ms = s % 1000;
		s = (s - ms) / 1000;
		let secs = s % 60;
		s = (s - secs) / 60;
		let mins = s % 60;
		let hrs = (s - mins) / 60;

		let pad = (n, z = 2) => ('00' + n).slice(-z);

		return hrs + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
	}

	render() {
		return (
			<div className="timer">
				<div>Таймер</div>
				<h1 className="counter">{this.msToTime(this.state.milliseconds)}</h1>
				<button className="buttonTrue" onClick={this.onClickStart}>Start</button>
				<button className="buttonFalse" onClick={this.onClickStop}>Stop</button>
				<br />
				<button className="buttonTrue" onClick={this.onInc}>Inc</button>
				<button className="buttonFalse" onClick={this.onDec}>Dec</button>
			</div>
		)
	}
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Timer interval="1000"/>, rootElement);

module.hot.accept();