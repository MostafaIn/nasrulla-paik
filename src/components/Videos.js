import React,{useState} from 'react'

import { Grid, Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import ReactPlayer from 'react-player'

import { videos } from '../dummy-data/videos'


const Videos = () => {
    const classes = useStyles()
    const [vData, setvData] = useState({
        url: 'https://www.facebook.com/NP.PeikNasrollah/videos/367352823867042/?t=32',
        description:'برای تاریخ حقوق زن ازدیدگاه بابه مزاری'
        })

    return (
        <div className={classes.videos} id="videos">
            <Grid container>
                <Grid item xs={10} sm md={6} style={{margin:'auto'}}>
                    <Card className={classes.container}>
                    <ReactPlayer
                        url={vData.url}
                        controls
                        width ="100%"
                        height="100%"
                        // className={classes.player}
                    />                        
                    </Card>
                    <div>
                    <Typography variant="h6" style={{textAlign:'center', color:'#fff'}}>{vData.description}</Typography>
                    </div>
                </Grid>
                <Grid item xs={8} sm md={2} style={{margin:'auto'}}>
                    {videos.map( v => <div key={v.id}>
                        <Card className={classes.card} onClick={() => setvData(v)}>
                            <CardActionArea>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="caption">{v.title}</Typography>
                                <PlayCircleFilledIcon fontSize="large" />
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>)}
                </Grid>  
            </Grid>
        </div>
    )
}

export default Videos

const useStyles = makeStyles( theme =>({
    videos:{
        minHeight:'100vh',
        minWidth:'100%',
        paddingTop:'120px',
        // background:'#456',
    },
    vidoeList:{
        display:'flex',
        flexDirection:'column',
        // background:'#ccf',
        flex:1
    },
    container:{
        // position:'fixed',
        margin:'auto',
        width:'550px',
        height:'350px',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            maxWidth: '300px',
            maxHeight:'200px',
		},
        border: '1px solid #eee',
        overflow: 'hidden',
    },
    player:{
        position: 'absolute',
        width: '450px !important',
        height: 'auto !important',
        transition: '1s opacity',
        zIndex:-1
    },
    card:{
        margin:10,
        // minWidth: 260,
        // minHeight:'60px',
        background:'#ffe',
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        textAlign:'right'
    }
}));
