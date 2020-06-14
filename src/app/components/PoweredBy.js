import React from "react";
import { Icon } from "antd";

const style = {
  color: "white",
  textAlign: "center",
  fontSize: "1em",
  paddingTop: "10px",
  height: "40px",
  marginTop: ".5em",
  lineHeight: "28px"
};

export default ({ who }) => {
  return (
    <div style={style} className="fadeInDelay3">
      <Icon type="thunderbolt" theme="twoTone" /> &nbsp; by &nbsp;{" "}
      <b> {who} </b> &nbsp; <Icon type="thunderbolt" theme="twoTone" /> <br />
    </div>
  );
};
