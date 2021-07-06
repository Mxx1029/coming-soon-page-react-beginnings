import React from 'react';
import './Teaser.css';

class Teaser extends React.Component {
    render() {
        return (
            <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MBVKeli0MWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Teaser;