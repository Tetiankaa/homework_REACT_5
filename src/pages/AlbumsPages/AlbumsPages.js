import React, {useContext} from 'react';
import {Albums} from "../../components/Albums/Albums";
import {CreateContext} from "../../index";
import {Button} from "../../components/Button/Button";


const AlbumsPages = () => {

    const context = useContext(CreateContext);
    return (
        <div>
            {/*<div>name:{context.name}</div>*/}
            {/*<div>age:{context.age}</div>*/}
            {JSON.stringify(context)}
            <Button click={()=>prompt("Слава Україні")}>CLICK ME</Button>
            <Albums/>
        </div>
    );
};

export {AlbumsPages};