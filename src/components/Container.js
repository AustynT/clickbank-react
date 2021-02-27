import React, { Component } from 'react';
import Home from './Home';
import TopicPage from './TopicPage';
import {Route,Switch} from 'react-router-dom';
import * as topicActions from '../store/actions/index';
import { connect } from 'react-redux';




class Container extends Component
{    
	render()
	{
		return(
			<div className="container col-start-2 col-end-11 row-start-1 row-end-7 mt-14 overflow-auto">
                <Switch>
                    <Route exact path="/topic/:title" component={TopicPage} />
                    <Route exact path="/" component={Home}/>
                </Switch>
			</div>
		)
    }
}


export default Container;