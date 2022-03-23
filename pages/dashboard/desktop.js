import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import Banner from "../../components/banner";
import DigichalServices from "../../components/digichalServices";
import WhyUs from "../../components/whyUs";
import TutorialVideo from "../../components/tutorial-video";
import FooterDesktop from "../../components/footer-desktop";

function DashboardDesktop() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderDesktop />
          <Banner />
          <DigichalServices />
          <WhyUs />
          <TutorialVideo />
          <FooterDesktop />
        </Col>
      </Row>
    </>
  );
}

export default DashboardDesktop;
