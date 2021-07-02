import React from 'react'
import "./LeftSide.css";
import UploadPost from '../UploadPost/UploadPost';
import LeftSideComponent from '../LeftSideComponent';
import memories from "../../../Images/images/memories.png";
import video from "../../../Images/images/video.png";
import upload from "../../../Images/images/upload.png";
import pic from "../../../Images/images/pic1.jpeg";

class LeftSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            data:[],
        }
    }
    getData=()=>{
        let jsondata=[
         {
            "image":memories,
            "text":"Topic of the week"
        },
        {
            "image":memories,
            "text":"Upcoming Events"
        },
        {
            "image":video,
            "text":"Quizes"
        },
        {
            "image":upload,
            "text":"Fun Activities"
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
               
                {
                    this.state.data.map((items)=>(
                        <LeftSideComponent object={items}/>
                    ))
                }

               {/* <LeftSideComponent image={upload} text="Topic Of the Week"/>
               <LeftSideComponent image={upload} text="Upcoming Events"/>
               <LeftSideComponent image={upload} text="Quizes"/>
               <LeftSideComponent image={upload} text="Fun Activities"/> */}
              

                
            </div>
         );
    }
}
 
export default LeftSide;
