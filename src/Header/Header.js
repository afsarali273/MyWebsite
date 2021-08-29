import React,{Component} from "react";
import './Header.css'
import {AppBar, Button, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            anchorEl:null,
            setAnchorEl:null
        }

    }
    onClickHandle=()=>{
        this.props.history.push("/");
    }

    onClickHandleAboutMe=()=>{
        this.props.history.push("/about-me");
    }

    onClickHandleContact=()=>{
        this.props.history.push("/contact");
    }

     handleClick = (event) => {
        this.setState({
            anchorEl:event.currentTarget
        })
    };

     handleClose = () => {
         this.setState({
             anchorEl:null
         })
    };

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
                                {/*<Button color="inherit" >*/}
                                {/*    Courses*/}
                                {/*</Button>*/}
                                <div>
                                    <Button color={"inherit"} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                       <Typography>
                                           Courses
                                       </Typography>

                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={this.state.anchorEl}
                                        keepMounted
                                        open={Boolean(this.state.anchorEl)}
                                        onClose={this.handleClose}
                                    >
                                        <MenuItem onClick={this.handleClose}>Selenium with Java</MenuItem>
                                        <MenuItem onClick={this.handleClose}>Google API</MenuItem>
                                        <MenuItem onClick={this.handleClose}>Appium</MenuItem>
                                        <MenuItem onClick={this.handleClose}>WebDriverIO</MenuItem>
                                        <MenuItem onClick={this.handleClose}>Cucumber</MenuItem>
                                    </Menu>
                                </div>



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
