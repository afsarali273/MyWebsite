import React,{Component} from "react";
import './Header.css'
import {AppBar, Button, Toolbar} from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Header extends Component{
    constructor(props) {
        super(props);

    }
    onClickHandle=()=>{
        this.props.history.push("/");
    }

    onClickHandleAboutMe=()=>{
        this.props.history.push("/about");
    }

    onClickHandleContact=()=>{
        this.props.history.push("/contact");
    }

    render() {

        return(
            <AppBar position="sticky" style={{backgroundColor:"darkslategray"}}>
                <Toolbar>
                    <div className={"container1"}>
                        <div className={"mainTitle"} onClick={this.onClickHandle}>
                            Open Source Automation
                        </div>

                        <div className={"second-part"}>
                            <div>
                                <Button color="inherit" onClick={this.onClickHandle}>
                                    Home
                                </Button>
                            </div>
                            <div>
                                <Button color="inherit" >
                                    Courses
                                </Button>
                            </div>
                            <div>
                                <Button color="inherit" onClick={this.onClickHandleAboutMe}>
                                    About me
                                </Button>
                            </div>

                            <div>
                                <Button color="inherit" onClick={this.onClickHandleContact} >
                                    Contact
                                </Button>
                            </div>

                        </div>
                    </div>

                </Toolbar>

            </AppBar>
        )
    }
}

export default withRouter(Header);
