import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import FeatureBanner from "../../components/featureBannerMobile";
import FeatureDetails from "../../components/featureDetails";

function FeatureMobile() {
  return (
    <>
      <Row>
        <Col span={24}>
          <FeatureBanner />
          <FeatureDetails />
        </Col>
      </Row>
    </>
  );
}

export default FeatureMobile;
