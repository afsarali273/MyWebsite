import React, {Component} from "react";
import Header from "../Header/Header";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import axios from "axios";
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {fab, faYoutube} from "@fortawesome/free-brands-svg-icons"



export default class Details extends Component{

    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            playlistItems: [],
            playlist: {},
            activePlayListName: ""
        }

    }

    getPlayListVideos() {

        const playListId = window.location.href.split("/")[4];
        console.log("URL : "+playListId);
        axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId="+playListId+"&key=AIzaSyDcxllPRz1le19GjTXCukLAyZICReLBaxU")
            .then(res => {
                this.setState({
                    playlistItems: res.data
                })

                this.getPlayListName(res.data);
            }).catch(err => {
            console.log(err);
        })

    }

    getPlayListName(data) {
        const playlistId = (data.items || [])[0].snippet.playlistId;
        (this.state.playlists.items || [])
            .filter(x => x.id === playlistId)
            .forEach(list => {
                this.setState({
                    activePlayListName: list.snippet.title
                })
            })
    }

    componentDidMount() {
        this.getPlayListVideos();
    }

    navigateToPlayList(playListId,videoId) {
        const url = "https://www.youtube.com/watch?v="+videoId+"&list="+playListId;
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    render() {
        console.log(JSON.stringify(this.state.playlistItems.items))

        return (
            <div>
                <Header/>

                <div>

                    <div>
                        <div>
                            <div>
                                {this.state.activePlayListName}
                            </div>

                            <br/><br/>

                            <div className={"container-details"}>

                                {
                                    (this.state.playlistItems.items || []).map((videos, index) => {
                                        return (<div key={index}>
                                            <div>
                                                <Card >
                                                    <CardActionArea onClick={()=> this.navigateToPlayList(videos.snippet.playlistId,videos.snippet.resourceId.videoId)}>
                                                        <CardContent>
                                                            <div className={"playlist-details-list"}>

                                                                <div style={{marginLeft:10}}>
                                                                    <div className="square">
                                                                        <img src={videos.snippet.thumbnails.high.url}/>
                                                                    </div>

                                                                </div>
                                                                <Typography gutterBottom variant="h6" component="h6">
                                                                    {videos.snippet.title}
                                                                </Typography>
                                                                <div>
                                                                    <FontAwesomeIcon onClick={()=> this.navigateToPlayList(videos.snippet.playlistId,videos.snippet.resourceId.videoId)} icon={faYoutube} style={{ width:100, height:40 , color:"red"}}/>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        </div>)
                                    })

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
