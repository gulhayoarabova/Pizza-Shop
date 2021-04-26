import React from 'react'
import CardItem from '../../components/card/card';
import { filterByDate } from "../../service/Api";
import  "../../App.css";
import { Button } from '@material-ui/core';


const Filtered = (props) => {

    const {match, history} = props;
    const byDate = filterByDate(match.params.id);
    console.log(byDate);
    return (
        <div className="filteredPage">
            <Button variant="outlined" color="primary" onClick={() => history.goBack()}>Go Back</Button>
         {byDate && byDate.map(item => {
             return <CardItem key={item.id}{...item}/>
         })}
        </div>
    );
};

export default Filtered;
