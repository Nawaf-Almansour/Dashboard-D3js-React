import React, {lazy, Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/main.scss';
import {Route, Redirect, Switch} from "react-router-dom";
import {retry} from "./utils/commonFunctions";

const Home = lazy(() => retry(() => import("./pages/Home")));
const About = lazy(() => retry(() => import("./pages/About")));
const Map = lazy(() => retry(() => import("./pages/Map")));

class App extends React.Component {

    render() {
        const pages = [
            {
                pageLink: "/",
                view: Home,
                displayName: "Home",
                showInNavbar: true,
            },
            {
                pageLink: "/about",
                view: About,
                displayName: "About",
                showInNavbar: true,
            },
            {
                pageLink: "/map",
                view: Map,
                displayName: "Map",
                showInNavbar: true,
            },
        ];
        return (

            <Suspense fallback={<div/>}>
                <Switch>
                    {pages.map((page, index) => {
                        return (
                            <Route
                                exact
                                path={page.pageLink}
                                render={({match}) => <page.view/>}
                                key={index}
                            />
                        );
                    })}
                    <Redirect to="/"/>
                </Switch>
            </Suspense>
        );
    }
}

export default App;
