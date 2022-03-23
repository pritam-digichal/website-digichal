import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import Banner from "../../components/banner";
import DigichalServices from "../../components/digichalServices";
import FooterDesktop from "../../components/footer-desktop";
import FeatureBanner from "../../components/featureBanner";

function FeatureDesktop() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderDesktop />
          <FeatureBanner />
          <FooterDesktop />
        </Col>
      </Row>
    </>
  );
}

export default FeatureDesktop;
