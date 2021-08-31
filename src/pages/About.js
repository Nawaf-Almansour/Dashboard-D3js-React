import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class About extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth} className="cover">
                <h1>Hi About</h1>
            </BaseLayout>
        )
    }


}
export  default About;