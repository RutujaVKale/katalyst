import React from 'react'
import Grid from "@material-ui/core/Grid"
import "./MainPage.css"
import LeftSide from './LeftSidePanel/LeftSide'
import UploadPost from './UploadPost/UploadPost'
import PostContainer from './PostContainer/PostContainer'
import RightSideComponent from './RightSidePanel/RightSideCompponent'

const Layout = () => {
    return (
        <div className="mainpage__conatainer">
            
            <Grid container>
                <Grid item xs={3}>
                    <LeftSide/>
                </Grid>
                <Grid item xs={6} className="middelecontainer">
                    <UploadPost/>
                    <PostContainer/>
                </Grid>
                <Grid item xs={3}>
                   <RightSideComponent/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Layout

