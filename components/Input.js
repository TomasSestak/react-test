import React from 'react';

export default class Input extends React.Component {
	render() {
		return (
			<div className="input">
				<input type="text" className="input__item" value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.onChange} onKeyPress={this.props.onKeyPress} />
				<style jsx>{`
		        .input {
		        }
		        
		        .input__item {
		            padding: 10px 15px;
		            border: 1px solid #ccc;
		            border-radius: 10px;
		            box-shadow: 0 0 5px 3px rgba(0, 0, 0, .05);
		            color: rgba(0, 0, 0, .5);
		            outline: none;
		            min-width: 240px;
		        }


		      `}</style>
			</div>
		);
	}
}
