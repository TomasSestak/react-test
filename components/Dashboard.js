import React from 'react';
import Card from './Card';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {

		const fetchPosts = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const json = await response.json();
			this.setState({data: json});
		}

		fetchPosts();
	}


	render() {
		return (
		<section className="dashboard">
			<div className="container">

				{this.state.data ? this.state.data.map(result => <div className="column" key={result.id}> <Card result={result}/> </div> ) : null}

			</div>
		<style jsx global>{`
			.dashboard {
				padding-bottom: 40px;
			}
		`}
		</style>
		</section>
		);
	}
}

export default Dashboard;
