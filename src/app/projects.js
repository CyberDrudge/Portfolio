import React from 'react'

const PROJECTS = require("../data/projects.json")

export default class Projects extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {selectedProjectType:"Using Python"}
		this.displayProjects = this.displayProjects.bind(this)
		this.changeSelectedProjectType = this.changeSelectedProjectType.bind(this)
	}

	changeSelectedProjectType(projectType) {
		const { selectedProjectType } = this.state
		this.setState({selectedProjectType: projectType})
	}

	displayProjectTypes() {
		const { selectedProjectType } = this.state
		let projects = PROJECTS
		let list = []
		let klass
		Object.keys(projects).forEach((projectType, index) => {
			klass = selectedProjectType == projectType ? "active-project-type" : ""
			list.push(<li className={`project-type ${klass}`} onClick={() => {this.changeSelectedProjectType(projectType)}}>{projectType}</li>)
		})
		return list
	}

	displayProjects() {
		const { selectedProjectType } = this.state
		let projects = PROJECTS[selectedProjectType]
		let items = []
		projects.forEach((project, index) => {
			items.push(<div className="project-card">
					<div className="project-head font24">
						{project.title}
					</div>
					<div className="project-desc font18">
						{project.description}
					</div>
					<div className="project-link2">
						<a href={project.github_link} target="_blank" rel="noreferrer">VIEW CODE ON GITHUB</a>
					</div>
					{project.live_link &&<div className="project-link1">
						<a href={project.live_link} target="_blank" rel="noreferrer">VISIT LIVE</a>
					</div>}
			</div>)
		})
		return items
	}

	render() {
		return (<div className="section-container section-type-2" id="projects">
			<div>
				<div className="heading">PROJECTS</div>
				<div className="underline"></div>
				<div className="section-details">
					<ul className="project-types font18">
						{ this.displayProjectTypes() }
					</ul>
					<div className="project-info">
						{ this.displayProjects() }
					</div>
				</div>
			</div>
		</div>)
	}
}