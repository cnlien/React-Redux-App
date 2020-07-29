import React from 'react';
import { connect } from 'react-redux';

import { fetchSummaryData } from '../actions';

const SearchData = ( props ) => {
    console.log(props)
    if (props.isFetching) {
        return(
            <div>
                {props.fetchSummaryData()}
                Fetching Covid Data
            </div>
        )
    }

    return(
        <div>
            <h1>Global Covid 19 Statistics</h1>
            <span>Updated: {props.data.Date}</span>
            <hr />
            <ul>
                <li>New Confirmed: {props.data.Global.NewConfirmed}</li>
                <li>New Deaths: {props.data.Global.NewDeaths}</li>
                <li>New Recovered: {props.data.Global.NewRecovered}</li>
                <li>Total Confirmed: {props.data.Global.TotalConfirmed}</li>
                <li>Total Deaths: {props.data.Global.TotalDeaths}</li>
                <li>Total Recovered: {props.data.Global.TotalRecovered}</li>

            </ul>
        </div>  
    )

    // const handleDataChange = (e) => {
    //     props.fetchSummaryData({e.target.value})
    // }
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