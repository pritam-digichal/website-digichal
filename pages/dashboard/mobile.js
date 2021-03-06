import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import BannerMobile from "../../components/bannerMobile";
import DigichalServices from "../../components/digichalServices";
import WhyUs from "../../components/whyUs";
import TutorialVideo from "../../components/tutorial-video";
import Review from "../../components/review-mobile";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";

function DashboardDesktop() {
  return (
    <>
      <Row>
        <Col span={24}>
          <HeaderMobile />
          <BannerMobile />
          <DigichalServices />
          <WhyUs />
          <TutorialVideo />
          <Review />
          <FooterMobile />
        </Col>
      </Row>
    </>
  );
}

export default DashboardDesktop;
