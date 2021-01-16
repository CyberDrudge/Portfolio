import React from 'react'

const LINKEDIN_URL = "https://linkedin.com/in/satyamsaxena197/"
const GITHUB_URL = "https://github.com/CyberDrudge"
const MEDIUM_URL = "https://medium.com/@cyberdrudge"
const HACKERRANK_URL = "https://hackerrank.com/CyberDrudge"

export default class Header extends React.PureComponent {
	render() {
		return (<div className="sidenav text-center">
			<div className="font24 mt-50">Satyam Saxena</div>
			<div className="side-sections">
				<a className="btn" href="#home">Home</a>
				<a className="btn" href="#about">About</a>
				<a className="btn" href="#projects">Projects</a>
				<a className="btn" href="#blogs">Blog</a>
				<a className="btn" href="#contact">Contact</a>
			</div>
			<div class="contact-info">
				<a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><i class="fa fa-linkedin" id="linkedin" aria-hidden="true"></i></a>
				<a href={GITHUB_URL} target="_blank" rel="noreferrer"><i class="fa fa-github" id="git" aria-hidden="true"></i></a>
				<a href={MEDIUM_URL} target="_blank" rel="noreferrer"><i class="fa fa-medium" aria-hidden="true"></i></a>
				<a href={HACKERRANK_URL} target="_blank" rel="noreferrer"><i class="fab fa-hackerrank"></i></a>
			</div>
		</div>)
	}
}