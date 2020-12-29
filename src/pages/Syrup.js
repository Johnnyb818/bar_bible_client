import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Syrup = (props) => {

    const {syrup} = props

    const loadSyrup = () => (
        
        <div>
            {syrup.map((syrup) => (
                <div>           
                    <h1>{syrup.name}</h1>
                    <p>{syrup.description}</p>
                    <p>{syrup.description2}</p>
                    <p>{syrup.description3}</p>
                </div>
            ))}
        </div>
    )
    const loading = <h1>Loading...</h1>
    return syrup.length > 0 ? loadSyrup() : loading  
}

export default Syrup