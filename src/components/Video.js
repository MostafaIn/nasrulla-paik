import React,{ useState } from 'react'

import { Grid, Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import ReactPlayer from 'react-player'

import { videos } from '../dummy-data/videos'

const Video = () => {
    const classes = useStyles()
    
    return (
        <Grid container spacing={4} className={classes.container}>
            {videos.map( v => <Grid item key={v.id} xs={12} sm={4} md={2}>
                <Card className={classes.card}>
                    <CardActionArea>
                      
                    <CardContent style={{textAlign:'right'}}>
                        <PlayCircleFilledIcon />
                        <Typography variant="caption">{v.title}</Typography>
                        {/* <Typography variant="subtitle2">{v.description}</Typography> */}
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>)}
        </Grid>
    )
}

export default Video

const useStyles = makeStyles( theme =>({
    container:{
        // marginTop:20,
        display:'flex',
        flexDirection:'column',
        // background:'#ccf',
        flex:1
    },
    card:{
        // flex:'auto',
        minWidth: 260,
        minHeight:'60px',
        background:'#ffe',
    }
   
}));

