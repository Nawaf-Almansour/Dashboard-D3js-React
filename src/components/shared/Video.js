import React, { useEffect } from "react";
import YouTube from "react-youtube";


let cElement = null;

function Video(props) {
    console.log(props);
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }
    };

    useEffect(() => {
    }, []);

    const _onReady = event => {
        cElement = event;
        // event.target.playVideo();
    };

    const _onStateChange = event => {
        // event.target.pauseVideo()
    };
    return (
        <YouTube
            videoId={"VyhLRJVoIrI"}
            opts={opts}
            onReady={_onReady}
            onStateChange={_onStateChange}
        />
    );
}

export default Video