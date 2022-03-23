import { Row, Col, Divider } from "antd";
import React from "react";
import HeaderDesktop from "../../components/header-desktop";
import FooterDesktop from "../../components/footer-desktop";
import PrivacyPolicy from "../../components/privacy-policy";

function PrivacyPolicyDesktop() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderDesktop />
          <PrivacyPolicy />
          <FooterDesktop />
        </Col>
      </Row>
    </>
  );
}

export default PrivacyPolicyDesktop;
