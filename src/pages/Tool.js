import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const Tool = (props) => {

    const useStyles = makeStyles({
        root: {
          maxWidth: 375,
          margin: "4%",        
        },
        media: {
          height: 250,
        },
      });

    const classes = useStyles();

    const {tool} = props

    const loadTool = () => (
        
        <Container maxWidth="sm">
            {tool.map((tool) => (
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={tool.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3" style={{ fontWeight : "bolder", fontSize : "25px" }}>
                            {tool.name}
                        </Typography>
                        <hr/>
                        <p>{tool.description}</p>
                        <h3>{tool.price}</h3>
                        <Button variant="contained"><a href={tool.url} style={{ color : "black", textDecoration : "none" }} target="_blank" className="button">Buy</a></Button>
                    </CardContent>               
                </Card>
            ))}
        </Container>
    )
    const loading = <h1>Loading...</h1>
    return tool.length > 0 ? loadTool() : loading  
}

export default Tool