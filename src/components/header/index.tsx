import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import PersonSelect from '../personselect';
import { People } from '../../consts/people';
import HeaderProps from './props';
import { Link } from 'react-router-dom';

export default function Header(props : HeaderProps) {
    const classes = useStyles();
    return(
        <header >
            <AppBar position='static'>
                <Toolbar
                    className={classes.banner}
                    variant='dense'
                >
                    <Link
                        to='/'
                    >
                        <Button>
                            <img 
                                src={`${process.env.NODE_ENV === 'development' ? 'homestuck-bookclub-guesses' : ''}/sburb.png`}
                                className={classes.icon}
                            />
                        </Button>
                    </Link>
                    <Typography 
                        variant='h6'
                        noWrap
                    >
                        Homestuck Book Club Guesser
                    </Typography>
                    <div className={classes.space} />
                    <PersonSelect
                        id='people'
                        options={People}
                        selected={props.user}
                        setSelected={p => props.setUser(p)}
                    />
                </Toolbar>
            </AppBar>
        </header>
    );
}