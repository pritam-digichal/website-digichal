import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React from "react";
import Image from "next/image";
import whyUsImage from "../../assets/images/originals/whyUsImage.png";
import headphoneIcon from "../../assets/images/originals/headphoneIcon.png";
import cloudIcon from "../../assets/images/originals/cloudIcon.png";
import freeIcon from "../../assets/images/originals/freeIcon.png";
import mobileViewIcon from "../../assets/images/originals/mobileViewIcon.png";
import { Card } from "antd";

const WhyUs = () => {
  return (
    <div style={styles.section}>
      <div style={isMobileOnly ? styles.mainContentMobile : styles.mainContent}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={styles.slideInUp}>
            <p
              style={isMobileOnly ? styles.chooseTextMobile : styles.chooseText}
            >
              {i18next.t("WHY_CHOOSE_US")}
            </p>
            {isMobileOnly ? (
              <div style={{ marginTop: "30px" }}>
                <Image src={whyUsImage} width={229} height={204} />
              </div>
            ) : (
              <div style={{ marginTop: "107px" }}>
                <Image src={whyUsImage} width={320} height={285} />
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={isMobileOnly ? { marginTop: "27px" } : styles.card1}>
              <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isMobileOnly ? (
                      <Image src={headphoneIcon} width={42} height={42} />
                    ) : (
                      <Image src={headphoneIcon} width={90} height={90} />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "8px", textAlign: "center" }
                        : { marginTop: "23px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("TWENTY_FOUR_SEVEN_SUPPORT")}
                    </span>
                  </div>

                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "5px", textAlign: "center" }
                        : { marginTop: "18px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("TWENTY_FOUR_SEVEN_SUPPORT_CONTENT")}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div style={isMobileOnly ? { marginTop: "27px" } : styles.card2}>
              <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isMobileOnly ? (
                      <Image src={cloudIcon} width={42} height={42} />
                    ) : (
                      <Image src={cloudIcon} width={90} height={90} />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "8px", textAlign: "center" }
                        : { marginTop: "23px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("ONLINE_BACKUP")}
                    </span>
                  </div>

                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "5px", textAlign: "center" }
                        : { marginTop: "18px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("ONLINE_BACKUP_CONTENT")}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div
            style={
              isMobileOnly
                ? {
                    marginLeft: "14px",
                    display: "flex",
                    flexDirection: "column",
                  }
                : {
                    marginLeft: "50px",
                    display: "flex",
                    flexDirection: "column",
                  }
            }
          >
            <div style={isMobileOnly ? { marginTop: "73px" } : styles.card3}>
              <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isMobileOnly ? (
                      <Image src={freeIcon} width={42} height={42} />
                    ) : (
                      <Image src={freeIcon} width={90} height={90} />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "8px", textAlign: "center" }
                        : { marginTop: "23px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("FREE_TO_USE")}
                    </span>
                  </div>

                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "5px", textAlign: "center" }
                        : { marginTop: "18px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("FREE_TO_USE_CONTENT")}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div style={isMobileOnly ? { marginTop: "14px" } : styles.card4}>
              <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isMobileOnly ? (
                      <Image src={mobileViewIcon} width={42} height={42} />
                    ) : (
                      <Image src={mobileViewIcon} width={90} height={90} />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "8px", textAlign: "center" }
                        : { marginTop: "23px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("DATA_PRIVACY")}
                    </span>
                  </div>

                  <div
                    style={
                      isMobileOnly
                        ? { marginTop: "5px", textAlign: "center" }
                        : { marginTop: "18px", textAlign: "center" }
                    }
                  >
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("DATA_PRIVACY_CONTENT")}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#FFFAF8",
  },
  chooseText: {
    fontSize: "40px",
    letterSpacing: "0.8px",
    color: "#090A0B",
    fontWeight: 600,
  },
  chooseTextMobile: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    color: "#090A0B",
    fontWeight: 600,
    textAlign: "center",
    marginTop: 32,
  },
  supportText: {
    fontSize: "25px",
    letterSpacing: "0.5px",
    color: "#3E3D3C",
    fontWeight: 400,
  },
  supportTextMobile: {
    fontSize: "16px",
    letterSpacing: "0.32px",
    color: "#3E3D3C",
    fontWeight: 400,
  },

  supportContent: {
    fontSize: "17px",
    letterSpacing: "0.34px",
    color: "#3E3D3C",
    fontWeight: 400,
    lineHeight: "13px",
  },
  supportContentMobile: {
    fontSize: "10px",
    letterSpacing: "0.2px",
    color: "#3E3D3C",
    fontWeight: 400,
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 70,
    paddingRight: 70,
  },
  mainContentMobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
  },

  card1: {
    marginTop: "70px",
  },
  card2: {
    marginTop: "70px",
  },
  card3: {
    marginTop: "120px",
  },
  card4: {
    marginTop: "50px",
  },
  root: {
    width: "312px",
    height: "312px",
    borderRadius: 10,
  },
  rootMobile: {
    // width: "158px",
    // height: "158px",
    borderRadius: 5,
  },
};

export default WhyUs;
