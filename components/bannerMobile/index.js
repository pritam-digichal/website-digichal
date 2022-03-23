import illustration from "../../assets/images/originals/mainImage.png";
import illustrationHindi from "../../assets/images/originals/illustrationHindi.png";
import playStore from "../../assets/images/originals/playStoreImage.png";
import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React from "react";
import Image from "next/image";

const BannerMobile = () => {
  return (
    <div style={styles.mainContentMobile}>
      <Image
        src={i18next.language === "hi" ? illustrationHindi : illustration}
        alt="illustration"
        objectFit="cover"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 20,
        }}
      >
        {i18next.language === "hi" ? (
          <div>
            <span style={styles.headingMobile2}>{i18next.t("DIGICHAL")}</span>
            <br />
            <span style={styles.headingMobile1}>
              {i18next.t("BANO_DIGITAL_WITH")}
            </span>
          </div>
        ) : (
          <div>
            <span style={styles.headingMobile1}>
              {i18next.t("BANO_DIGITAL_WITH")}
            </span>
            <br />
            <span style={styles.headingMobile2}>{i18next.t("DIGICHAL")}</span>
          </div>
        )}
        <div style={{ marginTop: "8px" }}>
          <span style={styles.headingMobile3}>
            {i18next.t("ONE_STOP_SOLUTION_TO_MANAGE_BUSINESS")}
          </span>
        </div>

        <div style={{ marginTop: "30px" }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.digichal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={playStore} alt="playStore" width={126} height={46} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerMobile;

const styles = {
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80vh",
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
    fontFamily: "Roboto",
  },
  headingMobile2: {
    fontSize: "32px",
    letterSpacing: "0.32px",
    color: "#3CB3E7",
    fontWeight: 600,
    fontFamily: "Roboto",
  },
  headingMobile3: {
    fontSize: "14px",
    letterSpacing: "0.14px",
    color: "#000000",
    fontFamily: "Roboto",
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
