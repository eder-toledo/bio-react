import React from 'react';
import { AppBar, Toolbar, Typography, MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <AppBar className="menu" position="static" color="primary">
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/">
                        Bio Eder Toledo
                    </Link>
                </Typography>
                <MenuList>
                    <MenuItem>
                        <Link to="/proyectos">Proyectos</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/cv">CV</Link>
                    </MenuItem>
                </MenuList>
            </Toolbar>
        </AppBar>
    );
}

export default Header;