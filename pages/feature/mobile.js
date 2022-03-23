import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import BannerMobile from "../../components/bannerMobile";
import DigichalServices from "../../components/digichalServices";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";

function FeatureMobile() {
  return (
    <>
      <Row>
        <Col span={24}>
          <HeaderMobile />
          <BannerMobile />
          <DigichalServices />
          <FooterMobile />
        </Col>
      </Row>
    </>
  );
}

export default FeatureMobile;
