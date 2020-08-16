import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GetWeeks from '../../api/weeks/get';
import { CircularProgress, Typography } from '@material-ui/core';
import Page from './page';
import { selectWeeks } from '../../reducers/week';
import { Person } from '../personselect';

export default function WeekPage(props : { user : Person | undefined }) {
    let { id } = useParams();
    const children : ReactElement[] = [];
    const weekState = useSelector(selectWeeks);
    const dispatch = useDispatch();

    switch (weekState.status) {
        case 'unloaded':
            GetWeeks()(dispatch);
            children.push(<CircularProgress />);
            break;
        case 'loading':
            children.push(<CircularProgress />);
            break;
        case 'errored':
            children.push(<Typography>There was an error loading the weeks</Typography>);
            break;
        default:
            const week = weekState.weeks.filter(w => w.id === parseInt(id))[0];
            if (week !== undefined) {
                children.push(
                    <Page week={week} user={props.user} />
                );
            }
            break;

    }

    return(
        <>
            {children}
        </>
    );
}