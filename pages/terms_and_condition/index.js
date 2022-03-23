import { Row, Col, Divider } from "antd";
import React from "react";
import TermsAndConditionDesktop from "./desktop";
import TermsAndConditionMobile from "./mobile";
import { useMediaQuery } from "react-responsive";

function TermsAndCondition() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop && <TermsAndConditionDesktop />}
      {isTabletOrMobile && <TermsAndConditionMobile />}
    </>
  );
}

export default TermsAndCondition;
