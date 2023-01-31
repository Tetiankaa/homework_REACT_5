import css from './Button.module.css';

import React from 'react';

const Button = ({children, click}) => {
    return (
        <div className={css.Button} onClick={click}>
            {children}
        </div>
    );
};

export {Button};