import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { fetchSummaryData } from '../actions';

// LAYOUT
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

// STYLES
import '../styles/searchData.scss'

// COMPONENTS
import DataCards from './DataCards';
import GlobalHeader from './GlobalHeader';
import CountryData from './CountryData';
import { Divider, Button } from '@material-ui/core';

const SearchData = ( props ) => {
    
    const Title = (props) => {
        return(
            <Grid container direction="row">
                <h1>{props.title}</h1>
            </Grid>
        )
    }

    if (props.isFetching) {
        return(
            <Container className="dataCards">
                <CssBaseline />
                {props.fetchSummaryData()}
                <GlobalHeader date={props.data.Date} />
                <div className="fetchDataButtonContainer">
                <Button
                    size="large"
                    className="fetchDataButton"
                    variant="contained" 
                    disableElevation
                    onClick={()=> props.fetchSummaryData()}
                >
                    <CircularProgress size={16}/>
                </Button>
                <h3>Last Updated: { Date() }</h3>
            </div>
            <Divider />
            </Container>
        )
    }

    return(
        <Container className="dataCards">
            
            <GlobalHeader date={props.data.Date} />
            <div className="fetchDataButtonContainer">
                <Button
                    size="large"
                    className="fetchDataButton"
                    variant="contained" 
                    disableElevation
                    onClick={()=> props.fetchSummaryData()}
                >
                    Update Data
                </Button>
                <h3>Last Updated: { Date() }</h3>
            </div>
            <Divider />

            <Title className="dataCardTitle" title="Cases" />
            <Grid className="dataCardContainer" container spacing={3} direction="row" justify="center" alignItems="flex-start">
                <DataCards title="New Confirmed" data={props.data.Global.NewConfirmed}/>
                <DataCards title="Total Confirmed" data={props.data.Global.TotalConfirmed}/>
            </Grid>
            
            <Title className="dataCardTitle" title="Deaths" />
            <Grid className="dataCardContainer" container spacing={3} direction="row" justify="center" alignItems="flex-start">
                <DataCards title="New Deaths" data={props.data.Global.NewDeaths}/>
                <DataCards title="Total Deaths" data={props.data.Global.TotalDeaths}/>
            </Grid>

            <Title className="dataCardTitle" title="Recovered" />
            <Grid className="dataCardContainer" container spacing={3} direction="row" justify="center" alignItems="flex-start">
                <DataCards title="New Recovered" data={props.data.Global.NewRecovered}/>
                <DataCards title="Total Recovered" data={props.data.Global.TotalRecovered}/>
            </Grid>

            <Divider />

            <CountryData />
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        data: state.data,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSummaryData }
)(SearchData)