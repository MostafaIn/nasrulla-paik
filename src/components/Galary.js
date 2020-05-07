import React,{useState, useEffect} from 'react'
import Slideshow from './SlideShow'

import { makeStyles } from '@material-ui/core/styles'

import backGalary from '../assets/images/backGalary.jpeg'
import PhotoCard from './PhotoCard'

const Galary = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.galary} id="galary">
            <div className={classes.slideShow}>
            <Slideshow /> 
            </div>
            <PhotoCard /> 
        </div>
    )
}

export default Galary

const useStyles = makeStyles( theme =>({
    galary:{
        background:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${backGalary}) center/cover fixed no-repeat`,
        minHeight:'100vh',
        minWidth:'100%',
        padding: '30px'
    },
    slideShow:{
        paddingTop:'80px',
        margin:'auto',
        maxWidth:'60%',
        [theme.breakpoints.down('sm')]:{
            maxWidth:'95%',
        }
    }
}));