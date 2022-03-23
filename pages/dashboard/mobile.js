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
      <Row type="flex" align="middle" style={{ height: "15vh" }}>
        <Col span={24}>
          <HeaderDesktop />
        </Col>
      </Row>
      <Divider style={{ margin: 0 }} />
      <Row type="flex">
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
