import React from 'react'

// FORMATTING
import NumberFormat from 'react-number-format';

// LAYOUT
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';


const DataCards = (props) => {

    return (
        <Grid item xs={6}>
            <Card>
                <CardContent>
                    <h1>{props.title}</h1>
                    <Divider />
                        <h1>
                            <NumberFormat displayType={'text'} thousandSeparator={true} value={props.data}/>
                        </h1>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default DataCards