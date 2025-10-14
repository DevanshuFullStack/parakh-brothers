import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ShopImages from "../components/ShopImages";
import Awards from "../components/Awards";
import Team from "../components/Team";
import SisterFirms from "../components/SisterFirms";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <Box id="about">
        <AboutUs />
      </Box>
      <Box id="team">
        <Team />
      </Box>
      <ShopImages />
      <Box id="awards">
        <Awards />
      </Box>
      <SisterFirms />
    </Box>
  );
};

export default Home;
