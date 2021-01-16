import React from 'react'

const BLOGS = require("../data/blogs.json")

export default class Blogs extends React.PureComponent {
	displayBlogs() {
		let blogs = BLOGS
		let items = []
		blogs.forEach((blog, index) => {
			items.push(<div className="project-card">
					<div className="project-head font24">
						{blog.title}
					</div>
					<div className="project-date">
						{blog.date}
					</div>
					<div className="project-desc font18">
						{blog.description}
					</div>
					<div className="project-link1">
						<a href={blog.live_link} target="_blank" rel="noreferrer">Read on Medium</a>
					</div>
			</div>)
		})
		return items
	}

	render() {
		return (<div className="section-container" id="blogs">
			<div>
				<div className="heading">BLOGS</div>
				<div className="underline"></div>
				<div className="section-details">
					<div className="project-info">
						{ this.displayBlogs() }
					</div>
				</div>
			</div>
		</div>)
	}
}