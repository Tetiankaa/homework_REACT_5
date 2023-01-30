import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";

const Posts = ({postId}) => {
    const [post, setPost] = useState(null);


    useEffect(()=>{
        postsService.getById(postId).then(({data})=> {
            console.log(data);
            setPost(data)
        })
    },[])

    return (
        <div>
            {post &&
                <>
                    <div>id:{post.id}</div>
                    <div>userId:{post.userId}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.body}</div>
                </>
            }

        </div>
    );
};

export {Posts};