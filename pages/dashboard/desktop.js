import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import Banner from "../../components/banner";

function DashboardDesktop() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <Banner />
        </Col>
      </Row>
    </>
  );
}

export default DashboardDesktop;
