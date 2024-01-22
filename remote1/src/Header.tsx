import { Button } from "@mui/material";
import moment from "moment";
import React from "react";

const Header = () => {
  return (
    <div className="w-full mx-auto bg-green-300 px-3 py-3 flex gap-2">
      Header Component {moment().format("LTS")}
      <Button variant="contained">Click Me</Button>
    </div>
  );
};

export default Header;
