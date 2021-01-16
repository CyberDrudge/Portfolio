import React from 'react'
import * as emailjs from 'emailjs-com'

export default class Contact extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			disabled: false,
			emailSent: null,
		}
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (event) => {
		const {name, email, message} = this.state
		// event.preventDefault();
		this.setState({
			disabled: true
		});

		// const {
		// 	REACT_APP_EMAILJS_RECEIVER: receiverEmail,
		// 	REACT_APP_EMAILJS_TEMPLATEID: templateId,
		// 	REACT_APP_EMAILJS_USERID: user,
		// } = env

		let templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		}

		this.sendFeedback(
			"portfolio_contact",
			templateParams,
			"user_0FwOefG7J7jnHN0Pm3Vt2",
		)
	}

	sendFeedback = (templateId, templateParams, user) => {
		emailjs.send("service_mail", templateId, templateParams, user)
		.then(res => {
			if (res.status === 200) {
				console.log("Successfully Sent")
				console.log(res)
			}
		})
		.catch(err => console.error("Failed to send feedback. Error: ", err))
	}

	render() {
		let msg = "Have a question or want to work together?"
		return (<div className="section-container section-type-2" id="contact">
		<div>
			<div className="heading">CONTACT</div>
			<div className="underline"></div>
		</div>
		<div className="section-details section-contact">
			<div>
				<p className="intro-text color-blue">{msg}</p>
			</div>
			<div className="contact-form">
				<div>
					<input className="form-control contact-field" id="full-name" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
				</div>

				<div>
					<input className="form-control contact-field" id="email" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
				</div>

				<div>
					<textarea className="form-control contact-field" id="message" name="message" type="textarea" rows="3" placeholder="Message" value={this.state.message} onChange={this.handleChange} />
				</div>

				<button className="btn contact-send" disabled={this.state.disabled} onClick={this.handleSubmit}>
					Send
				</button>

				{this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
				{this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
			</div>
		</div>
	</div>)
	}
}