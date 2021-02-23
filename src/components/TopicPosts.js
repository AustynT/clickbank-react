import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import * as topicActions from '../store/actions/index';
import Post from "./Post";


// const TopicPost = (props) => {
// 	const { id } = props.location.state.topic;
// 	useEffect(() => {
// 		props.getPosts(id);
// 	}, [id])

// 	let posts = props.posts.posts;
// 	let postsArray = (posts.map((post, i) => {
// 		return (<Post key={i} post={post} />)
// 	}));

// 	return (
// 		<div>
// 			<div>Posts Page</div>
// 			{ postsArray}
// 		</div>
// 	)
// }
// import * as actionTypes from "../store/actions/actionsTypes";

class TopicPost extends Component {
	componentDidMount = () =>
	{
		const { id } = this.props.location.state.topic;
		this.props.getPosts(id);
	}

	componentDidUpdate = (prevProps) => {
		const { id: prevId } = prevProps.location.state.topic;
		const { id } = this.props.location.state.topic;

		if (id !== prevId) {
			this.props.getPosts(id);
		}
	}

	render = () => {
		let posts = this.props.posts.posts;
		let postsArray = (posts.map((post, i) => {
			return (<Post key={i} post={post} />)
		}));

		return (
			<div>
				<div className="start-row-2">Posts Page</div>
				{ postsArray}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPosts: (id) => dispatch(topicActions.initPosts(id))
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopicPost));