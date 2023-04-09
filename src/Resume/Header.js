import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Phone, Email, LocationOn } from "@material-ui/icons";
import profilePic from "../Data/images/Afsar.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <Box textAlign="center" py={2}>
      <div className="header__container">
        <div className="header__left">
          <img src={profilePic} alt="Header pic" /> {/* Add the image */}
        </div>
        <div className="header__right">
          <Typography variant="h3">Afsar Ali</Typography>
          <Typography variant="h6">
            Senior Software Developement Engineer in Test
          </Typography>
          <Typography variant="h7">
            <Phone /> +65 94657845 | <Email /> mdafsar.ali273@gmail.com |{" "}
            <LocationOn /> Singapore
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Header;
