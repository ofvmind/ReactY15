import React from "react";
import classes from "./Gif.module.css";

const Gif = () => {
    return (
        <img className={classes.gif} src="./drink.gif" />
    );
};

export default Gif;