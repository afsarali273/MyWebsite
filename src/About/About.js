import React, { Component } from "react";
import Header from "../Header/Header";
import { Typography } from "@material-ui/core";
import profilePic1 from '../Data/images/Afsar.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faWhatsappSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './About.css'
export default class About extends Component {

    navigateToUrl = (linkName) => {
        if (linkName === 'facebook') {
            window.open("https://www.facebook.com/afsar.ali.7374", "_blank")
        } else if (linkName === 'instagram') {
            window.open("https://www.instagram.com/afsar.ali.7374/", "_blank")
        } else if (linkName === 'twitter') {
            window.open("https://twitter.com/afsarali273", "_blank")
        } else if (linkName === 'whatsapp') {
            window.open("https://wa.me/6594657845", "_blank")
        } else if (linkName === 'linkedIn') {
            window.open("https://www.linkedin.com/in/afsar-ali-3465a556/", "_blank")
        }
    }

    render() {
        return (
            <div>
                <Header />

                <div className={"container2"}>
                    <div className={"profilePic"}>
                        <img src={profilePic1} alt="profilepic1" />
                    </div>
                    <div>
                        <div className={"tech-stack"}>
                            <Typography variant={"span"} component={"span"}>
                                <br />
                                <br />
                                Myself <b>Afsar Ali</b>,Test engineer by profession and developer by passion.I help community with testing related technical youtube videos.My goal is to help each and every test engineer who are in the early phase of their career and struggling to cope up with advanced concepts of
                                Test Automation , DevOps and some Development fundamentals.I am a proud indian and currently living in Singapore.
                            </Typography><br /><br />
                            <span>
                                My Specialities are in the areas of
                       <ol>
                                    <li>
                                        Web Automation
                           </li>
                                    <li>
                                        Mobile Automation
                           </li>
                                    <li>
                                        Performance Test Automation
                           </li>
                                    <li>
                                        API Automation
                           </li>
                                    <li>
                                        MERN stack developer
                           </li>
                                    <li>
                                        Java Backend Developer
                           </li>
                                    <li>
                                        DevOps
                           </li>
                                    <li>
                                        Learning more...
                           </li>
                                </ol>
                            </span>
                            <div className={"tech-stack"}>
                                <Typography variant={"h6"}>
                                    Education:
                                </Typography>
                                <div className={"tech-stack"}>
                                    I have done my Bachelor's in Civil Engineering from <a href="https://kiit.ac.in/">KIIT University,Bhubaneswar</a> and Pursuing Msc in Computer science from <a href="https://www.ljmu.ac.uk/">Liverpool John Moores University</a> via <a href="https://www.upgrad.com/">Upgrad</a>
                                </div>

                            </div>
                            <div>
                                <br />
                                <Typography variant={"h6"}>
                                    Hobbies & Interests:
                                </Typography>
                                <div className={"tech-stack"}>
                                    I like learning new stuffs everyday and night and also i love to watch fantasy/comedy movies/tv series.
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className={"text2"}>
                        Connect with Me
                    </div>
                    <div className={"contact-icons"} style={{ display: "flex", marginTop: 20 }}>
                        <div>
                            <FontAwesomeIcon icon={faFacebookSquare} title={"Facebook"} style={{ width: "60px", height: "50px", color: "navy" }} onClick={() => this.navigateToUrl("facebook")} href={"https://www.facebook.com/afsar.ali.7374"} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faInstagramSquare} title={"Instagram"} style={{ width: "60px", height: "50px", color: "red" }} onClick={() => this.navigateToUrl("instagram")} href={"https://www.instagram.com/afsar.ali.7374/"} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTwitterSquare} title={"Twitter"} style={{ width: "60px", height: "50px", color: "rgb(29, 155, 240)" }} onClick={() => this.navigateToUrl("twitter")} href={"https://twitter.com/afsarali273"} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faWhatsappSquare} title={"WhatsApp"} style={{ width: "60px", height: "50px", color: "green" }} onClick={() => this.navigateToUrl("whatsapp")} href={"https://wa.me/6594657845"} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} title={"LinkedIn"} style={{ width: "60px", height: "50px", color: "navy" }} onClick={() => this.navigateToUrl("linkedIn")} href={"https://www.linkedin.com/in/afsar-ali-3465a556/"} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
