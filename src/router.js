import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home/Home";
import Details from "./Details/Details";

export default class AppRouter extends Component{

    render() {

        return(
            <React.Fragment>
            <Router>
                <div>
                    {/* home */}
                    <Route exact path="/" render={(props) => <Home />} />

                    {/*Details*/}
                    <Route exact path="/details/:id" component={Details} />

                </div>
            </Router>
        </React.Fragment>

        )
    }
}
