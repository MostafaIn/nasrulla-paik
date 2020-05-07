import React,{useState} from 'react'
import {CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import backScreen from './assets/images/backScreen.jpeg'
import backScreen2 from './assets/images/backScreen2.jpeg'

import Header from './components/Header'
import Home from './components/Home'
import Galary from './components/Galary'
import Videos from './components/Videos'
import About from './components/About'

const App = () => {
  const classes = useStyles();
  const [screen, setScreen] = useState('')
  console.log(screen)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Home setScreen={setScreen} />
      <Galary />
      <Videos />
      <About />
    </div>
  )
}

export default App

const useStyles = makeStyles( (theme) =>({
  root:{
		height: '100%',
		minWidth: '100%',
		background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${backScreen}) center/cover fixed no-repeat`,
		[theme.breakpoints.down('xs')]: {
			background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${backScreen2}) center/cover fixed no-repeat`,
		},
  }
}));