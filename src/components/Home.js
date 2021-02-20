import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as actionTypes from "../store/actions/actionsTypes";
import * as topicActions from '../store/actions/index';


class Home extends Component
{
	componentDidMount()
	{
		this.props.getTopics();
	}

	render()
	{
		console.log(this.props.topics);
		return(
			<div>Hello</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>
{
	return {
		getTopics: () => dispatch(topicActions.initTopics())
	}
}

const mapStateToProps = (state) =>
{
	return {
		topics: state.topic
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);