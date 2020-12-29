import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const Video = (props) => {

    const {video} = props

    const loadVideo = () => (
        
        <Container maxWidth="sm" style={{ padding : "3%" }}>
            {video.map((video) => (
                <Card style={{ margin : "30px"}}>
                    <CardContent>
                        <Typography style={{ fontWeight : "bolder", fontSize : "25px" }}>
                            {video.name}
                        </Typography>
                        <p>What will I learn?</p><p>{video.description}</p>
                        <Button variant="contained"><a href={video.url} style={{ color : "black", textDecoration : "none" }} target="_blank">Check it out</a></Button>
                    </CardContent>
                </Card>
            ))}
        </Container>
    )
    const loading = <h1>Loading...</h1>
    return video.length > 0 ? loadVideo() : loading  
}

export default Video