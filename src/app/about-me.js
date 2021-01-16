import React from 'react'

const TECH_SKILLS = ["Python", "Django", "Data Structures", "Algorithms", "ReactJS", "Elastic Search", "REST APIs"]
const RESUME_LINK = "https://drive.google.com/file/d/146HlylbxZsQykUBpTBfz9LSnND7VXsoF/view?usp=sharing"

export default class AboutMe extends React.PureComponent {
	displayTechSkills() {
		let rows = []
		TECH_SKILLS.forEach((skill, index) => {
			rows.push(<li className="mt-10">{skill}</li>)
		})
		return rows
	}
	render() {
		let paraTop = "I am a Software Developer, a CS undergraduate from JIIT, Noida.\
			I am highly skilled in Python (Django) and also have experience of working with ReactJS, REST APIs, and using Algorithms & Data Structures.\
			I am looking to acquire professional skills and like being upto-date with the futuristic technologies."
		let paraMiddle = "I started off by learning Data Structures and Algorithms using Python. To Test and further develop my skills, I practiced Competitive Coding on HackerRank, where I earned Gold ⭐ Badges in Python and Problem Solving."
		let paraBottom = "I'm quietly confident, naturally curious, and continuously working on improving myself one step at a time. I like developing things, playing video games and watching Anime."
		
		return (<div className="section-container" id="about">
		<div>
			<div className="heading">ABOUT ME</div>
			<div className="underline"></div>
		</div>
		<div className="section-details row font18 mt-50 color-grey">
			<div className="col-sm-8 text-left pl-75">
				<div className="mt-50">
					<p className="about-details">{paraTop}</p>
					<p className="about-details">{paraMiddle}</p>
					<p className="about-details">{paraBottom}</p>
				</div>
				<div className="text-center mt-50">
					<a href={RESUME_LINK} className="btn contact-send" target="_blank">View Resume</a>
				</div>
			</div>
			<div className="col-sm-4 font24">
				<h1 className="color-blue">Tech Skills </h1>
				<ul>
					{ this.displayTechSkills() }
				</ul>
			</div>
		</div>
	</div>)
	}
}