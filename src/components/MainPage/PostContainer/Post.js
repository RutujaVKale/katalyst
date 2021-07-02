import React,{Component} from "react";
import "./PostContainer.css";
import {Paper} from "@material-ui/core";
import { Avatar } from '@material-ui/core';
import pic from "../../../Images/images/pic1.jpeg";
import post from "../../../Images/images/pic1.jpeg"
import likebutton from "../../../Images/images/likebutton.png"
import like from "../../../Images/images/like.png"
import comment from "../../../Images/images/comment.png"
import share from "../../../Images/images/share.png"


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    isImageAvailable=(data)=>{
        return data==""?false:true;
    }
    render() { 
        return ( 
            <div>
                
                <Paper className="post__container">
                    {/* header */}
                  <div className="post__header">
                      <div className="post__header_img"> 
                        <Avatar className="post_img" src={pic}/>                        
                      </div>
                      <div className="post__header_text">
                        {this.props.object.user_name}
                      </div>
                  </div>
                  {/* decription */}
                  <div className="post_description">
                      {this.props.object.description}
                  </div>
                  {/* image */}
                  <div className="post_img">
                      {
                          this.isImageAvailable(this.props.object.post_image)?<img src={this.props.object.post_img} width="600px"/>:<img src={post} width="600px"/>
                      }
                  </div>
                  {/* like count */}
                  <div className="post_like">
                        <div className="like_img">
                            <img src={like} height="30px"/>
                        </div>
                        <div className="like_count">
                            {this.props.object.like}
                        </div>
                  </div>
                  {/*  like share box */}
                  <div className="post_likeshare">
                      <div className="post_tab">
                          <div className="post_tabfirst">
                              <img className="post_tabimg" src={likebutton}/>
                            </div>
                            <div className="post_tabtext">
                                Like
                            </div>
                      </div>
                      <div className="post_tab">
                          <div className="post_tabfirst">
                              <img className="post_tabimg" src={comment}/>
                            </div>
                            <div className="post_tabtext">
                                Comment
                            </div>
                      </div>
                      <div className="post_tab">
                          <div className="post_tabfirst">
                              <img className="post_tabimg" src={share}/>
                            </div>
                            <div className="post_tabtext">
                                Share
                            </div>
                      </div>

                  </div>
                  {/* comment */}
                  <div className="post_comment_box">
                      <div className="uploadTop">
                        <div>
                            <Avatar className="upload__img" src={pic}/>
                        </div>
                        <div>
                            <input className="upload__box" type="text" placeholder="Write a comment.."/>
                        </div>
                     </div>
                  </div>
                </Paper>
            </div>
         );
    }
}
 
export default Post;