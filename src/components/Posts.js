import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

// import * as actionTypes from "../store/actions/actionsTypes";
import * as topicActions from '../store/actions/index';


class Post extends Component
{
	render()
	{
		const { topics }  = this.props;

		let persons;
		if(Array.isArray(topics))
		{
			let persons = (
				topics.map(topic => {
				return topic;
			}));
		}

		console.log(persons);

		return(
			<div>
				<div>Posts Page</div>
				<div><Link to="/">Home</Link></div>
			</div>
		)
	}
}

export default Post;