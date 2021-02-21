import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import * as topicActions from '../store/actions/index';


// import * as actionTypes from "../store/actions/actionsTypes";

class TopicPost extends Component
{
	componentDidMount = () =>
	{
		const {title, id} = this.props.location.state.topic;
		this.props.getPosts(id);
	}

	render = () =>
	{
		let posts = this.props.posts.posts;
		let postsArray = posts.map(post => {
			console.log(post);
		});
		return(
			<div>
				<div>Posts Page</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>
{
	return {
		getPosts: (id) => dispatch(topicActions.initPosts(id))
	}
}

const mapStateToProps = (state) =>
{
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopicPost));