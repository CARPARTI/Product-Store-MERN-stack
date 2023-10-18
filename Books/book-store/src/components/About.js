import { Box, Typography } from "@mui/material";
import React from "react";

//Details of about us page
const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is Group 15 Project
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3" >
          By <br></br>Oluwanifemi Ajayi <br></br>
            Esosa Ighoodaro
        </Typography>
      </Box>
    </div>
  );
};

export default About;