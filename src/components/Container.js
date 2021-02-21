import React, { Component } from 'react';
import Home from './Home';
import TopicPost from './TopicPosts';
import {Route,Switch} from 'react-router-dom';
import * as topicActions from '../store/actions/index';
import { connect } from 'react-redux';




class Container extends Component
{    
	render()
	{
		return(
			<div>
                <Switch>
                    <Route exact path="/topic/:title" component={TopicPost} />
                    <Route exact path="/" component={Home}/>
                </Switch>
			</div>
		)
    }
}



// const mapDispatchToProps = (dispatch) =>
// {
// 	return {
// 		getTopics: () => dispatch(topicActions.initTopics())
// 	}
// }

// const mapStateToProps = (state) =>
// {
// 	return {
// 		topics: state.topic
// 	}
// }


export default Container;