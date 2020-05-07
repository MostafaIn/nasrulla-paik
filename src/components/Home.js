import React,{useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Intro from './Intro'


const Home = ({setScreen}) => {
    const classes = useStyles()
    const homeRef = useRef(null)
    console.log(homeRef)
    return (
        <div className={classes.home} id="home" ref={homeRef}>
            <Intro />
        </div>
    )
}

export default Home

const useStyles = makeStyles( theme =>({
    home:{
        minHeight:'100vh',
        minWidth:'100%',
        paddingTop: 60
        // background: '#ddd'
    }
}));
