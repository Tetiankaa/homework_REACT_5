import  {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments,setComment] = useState([]);

    useEffect(()=>{
        commentsService.getAll().then(({data})=> setComment([...data]))
    },[]);

    return (
        <div>
            {comments.map( comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};