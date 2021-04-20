import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  withStyles } from "@material-ui/core";
import {
  Home as HomeIcon,  
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from 'classnames';

import SidebarLink from './components/SidebarLink/SidebarLinkContainer';
import Dot from './components/Dot';

const structure = [
  {
    id: 0,
    label: "Bidding-Freelancer",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      {        
        label: "PostAd",
        link: "/app/addPost",
        icon: <TableIcon />,
      },
      {        
        label: "ViewAd",
        link: "/app/addPost",
        icon: <TableIcon />,
      },    
       {       
        label: "View-Maps Details Of Adds",
        link: "/app/addPost",
        icon: <TableIcon />,
      },
    ],
  },
  {
    id: 1,
    label: "Used/New Machine",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      {        
        label: "Add Post",
        link: "/app/addPost",
        icon: <TableIcon />,
      },
      {
        
        label: "View Post",
        link: "/app/addPost",
        icon: <TableIcon />,
      },
      {
        
        label: "Map Based View",
        link: "/app/addPost",
        icon: <TableIcon />,
      },
    ],
  },
  {
    id: 2,
    label: "Service Freelancer",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      {        
        label: "PostAd To Us",
        link: "/app/addPost",
        icon: <TableIcon />,
      },
      {        
        label: "View-Freelancers",
        link: "/app/addPost",
        icon: <TableIcon />,
      },
      {       
        label: "Approved/scheduled interview",
        link: "/app/addPost",
        icon: <TableIcon />,
      }, 
      
    ],
  },  
  { id: 3, type: "divider" },
  { id: 4, type: "title", label: "HELP" },  
  { id: 5, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 6, label: "FAQ", link: "", icon: <FAQIcon /> },
];

const SidebarView = ({ classes, theme, toggleSidebar, isSidebarOpened, isPermanent, location }) => {
  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.mobileBackButton}>
        <IconButton
          onClick={toggleSidebar}
        >
          <ArrowBackIcon classes={{ root: classNames(classes.headerIcon, classes.headerIconCollapse) }} />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => <SidebarLink key={link.id} location={location} isSidebarOpened={isSidebarOpened} {...link} />)}
      </List>
    </Drawer>
  );
}

const drawerWidth = 300;

const styles = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    top: theme.spacing.unit * 8,
    [theme.breakpoints.down("sm")]: {
      top: 0,
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 40,
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  mobileBackButton: {
    marginTop: theme.spacing.unit * .5,
    marginLeft: theme.spacing.unit * 3,
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing.unit * .625,
    },
    [theme.breakpoints.up("md")]: {
      display: 'none',
    }
  }
});

export default withStyles(styles, { withTheme: true })(SidebarView);
