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
			data: null
		};
		this.changeValue = this.onChange.bind(this);
		this.searchValue = this.onSubmit.bind(this);
		this.getGeoLocation = this.onClick.bind(this);
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
		try {
			const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=${this.state.inputValue}`, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
					"x-rapidapi-key": "44c48fa58dmsh340edfd389d9b60p1f3e78jsn1ba620b94aa6"
				}
			});

			const data = JSON.parse((await response.text())
				.replace('test(', '')
				.replace(')', ''));

			this.setState({data});
		} catch(err) {
			console.log(err);
		}
	}

	async fetchByLocation ({lat, lon}) {
		console.log(lat, lon);
		try {
			const response = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=93edad886f0b6b1e623f3a4e2f3553f3`);

			const data = JSON.parse((await response.text())
				.replace('test(', '')
				.replace(')', ''));


			this.setState({data});
		} catch(err) {
			console.log(err);
		}

		console.log(this.state.data);
	}

	render() {
		return (
		<section className="dashboard">
			<div className="dashboard__head">
				<div>
					<SearchInput placeholder="Search city ..." value={this.state.inputValue} onChange={this.changeValue} onKeyPress={this.searchValue}/>
					<p>
						{this.state.inputValue}
					</p>
				</div>
				<div>
					<Button variant="primary" size="md" onClick={this.getGeoLocation}>
						Use geolocation
					</Button>
				</div>
			</div>

			<div className="container">
				{/*{this.state.data ? this.state.data.map(result => <div className="column" key={result.id}> <Card result={result}/> </div> ) : null}*/}

			</div>
		<ReactBootstrapStyle />
		<style jsx global>{`
			.dashboard {
				padding-bottom: 40px;
			}
			.dashboard__head {
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
