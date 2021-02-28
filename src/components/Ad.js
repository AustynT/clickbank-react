import React from "react";

const Ad = (props) => 
{
    return(
        <div className="my-10 text-center w-50">
            <div className="text-lg my-1">
                { props.ad.title }
            </div>
            <div className="text-base">

                    <a href={props.ad.link} target="_blank" rel="noopener noreferrer">
                    <img src={props.ad.img} width={250} height={250} alt={`pic-${props.ad.id}`} />
                    </a>
            </div>
        </div>
        )
}

export default Ad;