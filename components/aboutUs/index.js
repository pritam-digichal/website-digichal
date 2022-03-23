import about_us_1 from "../../assets/images/about_us/about_us_1.png";
import about_us_2 from "../../assets/images/about_us/about_us_2.png";
import about_us_3 from "../../assets/images/about_us/about_us_3.png";
import about_us_4 from "../../assets/images/about_us/about_us_4.png";
import sagar from "../../assets/images/team/sagar_photo.png";
import pawan from "../../assets/images/team/pawan_photo.png";
import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React from "react";
import Image from "next/image";
import { Row, Col, Divider } from "antd";

const AboutUsDesktop = () => {
  return (
    <div style={isMobileOnly ? styles.sectionMobile : styles.section}>
      <div
        style={
          isMobileOnly ? styles.aboutUsMobileContent : styles.aboutUsContent
        }
      >
        <h2
          style={isMobileOnly ? styles.aboutUsMobileText : styles.aboutUsText}
        >
          {i18next.t("ABOUT_US")}
        </h2>
        <p
          style={
            isMobileOnly ? styles.aboutUsInstMobileText : styles.aboutUsInstText
          }
        >
          {i18next.t("BANO_DIGITAL_WITH_DIGICHAL")}
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={about_us_1} width={677} height={574} />
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <p
          style={
            isMobileOnly ? styles.growthContentMobile : styles.growthContent
          }
        >
          {i18next.t("ABOUT_US_INSTRUCTION_FIRST_PART")}
          <br />
          <br />
          {i18next.t("ABOUT_US_INSTRUCTION_SECOND_PART")}
        </p>
      </div>

      <div
        style={
          isMobileOnly
            ? {
                display: "flex",
                flexDirection: "column-reverse",
                // justifyContent: "space-between",
                marginTop: 60,
                width: "100%",
              }
            : {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 60,
                width: "100%",
              }
        }
      >
        <div
          style={
            isMobileOnly
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "45%",
                }
          }
        >
          <p
            style={
              isMobileOnly ? styles.growthHeadingMobile : styles.growthHeading
            }
          >
            {i18next.t("TRANSFORM_YOUR_KHATA")}
          </p>

          <p
            style={
              isMobileOnly ? styles.growthContentMobile : styles.growthContent
            }
          >
            {i18next.t("TRANSFORM_YOUR_KHATA_CONTENT")}
          </p>
        </div>
        <div style={{ width: "10%" }} />
        <div style={isMobileOnly ? { width: "100%" } : { width: "45%" }}>
          <Image src={about_us_2} width={732} height={412} />
        </div>
      </div>

      <div
        style={
          isMobileOnly
            ? {
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                marginTop: 60,
                width: "100%",
              }
            : {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 60,
                width: "100%",
              }
        }
      >
        <div style={isMobileOnly ? { width: "100%" } : { width: "45%" }}>
          <Image src={about_us_3} width={626} height={389} />
        </div>
        <div style={{ width: "10%" }} />
        <div
          style={
            isMobileOnly
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "45%",
                }
          }
        >
          <p
            style={
              isMobileOnly ? styles.growthHeadingMobile : styles.growthHeading
            }
          >
            {i18next.t("EXPAND_YOUR_REACH")}
          </p>

          <p
            style={
              isMobileOnly ? styles.growthContentMobile : styles.growthContent
            }
          >
            {i18next.t("EXPAND_YOUR_REACH_CONTENT_PART_FIRST")}
            <br />
            <br />
            {i18next.t("EXPAND_YOUR_REACH_CONTENT_PART_SECOND")}
          </p>
        </div>
      </div>

      <div
        style={
          isMobileOnly
            ? {
                display: "flex",
                flexDirection: "column-reverse",
                // justifyContent: "space-between",
                marginTop: 60,
                width: "100%",
              }
            : {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 60,
                width: "100%",
              }
        }
      >
        <div
          style={
            isMobileOnly
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "45%",
                }
          }
        >
          <p
            style={
              isMobileOnly ? styles.growthHeadingMobile : styles.growthHeading
            }
          >
            {i18next.t("LETS_CONQUER_TOGETHER")}
          </p>

          <p
            style={
              isMobileOnly ? styles.growthContentMobile : styles.growthContent
            }
          >
            {i18next.t("LETS_CONQUER_TOGETHER_CONTENT")}
          </p>
        </div>
        <div style={{ width: "10%" }} />
        <div style={isMobileOnly ? { width: "100%" } : { width: "45%" }}>
          <Image src={about_us_4} width={632} height={350} />
        </div>
      </div>
      <div style={{ marginTop: "70px", marginBottom: "40px" }}>
        <h2 style={isMobileOnly ? styles.nameTextMobile : styles.nameText}>
          {i18next.t("OUR_BRAIN_BEHIND_THIS")}
        </h2>

        <div
          style={
            isMobileOnly
              ? {
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "space-between",
                  marginTop: "30px",
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "30px",
                }
          }
        >
          <div
            style={
              isMobileOnly
                ? {
                    // marginRight: "22px",
                    marginTop: "20px",
                    textAlign: "center",
                  }
                : {
                    marginRight: "22px",
                    marginTop: "20px",
                    textAlign: "center",
                    width: "50%",
                  }
            }
          >
            <div>
              <Image src={sagar} width={620} height={423} />
            </div>

            <p
              style={
                isMobileOnly ? styles.growthHeadingMobile : styles.growthHeading
              }
            >
              {i18next.t("SAGAR_CHAUHAN")}
            </p>

            <p
              style={
                isMobileOnly ? styles.growthContentMobile : styles.growthContent
              }
            >
              {i18next.t("SAGAR_CHAUHAN_INTRO")}
            </p>
          </div>
          <div
            style={
              isMobileOnly
                ? {
                    // marginRight: "22px",
                    marginTop: "20px",
                    textAlign: "center",
                  }
                : {
                    marginRight: "22px",
                    marginTop: "20px",
                    textAlign: "center",
                    width: "50%",
                  }
            }
          >
            <div style={{ marginTop: 25 }}>
              <Image src={pawan} width={620} height={423} />
            </div>

            <p
              style={
                isMobileOnly ? styles.growthHeadingMobile : styles.growthHeading
              }
            >
              {i18next.t("PAWAN_KUMAR")}
            </p>

            <p
              style={
                isMobileOnly ? styles.growthContentMobile : styles.growthContent
              }
            >
              {i18next.t("PAWAN_KUMAR_INTRO")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDesktop;

const styles = {
  section: {
    paddingLeft: 70,
    paddingRight: 70,
  },
  sectionMobile: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  aboutText: {
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  aboutUsContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutUsMobileContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileHeading: {
    fontSize: "22px",
    fontWeight: "500px",
    color: "#2D2D2D",
    textAlign: "center",
  },
  // heading: {

  // },
  illustration: {
    display: ["block", null, null, "flex"],
    position: "relative",
    img: {
      display: ["block", null, null, "block"],
      maxWidth: ["90%"],
      m: ["0 auto"],
    },
  },
  buttonWrapper: {
    textAlign: ["center"],
    position: ["static", null, null, "absolute"],
    left: "50%",
    top: 0,
    transform: ["unset", null, null, "translateX(-50%)"],
  },
  pText: {
    fontSize: "16px",
    lineHeight: "35px",
  },
  nameText: {
    textAlign: "center",
    marginTop: "10px",
  },
  nameTextMobile: {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: 600,
  },
  designationText: {
    textAlign: "center",
    marginTop: "10px",
  },
  growthHeading: {
    fontSize: "25px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    marginTop: "30px",
  },
  growthHeadingMobile: {
    fontSize: "20px",
    color: "#090A0B",
    marginTop: 24,
    fontWeight: 600,
  },
  growthContent: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    color: "#3E3D3C",
  },
  growthContentMobile: {
    fontSize: "14px",
    letterSpacing: "0.14px",
    color: "#3E3D3C",
  },
  aboutUsText: {
    fontSize: "38px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    marginTop: "30px",
    textAlign: "center",
  },
  aboutUsInstText: {
    fontSize: "28px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    // marginTop: "30px",
    textAlign: "center",
    marginBottom: "20px",
  },
  aboutUsMobileText: {
    fontSize: "28px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    marginTop: "30px",
    textAlign: "center",
  },
  aboutUsInstMobileText: {
    fontSize: "22px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    // marginTop: "30px",
    textAlign: "center",
  },
};
