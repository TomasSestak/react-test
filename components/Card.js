import React from 'react';

export default class Card extends React.Component {
	render() {
		return (
			<article className="card">
				<h1 className="card__city">
					{this.props.result.name}
				</h1>
				<h2 className="card__temp">
					{Math.round(this.props.result.main.temp)} °C
				</h2>
				<p className="card__feels-like">
					feels like {Math.round(this.props.result.main.feels_like)} °C
				</p>
				<img src={`http://openweathermap.org/img/wn/${this.props.result.weather[0].icon}@2x.png`}
				     className="card__icon"/>
				<p className="card__weather">
					{this.props.result.weather[0].description}
				</p>
				<div className="card__bottom">
					{this.props.result.visibility ?
						<p className="card__visibility"><strong>visibility:</strong> {this.props.result.visibility} m
						</p> : null}
					<p className="card__wind">
						<strong>speed of wind:</strong> {this.props.result.wind.speed} m/s
					</p>
				</div>
				<style jsx>{`
		        .card {
		          display: flex;
		          flex-direction: column;
		          border: 1px solid rgba(0, 0, 0, .05);
		          border-radius: 20px;
		          padding: 30px 20px 15px;
		          align-items: center;
		          text-align: center;
		          box-shadow: 0 2px 7px 5px rgba(0, 0, 0, .05);
		          color: rgba(0, 0, 0, .8);
		          min-width: 270px;
		        }
		        
		        .card__city {
		            font-size: 40px;
		            margin: 20px 0;
		            font-weight: 500;
		         }
		        
		        .card__temp {
		            margin-top: 15px;
		            margin-bottom: 0;
		            text-align: center;
		        }
		        
		        .card__feels-like {
		            font-size: 14px;
		            margin-top: 8px;
		            font-style: italic;
		        }
		        
		        .card__bottom {
		          padding-top: 30px;
		          display: flex;
		        }
		        
		        .card__wind {
		            display: flex; 
		            flex-direction: column;
		            padding: 0 15px;
		        }
		        
		        .card__visibility {
		            display: flex; 
		            flex-direction: column;
		            padding: 0 15px;
		        }
		        .card__weather {
		            margin-top: 0;
		            font-weight: 700;
		        }
		        strong {
		            white-space: nowrap;
		            font-weight: 600;
		        }
		       
		
		      `}</style>
			</article>
		);
	}
}
