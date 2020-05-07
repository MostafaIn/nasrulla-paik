import React from 'react'

import { Grid, Card, CardContent, CardActionArea, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { galary } from '../dummy-data/galary';

const PhotoCard = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={4} style={{margin:'auto'}}>
        {galary.map(photo => <Grid item key={photo.id} xs={10} sm={4} md={2}> 
            <Card className={classes.card}>
                <CardActionArea>
                <img src={photo.photo} alt={photo.photo} style={{width:'100%', height:120}} />
                <CardContent style={{textAlign:'right'}}>
                <Typography component="h6">{photo.subject}</Typography>
                <Typography variant="caption"> {photo.date}: مورخ</Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        )}            
        </Grid>
    )
}

export default PhotoCard


const useStyles = makeStyles( theme =>({
    card:{
        minWidth: '160px',
        background:'#ffe',
    }
}));
