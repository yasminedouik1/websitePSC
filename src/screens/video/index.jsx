import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

function VideoPage() {
    return (
        <div className="video-container">
            <h1 className="video-title">
                <FontAwesomeIcon icon={faVideo} style={{ marginRight: '10px', color: '#000' }} />
                Court-métrage Tamazirna
            </h1>
            <p className="video-description">
                Ce court-métrage a été réalisé à <strong>Tamazret</strong>, un village amazigh du Sud tunisien,
                dans le but de <strong>préserver et valoriser la culture amazighe</strong>. Il met en lumière les traditions, les paysages,
                et les témoignages des habitants.
            </p>

            <div className="video-wrapper">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=GUtFi-_jhLM"
                    controls
                    width="80%"
                    height="80%"
                />
            </div>
        </div>
    );
}

export default VideoPage;