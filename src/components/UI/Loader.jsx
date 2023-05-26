import React from "react";
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.center}>
            <div className={classes.ring}/>
        </div>
    )
};

export default Loader;