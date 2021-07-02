import React from 'react'
import { Avatar } from '@material-ui/core';
import profile from "../../Images/images/dp1.png"

class LeftSideComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
         <div className="leftSide_container">
            <div className="leftSide_component_img">
                <Avatar src={this.props.object.image}/>
            </div>
            <div className="leftSide_component_txt">
                {this.props.object.text}
            </div>
            
        </div>
         );
    }
}
 
export default LeftSideComponent;

