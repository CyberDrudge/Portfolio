import React from 'react'

export default class Footer extends React.PureComponent {
	render() {
		let text = "Satyam Saxena © 2021"
		return (<div className="section-footer text-center">
			<p className="font18">{text}</p>
	</div>)
	}
}