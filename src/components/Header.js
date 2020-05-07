import React,{ useState, useEffect } from 'react'

import logo from '../assets/images/paikLogo.png'

import { AppBar, Toolbar, Tabs, Tab, Drawer, IconButton, Button, List, ListItem, Divider, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, Home, PhotoLibrary, VideoLibrary, Contacts } from '@material-ui/icons'


const drawerWidth = 160;


const Header = ({container}) => {
    const classes = useStyles();
    const [tabsValue, setTabsValue] = useState(3)
    const [mobileOpen, setMobileOpen] = useState(false)
//    console.log(tabsValue);
    const handleChange = ( event, value) =>{
        setTabsValue(value)
    }

    const handleToggle = () =>{
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ position: 'sticky' }}>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem>
                    <Button onClick={handleToggle} href="#home" className={classes.menuBtns}>
                        <Home className={classes.menuIcons} />
                        خانه
                    </Button>
                </ListItem>
                <ListItem>
                    <Button onClick={handleToggle} href="#galary" className={classes.menuBtns}>
                        <PhotoLibrary className={classes.menuIcons} />
                        گالری
                    </Button>
                </ListItem>
                <ListItem>
                    <Button onClick={handleToggle} href="#videos" className={classes.menuBtns}>
                        <VideoLibrary className={classes.menuIcons} />
                        فیلم ها
                    </Button>
                </ListItem>
                <ListItem>
                    <Button onClick={handleToggle} href="#about" className={classes.menuBtns}>
                        <Contacts className={classes.menuIcons} />
                        در باره
                    </Button>
                </ListItem>
            </List>
        </div>
    );
    return (
        <AppBar position="sticky" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.navBar}>
                    <IconButton onClick={handleToggle} edge="start" className={classes.menuButton}>
                        <Menu />
                    </IconButton>
                    <img src={logo} alt="paikLogo" className={classes.logo} />
                    <Tabs
                    value={tabsValue}
                    onChange={handleChange}
                    className={classes.tabs}
                    classes={{ indicator: classes.shortIndicator }}
                    >
                        <Tab className={classes.tab} label="در باره" href="#about" />
                        <Tab className={classes.tab} label="فیلم ها" href="#videos" />
                        <Tab className={classes.tab} label="گالری" href="#galary" />
                        <Tab className={classes.tab} label="خانه" href="#home"/>
                    </Tabs>
                </div>
                <nav className={classes.drawer}>
					<Hidden smUp implementation="css">
						<Drawer
							container={container}
							variant="temporary"
							// anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={handleToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

const useStyles = makeStyles( theme =>({
    appBar:{
        paddingLeft: theme.spacing(7),
		paddingTop: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
		},
        background: '#1f2424',
        // background:'none',
        color: '#fff',
    },
    navBar:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
    },
    tabs:{
        margin:'auto',
    },
    tab:{
        margin: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
        fontSize:18,
        fontWeight:"bold",
		// background: '#ddd',

    },
    shortIndicator: {
		maxWidth: 60,
		marginLeft: theme.spacing(6),
    },
    logo:{
        height: 60,
		width: 180,
    },
    toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#121d25',
	},
	drawer: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			background: '#121d25',
			flexShrink: 0,
        },
	},
	menuButton: {
		color: 'white',
		'&:hover': {
			color: '#ffb503',
			background: 'none',
		},
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	menuBtns: {
		textTransform: 'capitalize',
		fontSize: 14,
		color: '#ffe',
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	menuIcons: {
		color: '#ffb503',
		marginRight: '10px',
	},
}));
