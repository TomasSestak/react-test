import React from 'react';

class Card extends React.Component {
	render() {
		return (
		<article className="card">
			<h2 className="card__title">
				{this.props.result.title}
			</h2>
			<p className="card__post">
				{this.props.result.body}
			</p>
			<style jsx >{`
		        .card {
		          display: flex;
		          flex-direction: column;
		          border: 1px solid #ccc;
		          border-radius: 20px;
		          padding: 0 20px 30px;
		          height: 100%;
		        }
		        
		        .card__title {
		            color: rgba(0, 0, 0, 0.9);
		            font-weight: normal;
		            text-transform: uppercase;
		        }
		        
		        .card__post {
		            line-height: 1.5;
		            color: rgba(0, 0, 0, 0.8);
		        }
		
		      `}</style>
		</article>
		);
	}
}

export default Card;
