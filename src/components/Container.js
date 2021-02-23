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
			<div className=" col-start-3 col-end-11 row-start-2 row-span-3 overflow-y-scroll">
                <Switch>
                    <Route exact path="/topic/:title" component={TopicPost} />
                    <Route exact path="/" component={Home}/>
                </Switch>
			</div>
		)
    }
}


export default Container;