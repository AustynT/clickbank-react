import React from "react";


const PostContainer = (props) => 
{
    let posts = props.data;
    	let postsArray = (posts.map((post, i) => {
			return (<props.childComponent key={i} post={post} />)
		}));
    return (
        <div className={props.classes}>
                <div className="row-start-2 flex justify-center">
                <div className="fixed">title here</div>
            </div>
            {postsArray}
        </div>        
    )
}

export default PostContainer;
