import React from 'react';

export default class Input extends React.Component {
	render() {
		return (
			<button className={'button button--' + this.props.variant} onClick={this.props.onClick}>
					<span className="button__label">
						{this.props.children}
					</span>
				<style jsx>{`
		        .button {
		            outline: none;
		            border: none;
		            cursor: pointer;
		            margin-top: 15px;   
		            padding: 11px 15px;
		            border-radius: 10px;
		            box-shadow: 0 0 5px 3px rgba(0, 0, 0, .05);
		            background-color: rgba(46,101,220, 0.9);
		            min-width: 240px;
		            position: relative;
		        }
		        .button::before {
					content: '';
					position: absolute;
					border-radius: 10px;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(46,101,220, 1);
					transition: all 0.2s ease-in-out;
				}
				.button:hover::before {
					opacity: 0;
					transform: scale(0.5,0.5);
				}

		        .button__label {
		            color: #fff;
		            z-index: 1;
		            position: relative;
		            letter-spacing: 0.03em;
		            will-change: letter-spacing;
		            font-size: 13px;
		            transition: letter-spacing 0.2s ease-in-out;
		        }
		        .button:hover .button__label {
		            letter-spacing: 0.06em;
		        }
		        
		      `}</style>
			</button>
		);
	}
}
