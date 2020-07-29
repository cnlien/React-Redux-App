import React from 'react';
import Moment from 'react-moment';

import '../styles/header.scss'

const GlobalHeader = (props) => {

    return (
        <header className="appHeader">
            <h1 className="mainHeading">Global Covid 19 Statistics</h1>
            <span className="lastUpdatedLabel">Last Updated: </span>
            <Moment className="lastUpdatedTime" format="LL"><span>{props.date}</span></Moment>
        </header>
    )
}

export default GlobalHeader