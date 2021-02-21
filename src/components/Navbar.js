import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as topicActions from '../store/actions/index';
import { connect } from 'react-redux';

class Navbar extends Component {

    componentDidMount()
	{
		this.props.getTopics();
	}

    render(){

        const topics = this.props.topics;
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
            <nav className="navBar">
                <ul className="flex flex-row justify-evenly">
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
		topics: state.topic
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);