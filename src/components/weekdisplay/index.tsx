import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';

export interface WeekProps {
    id : number;
    image : string;
    title : string;
    firstPage : number;
    lastPage : number;
    showButton : boolean;
}

export default function WeekDisplay(props : WeekProps) {
    const classes = useStyles();
    return(
        <Card 
            className={classes.root}
        >
            <CardMedia 
                className={classes.picture}
                component='img'
                src={props.image}
                title={props.title}
            />
            <CardContent className={classes.content}>
                <Typography className={classes.title} variant='h5'>{props.title}</Typography>
                <Typography className={classes.subtitle} variant='subtitle1' color='textSecondary'>{`${props.firstPage} – ${props.lastPage}`}</Typography>
            </CardContent>

            {
                props.showButton ? 
                <Link className={classes.link} to={`/week/${props.id}`}>
                    <Button className={classes.choose}>
                        <Typography variant='h6'>{'==>'}</Typography>
                    </Button>
                </Link> : <></>
            }
            
        </Card>
    );
}