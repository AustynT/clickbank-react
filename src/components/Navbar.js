import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as topicActions from '../store/actions/index';
import { connect } from 'react-redux';

class Navbar extends Component 
{

    componentDidMount()
	{
		this.props.getTopics();
	}

    render(){


        console.log(this.props);
        const topics = this.props.topic.topics;
        let links = null;
        if(Array.isArray(topics))
        {
            links = topics.map(topic => {
                return (
                    <li key={topic.id}>
                        <Link to={{
                        pathname: `/topic/${topic.title}`, 
                        state: { topic }} 
                    }>{topic.title}
                    </Link></li>
                );
            });
        }
        return(
            <nav className="h-64 row-start-1 row-span-1 fixed w-full">
                <ul className="flex flex-row justify-evenly sticky">
                    <li><Link  to="/">Home</Link></li>
                    {links}
                </ul>
            </nav>
        );
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
		topic: state.topic
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);