import { Row, Col } from "antd";
import React, {  } from "react";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";
import ContactUsMobile from "../../components/conatctUsMobile";

function ContactDesktop() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderMobile />
          <ContactUsMobile />
          <FooterMobile />
        </Col>
      </Row>
    </>
  );
}

export default ContactDesktop;
