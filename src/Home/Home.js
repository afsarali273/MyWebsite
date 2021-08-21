import React, {Component} from "react";
import Header from "../Header/Header";
import axios from "axios";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import './Home.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import data from '../Data/data.json'

class Home extends Component {

    constructor() {
        super();
        this.state = {
            playlists: [],
            playlistItems: [],
            playlist: {},
            activePlayListName: "",
            localData:[]
        }

    }

    loadLocalData(){
        const loadData =  JSON.parse(JSON.stringify(data));
        this.setState({
            localData:loadData
        })
    }

    getImagesUrl(playListId){
        var foundValue =this.state.localData.find( x => x.id === playListId);
        if(foundValue !== undefined)
             return foundValue.image;

        return "https://i1.wp.com/www.globaltrademag.com/wp-content/uploads/2018/12/software.jpg"
    }
    navigateToPlayList(playListId) {
        const url = "https://www.youtube.com/playlist?list="+playListId;
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    getPlayListDetails() {
        axios.get("https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyDcxllPRz1le19GjTXCukLAyZICReLBaxU&channelId=UCsXoni6lTrrbO5tbF0AU3yg&maxResults=50&part=snippet%2CcontentDetails")
            .then(response => {
                this.setState({
                    playlists: response.data
                })

            })
            .catch(err => {
                console.log("Error occurred " + err);
            })
    }

    componentDidMount() {
        this.getPlayListDetails();
        this.loadLocalData();
    }

    render() {
        return (

            <div>
                <Header/>
                <div>
                </div>
                <div className={"container"}>

                    {
                        (this.state.playlists.items || [])
                            .filter(x => x.contentDetails.itemCount > 0)
                            .map((list, index) => {

                                return (<div key={index}>
                                    <div>
                                        <Card className={"card-item"}>
                                            <Link style={{textDecoration:"none"}}  to={{
                                                pathname:"/details/" +list.id,
                                                state: {
                                                    playlists: this.state.playlists,
                                                    playlistItems: this.state.playlistItems,
                                                    playlist: this.state.playlist
                                                }}} >
                                            <CardActionArea>

                                                <CardMedia
                                                    component="img"
                                                    height="50"
                                                     image={this.getImagesUrl(list.id)}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {list.snippet.localized.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {list.snippet.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            </Link>
                                            <CardActions>
                                                <div>
                                                    <FontAwesomeIcon className={"youtube-icon"} onClick={(e)=>this.navigateToPlayList(list.id)} icon={faYoutube} style={{ width:100, height:40 , color:"red"}}/>
                                                </div>
                                            </CardActions>

                                        </Card>
                                    </div>

                                </div>)
                            })
                    }

                </div>
            </div>
        )
    }
}

export default (Home);
