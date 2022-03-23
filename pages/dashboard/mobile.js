import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import BannerMobile from "../../components/bannerMobile";
import DigichalServices from "../../components/digichalServices";
import WhyUs from "../../components/whyUs";

function DashboardDesktop() {
  return (
    <>
      <Row>
        <Col span={24}>
          <BannerMobile />
          <DigichalServices />
          <WhyUs />
        </Col>
      </Row>
    </>
  );
}

export default DashboardDesktop;
