import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import Banner from "../../components/banner";
import DigichalServices from "../../components/digichalServices";

function DashboardDesktop() {
  return (
    <>
      <Row type="flex" align="middle" style={{ height: "15vh" }}>
        <Col span={24}>
          <HeaderDesktop />
        </Col>
      </Row>
      <Row type="flex">
        <Col span={24}>
          <Banner />
          <DigichalServices />
        </Col>
      </Row>
    </>
  );
}

export default DashboardDesktop;
