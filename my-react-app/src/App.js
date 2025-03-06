import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './output.css';
//import logo   from '../public/hellodocLogo.png';
import LoginPage from "./Login/Login";
import DashboardMain from './Dashboard';
import DashboarLayout from "./DashboardLayout";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  CssBaseline,
  Tooltip,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import AppRoutes from "./NavigationRout/AppRoute";


const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "white", // White background
    color: "navy", // Navy text color
    fontSize: "10px",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    padding: "5px",
  },
  [`& .MuiTooltip-arrow`]: {
    color: "white", // Arrow matches tooltip background
  },
}));

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [applyMargin, setApplyMargin] = useState(false);
  const [showIconSidebar, setShowIconSidebar] = useState(true);

  const toggleSidebar = () => {
    if (!sidebarOpen) {
      setShowIconSidebar(false);
      setSidebarOpen(true);
      setApplyMargin(true);
    } else {
      setApplyMargin(false);
      setSidebarOpen(false);
      setShowIconSidebar(true);
      //setTimeout(() => setShowIconSidebar(true), 300);
    }
  };

  return (
    <>
    <Router>
      <AppRoutes />
    </Router>
    {/* <DashboarLayout/> */}
    {/* <DashboardMain/>
    <LoginPage/> */}
    </>
    // <Box sx={{ display: "flex", height: "100vh" }}>
    //   <CssBaseline />

    //   {/* Mini Sidebar (Icon Only) */}
    //   {showIconSidebar && (
    //     <Box
    //       sx={{
    //         width: "80px",
    //         height: "100vh",
    //         backgroundColor: "navy",
    //         color: "white",
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         zIndex: 1200,
    //         position: "fixed",
    //         left: 0,
    //         top: 0,
    //         transition: "opacity 0.3s ease",
    //         backdropFilter: "blur(10px)",
    //       }}
    //     >
    //       <img
    //         src="/hellodocLogo.png"
    //         alt="Company Logo"
    //         style={{
    //           height: "50px",
    //           width: "50px",
    //           position: "absolute",
    //           top: "10px",
    //           left: "50%", 
    //           transform: "translateX(-50%)"
    //         }}
    //       />
    //       <CustomTooltip title="Home" placement="right" arrow>
    //         <IconButton color="inherit">
    //           <HomeIcon />
    //         </IconButton>
    //       </CustomTooltip>
    //       <CustomTooltip title="Settings" placement="right" arrow>
    //         <IconButton color="inherit">
    //           <SettingsIcon />
    //         </IconButton>
    //       </CustomTooltip>
    //       <CustomTooltip title="Info" placement="right" arrow>
    //         <IconButton color="inherit">
    //           <InfoIcon />
    //         </IconButton>
    //       </CustomTooltip>
    //     </Box>
    //   )}

    //   {/* Full Sidebar */}
    //   {sidebarOpen && (
    //     <Box
    //       sx={{
    //         position: "fixed",
    //         left: "0px",
    //         top: 0,
    //         width: "240px",
    //         height: "100vh",
    //         backgroundColor: "navy",
    //         color: "white",
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         zIndex: 1200,
    //         transition: "opacity 0.3s ease",
    //         backdropFilter: "blur(10px)",
    //       }}
    //     >
    //      <img
    //         src="/hellodocLogo.png"
    //         alt="Company Logo"
    //         style={{
    //           height: "100px",
    //           width: "100px",
    //           position: "absolute",
    //           top: "10px",
    //           //left: "50%", 
    //           transform: "translateX(-50%)"
    //         }}
    //       />
    //       <Typography variant="h6" sx={{ marginTop: 2 }}>
    //         Module Name
    //       </Typography>
    //     </Box>
    //   )}

    //   {/* Top Bar */}
    //   <AppBar
    //     sx={{
    //       position: "fixed",
    //       marginLeft: applyMargin ? "240px" : "80px",
    //       width: `calc(100% - ${applyMargin ? "240px" : "80px"})`,
    //       transition: "margin-left 0.3s ease",
    //       backgroundColor: "navy",
    //       color: "white",
    //       zIndex: 1100,
    //     }}
    //   >
    //     <Toolbar>
    //       <CustomTooltip title="Toggle Sidebar" placement="bottom" arrow>
    //         <IconButton color="inherit" onClick={toggleSidebar} edge="start">
    //           <MenuIcon />
    //         </IconButton>
    //       </CustomTooltip>
    //       <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
    //         Dashboard
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>

    //   {/* Main Content */}
    //   <Box
    //     component="main"
    //     sx={{
    //       flexGrow: 1,
    //       transition: "margin-left 0.3s ease",
    //       marginLeft: applyMargin ? "240px" : "80px",
    //       padding: "20px",
    //       backgroundColor: "#f5f5f5",
    //       width: "100%",
    //       minHeight: "100vh",
    //       pt: "64px",
    //     }}
    //   >
    //     <Typography variant="h4">Main Content Area</Typography>
    //   </Box>
    // </Box>
  );
};

export default App;
