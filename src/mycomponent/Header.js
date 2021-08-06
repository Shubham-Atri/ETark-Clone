import React from 'react';
import { Link, Button } from '@material-ui/core';
// import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export const Header = (props) => {
    let mystyle = {
        display: 'flex',
        padding: '0 5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'
    }
    let linkstyle = {
        margin: '24px 20px 0',
        textDecoration: 'none',
    }
    let div1 = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
    let div2 = {
        display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',

    }
    let btn = {
        width: '126px',
        backgroundColor: '#3552ef',
    }
    
    return (
        <>
            <nav style={mystyle}>
                
            <img src="../public/etarkimg.png" style={mystyle} alt="logo" />
                <div style={div1}>
                    <Link color="inherit" href="/"  aria-current="page" style={linkstyle}>
                        HOW TO USE
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" aria-current="page"style={linkstyle}>
                        ABOUT US
                    </Link>
                    <Link
                        color="textPrimary"
                        href="/components/breadcrumbs/"
                        style={linkstyle}
                        aria-current="page"
                    >
                        CONTACT US
                    </Link>

                </div>

                <div style={div2}>
                <Link color="inherit" href="/getting-started/installation/" aria-current="page"style={linkstyle}>
                        LOGIN
                    </Link>
                <Button style={btn} variant="contained" color="primary" >
                    Get Started
                </Button>
                </div>
            </nav>
        </>
    )
}
