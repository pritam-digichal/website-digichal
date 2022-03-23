import { Row, Col, Divider } from "antd";
import React, { useState, useEffect } from "react";
import BannerMobile from "../../components/bannerMobile";
import DigichalServices from "../../components/digichalServices";
import HeaderMobile from "../../components/header-mobile";
import FooterMobile from "../../components/footer-mobile";

function ContactMobile() {
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

export default ContactMobile;
