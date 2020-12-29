import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Syrup = (props) => {

    const {syrup} = props

    const loadSyrup = () => (
        
        <Container maxWidth="sm" style={{ padding : "3%" }}>
            {syrup.map((syrup) => (
                <Card style={{ margin : "30px"}}>
                    <CardContent>
                        <Typography style={{ fontWeight : "bolder", fontSize : "25px" }}>
                            {syrup.name}
                        </Typography>
                        <p>{syrup.description}</p>
                        <p>{syrup.description2}</p>
                        <p>{syrup.description3}</p>
                    </CardContent>           
                </Card>
            ))}
        </Container>
    )
    const loading = <h1>Loading...</h1>
    return syrup.length > 0 ? loadSyrup() : loading  
}

export default Syrup