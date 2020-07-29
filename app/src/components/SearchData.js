import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { fetchSummaryData } from '../actions';

// LAYOUT
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';

// COMPONENTS
import DataCards from './DataCards';
import Header from './Header';

const SearchData = ( props ) => {

    const Title = (props) => {
        return(
            <Grid container spacing={12} direction="row">
                <h1>{props.title}</h1>
            </Grid>
        )
    }

    if (props.isFetching) {
        return(
            <Container>
                <CssBaseline />
                {props.fetchSummaryData()}
                <LinearProgress />
            </Container>
        )
    }

    return(
        <Container>
            <Header date={props.data.Date} />
            
            <Title title="Cases" />
            <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                <DataCards title="New Confirmed" data={props.data.Global.NewConfirmed}/>
                <DataCards title="Total Confirmed" data={props.data.Global.TotalConfirmed}/>
            </Grid>
            
            <Title title="Deaths" />
            <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                <DataCards title="New Confirmed" data={props.data.Global.NewDeaths}/>
                <DataCards title="Total Confirmed" data={props.data.Global.TotalDeaths}/>
            </Grid>

            <Title title="Recovered" />
            <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start">
                <DataCards title="New Recovered" data={props.data.Global.NewRecovered}/>
                <DataCards title="Total Recovered" data={props.data.Global.TotalRecovered}/>
            </Grid>
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