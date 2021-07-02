import React from "react";
import {Paper,Avatar} from "@material-ui/core";
import "./UploadPost.css"
import pic from "../../../Images/images/pic1.jpeg";
import feelings from "../../../Images/images/feelings.png";
import image from "../../../Images/images/image.png";



class UploadPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                  <Paper className="uploadPost__container">
                  <div className="uploadTop">
                    <div>
                        <Avatar className="upload__img" src={pic}/>
                    </div>
                    <div>
                        <input className="upload__box" type="text" placeholder="What's on your mind?"/>
                    </div>
                  </div>
                  <div className="uploadBottom">
                      <div className="bottom_img">
                            <img src={image} width="40px" height="50px"/>
                            <div className="upload__text">Photo</div>
                      </div>
                      <div className="bottom_img right">
                            <img src={feelings} width="40px" height="50px"/>
                            <div className="upload__text">Feeling/Activity</div>
                      </div>
                  </div>
                  </Paper>
                    
            </div>
        
        );
    }
}
 
export default UploadPost;