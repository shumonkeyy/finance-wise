import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const Foot = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      WISE ©{new Date().getFullYear()}
    </Footer>
  );
};
export default Foot;
