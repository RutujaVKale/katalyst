import React, {Component} from "react";
import "./RightSideComponent.css"
import LeftSideComponent from '../LeftSideComponent';
import memories from "../../../Images/images/memories.png";
import video from "../../../Images/images/video.png";
import upload from "../../../Images/images/upload.png";
import pic from "../../../Images/images/pic1.jpeg";

class RightSideComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
         }
    }
     getData=()=>{
        let jsondata=[
        {
            "image":pic,
            "text":"Jyothi"
        },
        {
            "image":pic,
            "text":"Pallawi"
        },
        {
            "image":pic,
            "text":"Spandan"
        }
     ];

     //lets put this local json in our state variable data[]
        this.setState({data:jsondata});
    }

    
    componentDidMount(){
            this.getData();
    }
    render() { 
        return ( 
        <div>
           <div className="RightSide__Header">Contacts</div>
           <div className="RightSide__content">
                {
                    this.state.data.map((items)=>(
                        <LeftSideComponent object={items}/>
                    ))
                }
           </div>
        </div>
     );
    }
}
 
export default RightSideComponent;