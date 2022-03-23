import { Row, Col, Divider } from "antd";
import React from "react";
import HeaderDesktop from "../../components/header-desktop";
import FooterDesktop from "../../components/footer-desktop";
import TermsNCondition from "../../components/termsNcondition";

function TermsAndConditionDesktop() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderDesktop />
          <TermsNCondition />
          <FooterDesktop />
        </Col>
      </Row>
    </>
  );
}

export default TermsAndConditionDesktop;
