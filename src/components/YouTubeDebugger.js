// Code YouTubeDebugger Component Here
import React , { Component } from "react";

class YouTubeDebugger extends Component {
    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
            }
        }
    }
 }
 handleBitRate = () => {
     this.setState({
         settings: {
             ...this.state.settings,
             bitrate: 12
         }
     })
 }
 handleReso = () => {
this.setState({
        settings: {
        ...this.state.settings,
        video: {
            ...this.state.settings.video,
            resolution: '720p'
        }
    }
})
 }
    render(){
        return <div>
            <button className="bitrate" onClick={this.handleBitRate}>Change the bitrate {this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.handleReso}>Change resolution {this.state.settings.resolution}</button>
        </div>
    }
}
export default YouTubeDebugger