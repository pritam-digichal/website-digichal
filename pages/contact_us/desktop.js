import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import HeaderDesktop from "../../components/header-desktop";
import Banner from "../../components/banner";
import DigichalServices from "../../components/digichalServices";
import FooterDesktop from "../../components/footer-desktop";
import FeatureBanner from "../../components/featureBanner";
import FeatureDetails from "../../components/featureDetails";
import ContactUs from "../../components/contactUs";

function ContactDesktop() {
  return (
    <>
      <Row type="flex">
        <Col span={24}>
          <HeaderDesktop />
          <ContactUs />
          <FooterDesktop />
        </Col>
      </Row>
    </>
  );
}

export default ContactDesktop;
