
import 'react-slideshow-image/dist/styles.css'

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import table from './gallery/table.jpg'
import setka from './gallery/setka2.jpg'
import howtoplay from './gallery/howtoplay2.jpg'
import area from './gallery/area.jpg'
import location from './gallery/location2.jpg'
import Video from './Video'

const Example = () => {
    

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${table})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${setka})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${howtoplay})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${area})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${location})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <Video/>
            </div>
        </Slide>
    );
};

export default Example;