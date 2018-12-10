import React, { Component } from 'react';
import ReactGA from 'react-ga';


const reactGAEvent = (action , categorv) => {
    ReactGA.event({
        categorv,
        action
    })
}
export default reactGAEvent;