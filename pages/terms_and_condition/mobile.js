import { Row, Col, Divider } from "antd";
import React from "react";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";
import TermsNCondition from "../../components/termsNcondition";

function TermsAndConditionMobile() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderMobile />
          <TermsNCondition />
          <FooterMobile />
        </Col>
      </Row>
    </>
  );
}

export default TermsAndConditionMobile;
