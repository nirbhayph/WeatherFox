// header text to show title of the app

import React from "react";
import { Badge, h2 } from "react-bootstrap";

const Header = props => {
  return (
    <div>
      <h2 style={{ marginTop: "25px", textAlign: "center" }}>
        {props.title}{" "}
        <Badge style={{ backgroundColor: "#413EA0" }}>
          {" "}
          {props.badgeTitle}
        </Badge>
      </h2>
    </div>
  );
};

export default Header;
