import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Fade from 'react-reveal/Fade';


class About extends React.Component {




    render() {
        return (
            <BaseLayout className="cover">
                <div>
                    <Fade left>
                        <h1 style={{color:"#fff"}} >React Reveal</h1>
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="hero-welcome-text">
                        <h1>
                            Welcome to the  website What Is Data Visualization? Definition, Examples...
                        </h1>
                    </div>
                </Fade>
            </BaseLayout>
        )
    }


}

export default About;