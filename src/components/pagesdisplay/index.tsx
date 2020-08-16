import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPages } from '../../reducers/pages';
import GetPages from '../../api/pages/get';
import { CircularProgress, Grid, Modal } from '@material-ui/core';
import PageCard, { AddPageCard } from './pagecard';

export interface PagesProps {
    weekId : number;
}

export default function PagesDisplay(props : PagesProps) {
    const allPages = useSelector(selectPages);
    const [modalOpen, setModalOpen] = useState(false);
    const [pageStatus, setPageStatus] = useState(allPages[props.weekId]);
    const dispatch = useDispatch();

    useEffect(() => {
        setPageStatus(allPages[props.weekId]);
    }, [allPages]);

    const children = [];

    if (pageStatus === undefined) {
        GetPages(props.weekId)(dispatch);
    } else {
        switch (pageStatus.status) {
            case 'unloaded':
                GetPages(props.weekId)(dispatch);
                children.push(<CircularProgress />);
                break;
            case 'loading':
                children.push(<CircularProgress />);
                break;
            case 'loaded':
                pageStatus.pages.forEach(page => {
                    children.push(<PageCard {...page} />);
                });
                children.push(<AddPageCard weekId={props.weekId} onAdd={() => setModalOpen(true)}/>);
                break;
            case 'errored':
                children.push(<span>Error</span>);
                break;
        }
    }

    return (
        <>
            <Grid container spacing={3} justify='space-evenly'>
                {children}
            </Grid>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <span>hello world</span>
            </Modal>
        </>
    );
}