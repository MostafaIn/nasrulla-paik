import React from 'react'

import { Paper, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

const Intro = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.intro} elevation={3}>
            <Typography className={classes.title}>.یک جمله زیبا در مورد خودتان</Typography>
            <Button variant="outlined" color="secondary" href="#contact" className={classes.btn}>
               <RecordVoiceOverIcon /> تماس با من
            </Button>
        </Paper>
    )
}

export default Intro

const useStyles = makeStyles( theme =>({
    intro:{
        background:'none',
        color:'#fff',
        maxWidth: '700px',
        maxHeight:'140px',
        padding:15,
        margin: theme.spacing(16,0,0,20),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(16,0,0,3),
            maxWidth: '340px',
            maxHeight:'600px',
		},
    },
    title:{
        fontSize:'calc(22px + 1.7vw)',
        textAlign:'right'
    },
    btn:{
        display:'flex',
        justifyContent:'space-between',
        maxWidth:'140px',
        color:'#f51',
        fontSize:'calc(9px + 0.5vw)',
        fontWeight:'bold',
        marginLeft:'40px'
    }
}))
