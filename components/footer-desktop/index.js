import { AutoComplete, Row, Col, Input } from "antd";
import Image from "next/image";
import React from "react";
const digicalLogo = require("./../../assets/images/logo.png");
const facebook = require("./../../assets/images/social_media/facebook.png");
const instagram = require("./../../assets/images/social_media/insta.png");
const linkedin = require("./../../assets/images/social_media/linkedlnIcon.png");
const twitter = require("./../../assets/images/social_media/twitter.png");
import Link from "next/link";
import i18next from "../../i18/index";

const FooterDesktop = () => {
  return (
    <div style={styles.footerBox}>
      <Row align="middle">
        <Col span={8}>
          <div style={styles.logoBox}>
            <Image alt="logo" src={digicalLogo} width={272} height={72} />
            <p style={styles.heading1}>
              {i18next.t("BANO_DIGITAL_WITH_DIGICHAL")}
            </p>
          </div>
        </Col>
        <Col span={16} align="middle">
          <Row justify="space-between" align="middle">
            <Col span={6} align="middle" style={{ cursor: "pointer" }}>
              <Link href="/" style={styles.removeLine}>
                <span style={styles.footerText}>{i18next.t("HOME")}</span>
              </Link>
            </Col>
            <Col span={6}>
              <Link
                href="https://www.digichal.in/terms_and_condition/"
                style={styles.removeLine}
              >
                <a target="_blank">
                  <span style={styles.footerText}>
                    {i18next.t("TERMS_AND_CONDITION")}
                  </span>
                </a>
              </Link>
            </Col>
            <Col span={6}>
              <Link
                href="https://www.digichal.in/privacy_policy/"
                style={styles.removeLine}
              >
                <a target="_blank">
                  <span style={styles.footerText}>
                    {i18next.t("PRIVACY_POLICY")}
                  </span>
                </a>
              </Link>
            </Col>
            <Col span={6}>
              <Link
                href="https://www.digichal.in/contact_us/"
                style={styles.removeLine}
              >
                <a target="_blank">
                  <span style={styles.footerText}>
                    {i18next.t("CONTACT_US")}
                  </span>
                </a>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row align="bottom" justify="center" style={{ marginTop: 60 }}>
        <Col span={24} align="middle" style={{ zIndex: 99 }}>
          <Link href="https://www.facebook.com/Digichal-112310851101773/">
            <a target="_blank">
              <span style={styles.socialBox}>
                <Image alt="logo" src={facebook} width={42} height={42} />
              </span>
            </a>
          </Link>
          <Link href="https://www.instagram.com/digichal_/">
            <a target="_blank">
              <span style={styles.socialBox}>
                <Image
                  alt="logo"
                  src={instagram}
                  width={42}
                  height={42}
                  className={{ marginLeft: 10, marginRight: 10 }}
                />
              </span>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/digichal">
            <a target="_blank">
              <span style={styles.socialBox}>
                <Image alt="logo" src={linkedin} width={42} height={42} />
              </span>
            </a>
          </Link>
          <Link href="https://twitter.com/digichal">
            <a target="_blank">
              <span style={styles.socialBox}>
                <Image alt="logo" src={twitter} width={42} height={42} />
              </span>
            </a>
          </Link>
        </Col>

        <Col style={{ marginTop: 20, zIndex: 99, paddingBottom: 25 }}>
          <span style={styles.copyrightText}>
            All Copyright Reserved @ DigiChal Private Limited
          </span>
        </Col>
      </Row>
    </div>
  );
};
const styles = {
  footerBox: {
    backgroundColor: "#F0F9FE",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  logoBox: {
    marginLeft: 72,
    marginTop: 44,
  },
  footerText: {
    fontSize: 20,
    color: "#090A0B",
    letterSpacing: 0.2,
  },
  socialBox: {
    marginLeft: 10,
    marginRight: 10,
  },
  copyrightText: {
    color: "#707272",
    fontSize: 14,
    letterSpacing: 1,
  },
  removeLine: {
    textDecoration: "none",
  },
  heading1: {
    fontSize: 25,
    letterSpacing: 0.5,
    color: "#3E3D3C",
    fontWeight: 400,
  },
};
export default FooterDesktop;
