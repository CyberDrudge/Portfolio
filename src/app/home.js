import React from 'react'

export default class Home extends React.PureComponent {
	render() {
		let intro = "Hey, I' m"
		let name = "Satyam Saxena"
		let text = "A Software Developer."
		return (<div className="section-container home" id="home">
		<div className="section-home text-center">
			<p className="font44">{intro} <span className="color-red">{name}</span>,</p>
			<p className="font36">{text}</p>
		</div>
	</div>)
	}
}