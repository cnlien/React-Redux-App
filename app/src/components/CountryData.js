import React from 'react';

// REDUX
import { connect } from 'react-redux';
import { fetchSummaryData } from '../actions';

// FORMATTING
import NumberFormat from 'react-number-format';

// LAYOUT
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// COMPONENTS
import CountryHeader from './CountryHeader'

const CountryData = (props) => {

    console.log("Props from CountryData.js: ",props.data.Countries)

    return(
        <div>
        <CountryHeader />
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell>New Deaths</TableCell>
                        <TableCell>Total Deaths</TableCell>
                        <TableCell>New Confirmed</TableCell>
                        <TableCell>Total Confirmed</TableCell>
                        <TableCell>New Recovered</TableCell>
                        <TableCell>Total Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.Countries.map(data => {
                        return (
                            <TableRow>
                                <TableCell>{data.Country}</TableCell>
                                <TableCell><NumberFormat displayType={'text'} thousandSeparator={true} value={data.NewDeaths}/></TableCell>
                                <TableCell><NumberFormat displayType={'text'} thousandSeparator={true} value={data.TotalDeaths}/></TableCell>
                                <TableCell><NumberFormat displayType={'text'} thousandSeparator={true} value={data.NewConfirmed}/></TableCell>
                                <TableCell><NumberFormat displayType={'text'} thousandSeparator={true} value={data.TotalConfirmed}/></TableCell>
                                <TableCell><NumberFormat displayType={'text'} thousandSeparator={true} value={data.NewRecovered}/></TableCell>
                                <TableCell><NumberFormat displayType={'text'} thousandSeparator={true} value={data.TotalRecovered}/></TableCell>
                            </TableRow>
                        );
                     })}
                    
                </TableBody>
            </Table>
        </TableContainer>
        </div>
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
)(CountryData)