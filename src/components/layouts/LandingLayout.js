import React from "react";
import { Flex } from "@chakra-ui/core";
import Header from "../sections/Header";
// import Footer from "../sections/Footer";

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      {/* <Footer /> */}
    </Flex>
  );
}
