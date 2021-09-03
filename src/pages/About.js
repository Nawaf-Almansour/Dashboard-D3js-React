import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Fade from 'react-reveal/Fade';
import Video from "../components/shared/Video";


class About extends React.Component {


    render() {
        return (
            <BaseLayout className="cover">
                <div>
                    <Fade left>
                        <h1 style={{color: "#fff"}}>Data visualization with React D3</h1>
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="hero-welcome-text">
                        <h1>
                            Welcome to the website What Is Data Visualization? Definition, Examples...
                        </h1>
                    </div>
                </Fade>
                <div>
                    <Video/>
                </div>
            </BaseLayout>
        )
    }


}

export default About;