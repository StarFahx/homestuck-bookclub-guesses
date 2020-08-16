import React from 'react';
import { Card, Typography, Button } from '@material-ui/core';
import Page from '../../reducers/pages/page';
import useStyles from './styles';

interface AddPageProps {
    weekId : number;
    onAdd : () => void;
}

export function AddPageCard(props : AddPageProps) {
    const classes = useStyles();
    return (
        <Card className={classes.pageCard}>
            <Button 
                className={classes.pageButton}
                onClick={props.onAdd}
            >
                +
            </Button>
        </Card>
    )
}

export default function PageCard(props : Page) {
    const classes = useStyles();
    return(
        <Card className={classes.pageCard}>
            <Typography>{props.pageNumber}</Typography>
            <Typography>{props.description}</Typography>
        </Card>
    );
}