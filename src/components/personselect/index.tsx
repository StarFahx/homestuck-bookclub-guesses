import React, { useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { Colour } from '../../consts/colours';
import useStyles from './styles';

export interface Person {
    name : string;
    color : Colour;
}

export interface PersonSelectProps {
    id : string;
    options : Person[];
    selected : Person | undefined;
    setSelected : (p : Person) => void;
}

export default function PersonSelect(props : PersonSelectProps) {
    const classes = useStyles();

    return(
        <FormControl className={classes.root} disabled={props.selected !== undefined}>
            <InputLabel
                className={classes.label}
                htmlFor={props.id}
            >
                User
            </InputLabel>
            <Select
                inputProps={{
                    name: 'user',
                    id: props.id,
                    classes: { icon: classes.icon}
                }}
                value={props.selected?.name}
                onChange={e => props.setSelected(props.options.filter(a => a.name === e.target.value)[0])}
                className={classes.select}
                style={{color: props.selected !== undefined ? props.selected.color : 'black'}}
            >
                {
                    props.options.map(option =>
                        <MenuItem
                            className={classes.item}
                            style={{color: option.color}}
                            value={option.name}
                        >
                            {option.name}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    );
}