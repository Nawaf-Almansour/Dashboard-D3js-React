import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Circle from "../components/shared/Circle";


class Home extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <BaseLayout className="cover">
                <h1>Hi Home</h1>
          <Circle/>
            </BaseLayout>
        )
    }


}
export  default Home;