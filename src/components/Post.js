import React from "react";

const Post = (props) => 
{
    return(
        <div className="my-10 text-center w-50">
            <div className="text-lg my-1">
                { props.post.title }
            </div>
            <div className="text-base">
                {props.post.body}
            </div>
        </div>
        )
}

export default Post;