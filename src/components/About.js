import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ContactForm from './ContactForm'

const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.about} id="about">
            <Grid container className={classes.wrapper}>
                <Grid item xs={12} sm md>
                    <Typography variant="h4" className={classes.words}>لطفاً در مورد خود ، پروژه ها و فعالیت های خود بگویید</Typography>
                </Grid>
                <Grid item xs={12} sm md>
                    <ContactForm />
                </Grid>
            </Grid>

        </div>
    )
}

export default About

const useStyles = makeStyles( theme =>({
    about:{
        minHeight:'100vh',
        minWidth:'100%',
        padding: '30px',
        // background:'#cfa'
    },
    wrapper:{
        marginTop:140
    },
    words:{
        color:'#fff',
        fontSize:'calc(14px + 0.5vw)'
    }
}));
