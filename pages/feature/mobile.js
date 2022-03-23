import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import FeatureBanner from "../../components/featureBannerMobile";
import FeatureDetails from "../../components/featureDetails";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";

function FeatureMobile() {
  return (
    <>
      <Row>
        <Col span={24}>
          <HeaderMobile />
          <FeatureBanner />
          <FeatureDetails />
          <FooterMobile />
        </Col>
      </Row>
    </>
  );
}

export default FeatureMobile;
