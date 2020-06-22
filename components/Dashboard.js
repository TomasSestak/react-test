import React from 'react';
import gsap from 'gsap';
import Card from './Card';
import Input from './Input';
import Button from './Button';
gsap.registerPlugin();


export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: 'Prague',
			data: null
		};
		this.myRef = React.createRef();
		this.changeValue = this.onChange.bind(this);
		this.searchValue = this.onSubmit.bind(this);
		this.getGeoLocation = this.onClick.bind(this);
	}

	componentDidMount() {
		this.timeline = gsap.timeline({paused: true}).to(this.myRef.current, 2, {opacity: 1, y: '0px'});
		this.fetchByCity();
	}

	resetAnimation() {
		gsap.set(this.myRef.current, {opacity: 0, y: '-20px'});
	}


	onChange(event) {
		this.setState({inputValue: event.target.value});
	}

	onSubmit(event) {
		if (event.key.toLowerCase() !== 'enter') return;
		this.fetchByCity();
	}

	onClick() {
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 5000
		};
		const success = (position) => {
			this.fetchByLocation(position.coords);
		}
		const error = (err) => {
			alert(err.message);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);
	}

	async responseAndState(passedResponse) {
		if (!passedResponse.ok) {
			alert(passedResponse.statusText);
			return;
		}

		const data = await passedResponse.json();

		this.setState({data});

		this.timeline.play();
		this.timeline.seek(0.001);
	}

	async fetchByCity() {

		this.resetAnimation();

		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=93edad886f0b6b1e623f3a4e2f3553f3&units=metric`);

		this.responseAndState(response);
	}

	async fetchByLocation({latitude, longitude}) {

		this.resetAnimation();

		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=93edad886f0b6b1e623f3a4e2f3553f3&units=metric`);

		this.responseAndState(response);
	}

	render() {
		return (
			<section className="dashboard">
				<div className="dashboard__head">
					<h3 className="dashboard__instruction">
						Type city and press enter :o)
					</h3>
					<div>
						<Input value={this.state.inputValue} placeholder="Search city ..." onChange={this.changeValue} onKeyPress={this.searchValue}/>
					</div>
					<div>
						<Button variant="primary" onClick={this.getGeoLocation}>
							Use your current location
						</Button>
					</div>
				</div>

				<div className="dashboard__body" ref={this.myRef}>
					{this.state.data ? <Card result={this.state.data}/> : null}

				</div>
				<style jsx global>{`
					.dashboard {
						padding-bottom: 40px;
					}
					.dashboard__instruction {
						text-align: center;
					}
					.dashboard__head {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					.dashboard__body {
						transform: translateY(-20px);
						opacity: 0;
						margin-top: 30px;
						display: flex;
						justify-content: center;
					}
				`}
				</style>
			</section>
		);
	}
}
