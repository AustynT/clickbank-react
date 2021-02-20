import React, { Component } from 'react';
import Home from './Home';
import Posts from './Posts';
import {Route,Switch} from 'react-router-dom';
import * as topicActions from '../store/actions/index';
import { connect } from 'react-redux';




class Container extends Component
{
    componentDidMount()
	{
		this.props.getTopics();
	}
    
	render()
	{
        const topics = this.props.topics;
		return(
			<div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/posts" component={() => <Posts topics={topics} />} />
                </Switch>
			</div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Container);