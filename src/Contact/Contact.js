import React, {Component} from "react";
import Header from "../Header/Header";
import {
    Button, Card,
    TextField,
    Typography,
    withStyles
} from "@material-ui/core";
import * as emailjs from "emailjs-com";
import emailkey from "../Data/emailkey";

const customStyles = theme => ({
    root: {
        width: "40%",
        '& > *': {
            margin: theme.spacing(2),
            width: '90%',
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
});

 class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            showModalText:false
        }
        this.submitEmail=this.submitEmail.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
    }




    submitEmail(e){
        e.preventDefault();

        const templateParams = {
            name: this.state.name,
            email:this.state.email,
            message: this.state.message
        };

        emailjs.send("default_service", emailkey.TEMPLATE_ID, templateParams,emailkey.USER_ID)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);

            }, function(error) {
                console.log('FAILED...', error);
            });
        this.setState({
           showModalText:true,
            name: '',
            email: '',
            message: ''
        })
    }

    displayMessage(){
        if(this.state.showModalText)
            return "block"
        else
            return "none"
    }

    render() {
        const { classes } = this.props;

       const  value = this.displayMessage();
       console.log(value);
        return (
            <div>
                <Header/>

                <div>

                    <div className={"container"}>
                        <Card className={classes.root}>

                                <Typography variant={"h6"} style={{marginLeft:"30%",fontWeight:"bold",fontFamily:"'Chewy'"}} >
                                    CONTACT ME
                                </Typography>

                                <form className={classes.root} noValidate autoComplete="true" onSubmit={this.submitEmail}>
                                    <TextField  label="Name" variant="outlined" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
                                    <TextField  type={"email"} label="Email" variant="outlined"  value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>
                                    <TextField
                                        label="Message"
                                        multiline
                                        minRows={6}
                                        value={this.state.message}
                                        variant="outlined"
                                        onChange={(e)=> this.setState({message:e.target.value})}
                                    />
                                    <Button type={"submit"} size={"medium"} color={"primary"} variant={"contained"} title={"Submit"}>
                                        Submit
                                    </Button>
                                </form>

                            <div>

                           <Typography style={{display: this.displayMessage(),fontFamily:"monospace",color:"green"}} variant={"body1"} > Thanks for writing to Me ! I will get back to you soon !  </Typography>

                            </div>

                        </Card>
                    </div>

                </div>
            </div>

        );
    }

}

export default withStyles(customStyles)(Contact);
