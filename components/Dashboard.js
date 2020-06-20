import React from 'react';
import { SearchInput } from '@bit/segmentio.evergreen.search-input';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import Card from './Card';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: 'Prague',
			data: null,
			response: null
		};
		this.changeValue = this.onChange.bind(this);
		this.searchValue = this.onSubmit.bind(this);
		this.getGeoLocation = this.onClick.bind(this);

		this.fetchByCity();
	}

	onChange(event) {
		this.setState({ inputValue: event.target.value });
	}

	onSubmit(event) {
		if (event.key.toLowerCase() !== 'enter') return;
		this.fetchByCity();
	}

	onClick() {
		const options = {
			enableHighAccuracy: true,
			timeout: 0,
			maximumAge: 5000
		};
		const success = (position) => {
			console.log(position);
			this.fetchByLocation(position.coords);
		}
		const error = (err) => {
			console.log(err);
		}
		navigator.geolocation.getCurrentPosition(success, error, options);
	}

	async fetchByCity () {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=93edad886f0b6b1e623f3a4e2f3553f3&units=metric`);

		console.log(response);
		if (!response.ok) {
			alert(response.statusText);
			return false;
		}

		const data = await response.json();

		this.setState({data});
	}

	async fetchByLocation ({lat, lon}) {
		console.log(lat, lon);
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=93edad886f0b6b1e623f3a4e2f3553f3`);

			const data = JSON.parse((await response.text())
				.replace('test(', '')
				.replace(')', ''));


			this.setState({data});
		} catch(err) {
			console.log(err);
		}

	}

	render() {
		return (
		<section className="dashboard">
			<div className="dashboard__head">
				<h3 className="dashboard__instruction">
					Type city and press enter :o)
				</h3>
				<div>
					<SearchInput placeholder="Search city ..." value={this.state.inputValue} onChange={this.changeValue} onKeyPress={this.searchValue}/>
				</div>
		{/*		<div>
					<Button variant="primary" size="sm" onClick={this.getGeoLocation}>
						Use geolocation
					</Button>
				</div>*/}
			</div>

			<div className="dashboard__body">
				{this.state.data ? <Card result={this.state.data} /> : null}

			</div>
		<ReactBootstrapStyle />
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

export default Dashboard;
