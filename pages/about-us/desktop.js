import React from "react";
import { Row, Col, Divider } from "antd";
import Aboutus from "../../components/aboutUs";
import HeaderDesktop from "../../components/header-desktop";
import FooterDesktop from "../../components/footer-desktop";

const AboutUsDesktop = () => {
  return (
    <Row type="flex">
      <Col span={24}>
        <HeaderDesktop />
        <Aboutus />
        <FooterDesktop />
      </Col>
    </Row>
  );
};

export default AboutUsDesktop;
