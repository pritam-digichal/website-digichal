import contact_us from "../../assets/images/contact_us.png";
import locationImage from "../../assets/images/contact_us/location.png";
import mailImage from "../../assets/images/contact_us/mail.png";
import supportImage from "../../assets/images/contact_us/support.png";
import facebook from "../../assets/images/social_media/facebook.png";
import insta from "../../assets/images/social_media/insta.png";
import twitter from "../../assets/images/social_media/twitter.png";
import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import Link from "next/link";
const ContactUsMobile = () => {
  return (
    <>
      <Row align="bottom" justify="center" style={{ marginTop: 60 }}>
        <Col span={24} align="middle">
          <Image src={contact_us} alt="illustration" width={800} height={420} />
        </Col>
        <Col span={24} align="middle">
          <span style={styles.header1}>
            {i18next.t("GET_IN_TOUCH_WITH_US")}
          </span>
        </Col>
      </Row>
      <Row
        align="bottom"
        justify="center"
        style={{ marginTop: 60 }}
        gutter={[0, 24]}
      >
        <Col span={24} align="middle">
          <div style={{ textAlign: "center" }}>
            <div>
              <Image src={mailImage} width={48} height={44} />
            </div>
            <h2>{i18next.t("EMAIL_ADDRESS")}</h2>
            <p>Info@digichal.in</p>
          </div>
        </Col>
        <Col span={24} align="middle">
          <div style={{ textAlign: "center" }}>
            <div>
              <Image src={supportImage} width={48} height={44} />
            </div>
            <h2>{i18next.t("LIVE_SUPPORT")}</h2>
            <p>+91-8062012502</p>
          </div>
        </Col>
        <Col span={24} align="middle">
          <div style={{ textAlign: "center" }}>
            <div>
              <Image src={locationImage} width={44} height={48} />
            </div>
            <h2>{i18next.t("OUR_LOCATION")}</h2>
            <p>+75C, Park Street, Kolkata-700016 West Bengal, India.</p>
          </div>
        </Col>
        {/* <Col span={24} align="middle" style={{ marginTop: 60 }}>
          <span style={styles.header1}>{i18next.t("OUR_CONTACT_INFO")}</span>
        </Col> */}
        <Col span={24} align="middle" style={{ marginTop: 60 }}>
          <span style={styles.header1}>{i18next.t("FOLLOW_US")}</span>
        </Col>
        <Col span={10} align="middle">
          <div style={styles.socialMediaContent}>
            <div>
              <div style={styles.imageIcon}>
                <Link href="https://www.facebook.com/Digichal-112310851101773/">
                  <Image
                    src={facebook}
                    width={isMobileOnly ? 30 : 70}
                    height={isMobileOnly ? 30 : 70}
                  />
                </Link>
              </div>
            </div>
            <div>
              <div style={styles.imageIcon}>
                <Link href="https://twitter.com/digichal">
                  <Image
                    src={twitter}
                    width={isMobileOnly ? 30 : 70}
                    height={isMobileOnly ? 30 : 70}
                  />
                </Link>
              </div>
            </div>
            <div>
              <div style={styles.imageIcon}>
                <Link href="https://www.instagram.com/digichal_/">
                  <Image
                    src={insta}
                    width={isMobileOnly ? 30 : 70}
                    height={isMobileOnly ? 30 : 70}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ContactUsMobile;

const styles = {
  header1: {
    fontSize: 32,
    color: "#3cb3e7",
    fontWeight: 800,
  },
  socialMediaContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  imageIcon: {
    cursor: "pointer",
    // marginLeft: 30,
  },
};
