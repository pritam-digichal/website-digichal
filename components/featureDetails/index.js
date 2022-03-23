import i1 from "../../assets/images/originals/i2.png";
import i1Hindi from "../../assets/images/originals/i2Hindi.png";
import i2 from "../../assets/images/originals/i5.png";
import i2Hindi from "../../assets/images/originals/i5Hindi.png";
import i4 from "../../assets/images/originals/i4.png";
import i8 from "../../assets/images/originals/i8.png";
import i8Hindi from "../../assets/images/originals/i8Hindi.png";
import avatarBanner from "../../assets/images/originals/avatarImage.png";
import avatarBannerHindi from "../../assets/images/originals/avatarImageHindi.png";
import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import Image from "next/image";
import { Row, Col } from "antd";

const FeatureDetails = () => {
  return (
    <Row justify="center" style={styles.container}>
      <Col span={24} flex={1}>
        <p style={isMobileOnly ? styles.mobileHeading1 : styles.heading1}>
          {i18next.t("EXPLORE_HOW_CAN_WE__HELP_GROW")}
        </p>
      </Col>
    </Row>
  );
};

export default FeatureDetails;

const styles = {
  container: {
    textAlign: "center",
  },
  heading1: {
    fontSize: "32px",
    letterSpacing: "0.36px",
    fontWeight: 600,
  },
  mobileHeading1: {
    fontSize: "18px",
    letterSpacing: "0.64px",
    fontWeight: 600,
  },
};
