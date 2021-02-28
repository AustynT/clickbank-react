import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import * as topicActions from '../store/actions/index';
import Post from "./Post";
import Ad from "./Ad";

class TopicPage extends Component {
	componentDidMount = () =>
	{
		const { id } = this.props.location.state.topic;
		this.props.getPosts(id);
		this.props.getAds(id);
	}

	componentDidUpdate = (prevProps) => {
		const { id: prevId } = prevProps.location.state.topic;
		const { id } = this.props.location.state.topic;

		if (id !== prevId) {
			this.props.getPosts(id);
			this.props.getAds(id);
		}
	}

	render = () => {
		let title = this.props.location.state.topic.title
		let posts = this.props.posts.posts;
		let ads = this.props.ads.ads.ads;
		let adsArray;
		console.log(ads);
		let postsArray = (posts.map((post, i) => {
			return (<Post key={i} post={post} />)
		}));

		if(Array.isArray(ads))
		{
			adsArray = (ads.map((ad, i) => {
				return (<Ad key={i} ad={ad} />)
			}));
		}

		return (
			<div className="h-full grid grid-cols-14 grid-rows-6 " >
				<div className=" col-start-1 col-span-1 row-start-1 row-span-1 flex justify-center">
					<div className="">{title}</div>
				</div>
				<div className="col-start-4 col-span-9 row-start-1 row-end-7 overflow-auto">
					{ postsArray}
				</div>
				<div className="col-start-1 col-span-2 row-span-5">
				<div className="flex items-center flex-col h-full">
						<div className="h-full">{adsArray}</div>
					</div>
				</div>
				<div className="col-start-13 col-span-2 row-span-5">
					<div className="flex items-center flex-col h-full">
						<div className="h-full">ads</div>
						<div className="h-full">ads</div>
						<div className="h-full">ads</div>
						<div className="h-full">ads</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPosts: (id) => dispatch(topicActions.initPosts(id)),
		getAds: (id) =>  dispatch(topicActions.initAds(id)) 
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		ads: state.ads
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopicPage));




//React hook


// const TopicPost = (props) => {
// 	const { id } = props.location.state.topic;
// 	useEffect(() => {
// 		props.getPosts(id);
// 	}, [id])

// 	let posts = props.posts.posts;
// 	let postsArray = (posts.map((post, i) => {
// 		return (<Post key={i} post={post} />)
// 	}));

// 	return (
// 		<div>
// 			<div>Posts Page</div>
// 			{ postsArray}
// 		</div>
// 	)
// }
// import * as actionTypes from "../store/actions/actionsTypes";