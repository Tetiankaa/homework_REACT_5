import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId,id,name,email,body} = comment;

    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>comment:{body}</div>
            <Link to={id.toString()}>Show post</Link>
        </div>
    );
};

export {Comment};