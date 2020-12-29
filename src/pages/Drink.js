import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';





const Drink = (props) => {

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          margin: "4%",         
        },
        media: {
          height: 200,
        },
      });

    const classes = useStyles();

    const {drink} = props

    const loadDrink = () => (
        
        <div>
            <div className="card-container">
            {drink.map((drink) => (
                <div>
                    <div>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={drink.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {drink.name}
                                    </Typography>                               
                                    <p>{drink.spirit}</p>
                                    <p>{drink.mixer1}</p>
                                    <p>{drink.mixer2}</p>
                                    <p>{drink.mixer3}</p>
                                    <p>{drink.mixer4}</p>
                                    <p>{drink.mixer5}</p>
                                    <p>{drink.mixer6}</p>
                                    <p>{drink.mixer7}</p>
                                    <p>{drink.mixer8}</p>
                                    <p>{drink.mixer9}</p>
                                    <p>{drink.garnish}</p> 
                                    <p>{drink.instructions}</p>
                                </CardContent>                         
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
    const loading = <h1>Loading...</h1>
    return drink.length > 0 ? loadDrink() : loading  
}

export default Drink