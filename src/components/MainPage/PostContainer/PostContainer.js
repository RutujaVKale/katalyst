import React,{Component} from "react";
import Post from "./Post";
import "./PostContainer.css"
import post from "../../../Images/images/pic1.jpeg"

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
          }
    }

    getData=()=>{ //calling rest api from backend
        //profile img, user id, description,post img 
        let json =[
            {
                "post_ID":"1",
                "user_id":243146758,
                "user_img":post,
                "user_name":"Rutuja Kale",
                "description": "Feeling good today",
                "post_img":"url of img",
                "like":30
            },
            {
                 
                "post_ID":"2",
                "user_id":144146758,
                "user_img":"url....",
                "user_name":"Ritu",
                "description": "helooo",
                "post_img":"",
                "like":25
            
            }
        ];

        this.setState({data:json})        
    };

    componentDidMount(){
        this.getData();
        
    }

    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                       
                        <Post object={item}/>
                    ))
                }
                {/* <Post/> */}
                         
            </div>
         );
    }
}
 
export default PostContainer;