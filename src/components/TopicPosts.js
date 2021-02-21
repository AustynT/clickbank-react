import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";


// import * as actionTypes from "../store/actions/actionsTypes";

class TopicPost extends Component
{
	render()
	{
		const {topic} = this.props.location.state;
		console.log(topic);
		return(
			<div>
				{topic.id}
				{topic.title}
				<div>Posts Page</div>
			</div>
		)
	}
}

export default withRouter(TopicPost);