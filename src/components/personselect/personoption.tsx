import React from 'react';
import { Person } from '.';
import { MenuItem } from '@material-ui/core';
import useStyles from './styles';

export interface PersonOptionProps
{
    person : Person;
    classes : Record<'item', string>;
}

export default function PersonOption(props : PersonOptionProps) {
    const classes = useStyles(props);
    return (
        <MenuItem
            className={classes.item}
            value={props.person.name}
        >
            {props.person.name}
        </MenuItem>
    );
}