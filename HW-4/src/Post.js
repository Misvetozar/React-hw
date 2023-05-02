import React from 'react'

export default class Post extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: this.props.title,
			body: this.props.body,
			userId: this.props.userId,
			id: this.props.id,
		}
	}

	onDelete = e => {
		this.props.onDelete(this.props.id, e)
	}

	render() {
		return (
			<li>
				<h4>{this.props.id}</h4>
				<h5>{this.props.title}</h5>
				<div>{this.props.body}</div>
				<button onClick={this.onDelete}>Удалить пост</button>
			</li>
		)
	}
}
