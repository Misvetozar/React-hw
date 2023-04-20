import React, { Component } from 'react'
import Post from './Post'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			posts: [],
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						posts: result,
					})
				},
				error => {
					this.setState({
						isLoaded: true,
						error,
					})
				}
			)
	}

	addPost = () => {
		let id = Date.now()
		let newPost = {
			id: id,
			title: '',
			body: '',
			userId: '',
		}
		this.setState({ posts: [newPost, ...this.state.posts] })
	}

	deletePost = (id, e) => {
		let Posts = this.state.posts.filter(element => {
			return element.id !== id
		})
		this.setState({ posts: Posts })
	}

	render() {
		const { error, isLoaded, posts } = this.state
		if (error) {
			return <p> Error {error.message} </p>
		} else if (!isLoaded) {
			return <p> Loading... </p>
		} else {
			return (
				<ul>
					<button onClick={this.addPost}>Добавить пост</button>
					{posts.map(post => (
						<Post
							key={post.id}
							title={post.title}
							body={post.body}
							id={post.id}
							onDelete={this.deletePost}
						/>
					))}
				</ul>
			)
		}
	}
}
