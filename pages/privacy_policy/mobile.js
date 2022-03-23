import { Row, Col, Divider } from "antd";
import React from "react";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";
import PrivacyPolicy from "../../components/privacy-policy";

function PrivacyPolicyMobile() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderMobile />
          <PrivacyPolicy />
          <FooterMobile />
        </Col>
      </Row>
    </>
  );
}

export default PrivacyPolicyMobile;
