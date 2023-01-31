import React, {useContext} from 'react';
import {Comments} from "../../components";
import {CreateContext} from "../../index";

const CommentsPages = () => {
    const context = useContext(CreateContext);
    context.status = false.toString();
    Object.assign(context,{gender:'woman'})
    delete context.age

    return (
        <div>
            <Comments/>
        </div>
    );
};

export {CommentsPages};