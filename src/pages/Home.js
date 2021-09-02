import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import RectangleChart from "../components/shared/RectangleChart";
import LineChart from "../components/shared/LineChart";
import Scatterplot from "../components/shared/Scatterplot";
import Chart from "../components/charts/LineChart/Chart/Chart";
import SynchronizedLineCharts from "../components/SynchronizedLineCharts/SynchronizedLineCharts";
import GroupedBar from "../components/charts/GroupedBar/GroupedBar";
import BrushZoom from "../components/charts/BrushZoom/BrushZoom";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import Typed from 'react-typed';
import Flash from 'react-reveal/Flash';

import Example from '../components/charts/Pies/Pies';
import {Col, Container, Row} from "reactstrap";
import Fade from "react-reveal/Fade";

class Home extends React.Component {

    constructor() {
        super();
        this.roles = ['Dev','Tech'];
    }

    componentDidMount() {

    }

    render() {
        return (
            <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                        {/*<img src="/images/background-index.png"/>*/}
                    </div>
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper`}>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                    <Fade left>
                                                        <h2> Data visualization </h2>
                                                    </Fade>
                                                <Fade bottom>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my project and enjoin.
                                                </div>
                                                    </Fade>
                                            </div>
                                            <div className="shadow-custom">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <Fade bottom>
                                <div className="hero-welcome-text">
                                    <h1>
                                        Welcome to the  website What Is Data Visualization? Definition, Examples...
                                    </h1>
                                </div>
                                </Fade>
                                <Typed
                                    loop
                                    typeSpeed={70}
                                    backSpeed={70}
                                    strings={this.roles}
                                    fadeOutDelay={1000}
                                    loopCount={0}
                                    showCursor
                                    className="self-typed"
                                    cursorChar="|"
                                />
                                <div className="hero-welcome-bio">
                                    <h1>
                                        Let's take a look on my work.
                                    </h1>
                                </div>
                            </Col>
                            <Col md="6" xs="12"  lg="6"  className="hero-welcome-wrapper">
                                <Flash>
                                <RectangleChart/>
                                </Flash>
                            </Col>

                            <Col md="6" xs="12"  lg="6"  className="hero-welcome-wrapper">

                                <LineChart/>
                            </Col>

                            <Col md="6" xs="12"  lg="6"  className="hero-welcome-wrapper">

                                <Scatterplot/>
                            </Col>

                            <Col md="6" xs="12"  lg="6"  className="hero-welcome-wrapper">

                                <Chart/>
                            </Col>

                            <Col md="6" xs="12"  lg="6" className="hero-welcome-wrapper">

                                <SynchronizedLineCharts/>
                            </Col>

                            <Col md="6" xs="12"  lg="6"  className="hero-welcome-wrapper">

                                <GroupedBar/>
                            </Col>
                            <Col md="6" xs="12"  lg="6"  className="hero-welcome-wrapper">

                            <BrushZoom/>
                            </Col>

                            <Col md="6" xs="12"  lg="6"  className="hero-welcome-wrapper">

                                <div style={{height: "400px"}}>
                                    <ParentSize>{({width, height}) => <Example width={width}
                                                                               height={height}/>}</ParentSize>,

                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </BaseLayout>

        )
    }


}

export default Home;