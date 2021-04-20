import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
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
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: 'View', link: '/app/viewPost', icon: <HomeIcon /> },
  { id: 1, label: 'PostAdd', link: '/app/addPost', icon: <HomeIcon /> },
  {
    id: 2,
    label: "As Company",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      {        
        label: "Open",
        link: "/app/compOpen",
        icon: <TableIcon />,
      },
      {        
        label: "In Progress",
        link: "/app/compInProgress",
        icon: <TableIcon />,
      },    
       {       
        label: "Past",
        link: "/app/compPast",
        icon: <TableIcon />,
      },{       
        label: "Map",
        link: "/app/compMap",
        icon: <TableIcon />,
      }
    ],
  },
  {
    id:3,
    label: "Freelance",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      {        
        label: "Open",
        link: "/app/freeOpen",
        icon: <TableIcon />,
      },
      {        
        label: "In Progress",
        link: "/app/freeInProgress",
        icon: <TableIcon />,
      },    
       {       
        label: "Past",
        link: "/app/freePast",
        icon: <TableIcon />,
      },{       
        label: "Map",
        link: "/app/freeMap",
        icon: <TableIcon />,
      }
    ],
  },
 
  { id: 4, type: "divider" },
  { id: 5, type: "title", label: "HELP" },  
  { id: 6, label: "Support", link: "", icon: <SupportIcon /> },
  { id: 7, label: "FAQ", link: "", icon: <FAQIcon /> },
 
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
