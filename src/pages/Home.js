import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import RectangleChart from "../components/shared/RectangleChart";
import LineChart from "../components/shared/LineChart";
import Scatterplot from "../components/shared/Scatterplot";
import Chart from "../components/charts/LineChart/Chart/Chart";
import SynchronizedLineCharts from "../components/SynchronizedLineCharts/SynchronizedLineCharts";
import GroupedBar from "../components/charts/GroupedBar/GroupedBar";
import BrushZoom from "../components/charts/BrushZoom/BrushZoom";


class Home extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <BaseLayout className="cover">
                <h1>Hi Home</h1>
          <RectangleChart/>
          <LineChart/>
          <Scatterplot/>
                <Chart />
                <SynchronizedLineCharts/>
                <GroupedBar/>
                <BrushZoom/>
            </BaseLayout>

        )
    }


}
export  default Home;