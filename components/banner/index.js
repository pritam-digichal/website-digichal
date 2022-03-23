import illustration from "../../assets/images/originals/mainImage.png";
import illustrationHindi from "../../assets/images/originals/illustrationHindi.png";
import playStore from "../../assets/images/originals/playStoreImage.png";
import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div style={styles.mainContent}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {i18next.language === "hi" ? (
          <div style={styles.slideInLeft}>
            <span style={styles.heading2}>{i18next.t("DIGICHAL")}</span>
            <br />
            <span style={styles.heading1}>
              {i18next.t("BANO_DIGITAL_WITH")}
            </span>
          </div>
        ) : (
          <div style={styles.slideInLeft}>
            <span style={styles.heading1}>
              {i18next.t("BANO_DIGITAL_WITH")}
            </span>
            <br />
            <span style={styles.heading2}>{i18next.t("DIGICHAL")}</span>
          </div>
        )}

        <div style={styles.slideInUp}>
          <span style={styles.heading3}>
            {i18next.t("ONE_STOP_SOLUTION_TO_MANAGE_BUSINESS")}
          </span>
        </div>

        <div style={styles.slideInUp1}>
          <a
            href="https://play.google.com/store/apps/details?id=com.digichal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={playStore} alt="playStore" width={240} height={72} />
          </a>
        </div>
      </div>
      <div style={styles.fadeIn}>
        <Image
          src={i18next.language === "hi" ? illustrationHindi : illustration}
          alt="illustration"
          width={693}
          height={520}
        />
      </div>
    </div>
  );
};

export default Banner;

const styles = {
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80vh",
    paddingLeft: "70px",
  },
  heading1: {
    fontSize: "41px",
    letterSpacing: "0.41px",
    color: "#000000",
  },
  heading2: {
    fontSize: "75px",
    letterSpacing: "0.75px",
    color: "#3CB3E7",
    fontWeight: 500,
  },
  heading3: {
    fontSize: "23px",
    letterSpacing: "0.23px",
    color: "#000000",
    fontWeight: 400,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingMobile1: {
    fontSize: "20px",
    letterSpacing: "0.2px",
    color: "#000000",
  },
  headingMobile2: {
    fontSize: "32px",
    letterSpacing: "0.32px",
    color: "#3CB3E7",
    fontWeight: 600,
  },
  headingMobile3: {
    fontSize: "14px",
    letterSpacing: "0.14px",
    color: "#000000",
  },
  mobileMainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContentMobile: {
    display: "flex",
    flexDirection: "column",
    marginTop: "27px",
  },

  slideInUp: {
    marginTop: "50px",
  },
  slideInUp1: {
    marginTop: "50px",
    cursor: "pointer",
    textDecoration: "none",
  },
};
