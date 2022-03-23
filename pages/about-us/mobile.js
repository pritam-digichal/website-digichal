import React from "react";
import { Row, Col, Divider } from "antd";
import Aboutus from "../../components/aboutUs";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";

const AboutUsMobile = () => {
  return (
    <Row type="flex">
      <Col span={24}>
        <HeaderMobile />
        <Aboutus />
        <FooterMobile />
      </Col>
    </Row>
  );
};

export default AboutUsMobile;
