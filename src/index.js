import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.timer = null;

		this.state = {
			milliseconds: 0,
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick();
		}, 100);
	}

	tick() {
		this.setState({
			milliseconds: this.state.milliseconds + 1,
		})
	}

	onClickStart = () => {
		if (!this.timer) { 
			this.timer = setInterval(() => {
				this.tick();
			}, 100);
		}
	};

	onClickStop = () => {
		clearInterval(this.timer);
		this.timer = null;
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div>
				<h1>{this.state.milliseconds}</h1>
				<button onClick={this.onClickStart}>Start</button>
				<button onClick={this.onClickStop}>Stop</button>
			</div>
		)
	}
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Timer />, rootElement);

module.hot.accept();