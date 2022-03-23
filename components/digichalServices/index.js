import revenueGrowthImage from "../../assets/images/originals/revenueGrowthImage.png";
import customerEngagementImage from "../../assets/images/originals/customerEngagementImage.png";
import businessCostImage from "../../assets/images/originals/businessCostImage.png";
import businessExpansionImage from "../../assets/images/originals/businessExpansionImage.png";
import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React from "react";
import Image from "next/image";
import { Row, Col, Divider } from "antd";

const DigichalServices = () => {
  const [revenueGrowthString, setRevenueGrowthString] = React.useState(false);
  const [readText, setReadText] = React.useState(" Read More");

  const handleRevenueString = () => {
    setRevenueGrowthString(!revenueGrowthString);
    handleReadText();
  };

  const handleReadText = () => {
    if (revenueGrowthString) {
      setReadText(" Read More");
    } else {
      setReadText(" Read Less");
    }
  };

  const revenueString = i18next.t("REVENUE_GROWTH_CONTENT");
  return (
    <div style={isMobileOnly ? styles.mobileContainer : styles.container}>
      <div style={styles.headingText}>
        <p style={isMobileOnly ? styles.mobileHeading : styles.heading}>
          {i18next.t("HOW_WILL_DIGICHAL_HELP_US")}
        </p>
      </div>

      <div
        style={
          isMobileOnly
            ? styles.contentContainerMobile
            : styles.revenueContentContainer
        }
      >
        {isMobileOnly ? (
          <div style={styles.slideInDown}>
            <Image
              src={revenueGrowthImage}
              alt="revenueGrowthImage"
              objectFit="cover"
            />
          </div>
        ) : (
          <div style={styles.revenueImage}>
            <Image
              src={revenueGrowthImage}
              alt="revenueGrowthImage"
              width={460}
              height={400}
            />
          </div>
        )}

        <div
          style={isMobileOnly ? styles.paraContentMobile : styles.paraContent}
        >
          <div style={isMobileOnly ? styles.circle1Mobile : styles.circle1}>
            <div style={isMobileOnly ? styles.circle2Mobile : styles.circle2}>
              <span
                style={
                  isMobileOnly ? styles.numberTextMobile : styles.numberText
                }
              >
                1
              </span>
            </div>
          </div>

          <p
            style={
              isMobileOnly ? styles.growthMobileHeading : styles.growthHeading
            }
          >
            {i18next.t("REVENUE_GROWTH")}
          </p>
          <p
            style={
              isMobileOnly ? styles.growthMobileContent : styles.growthContent
            }
          >
            {revenueGrowthString
              ? revenueString
              : revenueString.substring(0, 460) + "... "}
            <span
              style={isMobileOnly ? styles.moreTextMobile : styles.moreText}
              onClick={handleRevenueString}
            >
              {readText}
            </span>
          </p>
        </div>
      </div>

      {isMobileOnly ? (
        <div
          style={
            isMobileOnly
              ? styles.contentContainerMobile
              : styles.contentContainer
          }
        >
          <div>
            <Image
              src={businessCostImage}
              alt="businessCostImage"
              objectFit="cover"
            />
          </div>

          <div
            style={isMobileOnly ? styles.paraContentMobile : styles.paraContent}
          >
            <div style={isMobileOnly ? styles.circle1Mobile : styles.circle1}>
              <div style={isMobileOnly ? styles.circle2Mobile : styles.circle2}>
                <span
                  style={
                    isMobileOnly ? styles.numberTextMobile : styles.numberText
                  }
                >
                  2
                </span>
              </div>
            </div>
            <p
              style={
                isMobileOnly ? styles.growthMobileHeading : styles.growthHeading
              }
            >
              {i18next.t("DECREASE_IN_COST_OF_BUSINESS")}
            </p>
            <p
              style={
                isMobileOnly ? styles.growthMobileContent : styles.growthContent
              }
            >
              {i18next.t("DECREASE_IN_COST_OF_BUSINESS_CONTENT")}
            </p>
          </div>
        </div>
      ) : (
        <div
          style={
            isMobileOnly
              ? styles.contentContainerMobile
              : styles.contentContainer
          }
        >
          <div
            style={isMobileOnly ? styles.paraContentMobile : styles.paraContent}
          >
            <div style={isMobileOnly ? styles.circle1Mobile : styles.circle1}>
              <div style={isMobileOnly ? styles.circle2Mobile : styles.circle2}>
                <span
                  style={
                    isMobileOnly ? styles.numberTextMobile : styles.numberText
                  }
                >
                  2
                </span>
              </div>
            </div>
            <p
              style={
                isMobileOnly ? styles.growthMobileHeading : styles.growthHeading
              }
            >
              {i18next.t("DECREASE_IN_COST_OF_BUSINESS")}
            </p>
            <p
              style={
                isMobileOnly ? styles.growthMobileContent : styles.growthContent
              }
            >
              {i18next.t("DECREASE_IN_COST_OF_BUSINESS_CONTENT")}
            </p>
          </div>
          <div style={styles.slideInDown}>
            <Image
              src={businessCostImage}
              alt="businessCostImage"
              width={366}
              height={405}
            />
          </div>
        </div>
      )}

      <div
        style={
          isMobileOnly ? styles.contentContainerMobile : styles.contentContainer
        }
      >
        {isMobileOnly ? (
          <div>
            <Image
              src={customerEngagementImage}
              alt="customerEngagementImage"
              objectFit="cover"
            />
          </div>
        ) : (
          <div style={styles.slideInDown}>
            <Image
              src={customerEngagementImage}
              alt="customerEngagementImage"
              width={366}
              height={364}
            />
          </div>
        )}

        <div
          style={isMobileOnly ? styles.paraContentMobile : styles.paraContent}
        >
          <div style={isMobileOnly ? styles.circle1Mobile : styles.circle1}>
            <div style={isMobileOnly ? styles.circle2Mobile : styles.circle2}>
              <span
                style={
                  isMobileOnly ? styles.numberTextMobile : styles.numberText
                }
              >
                3
              </span>
            </div>
          </div>
          <p
            style={
              isMobileOnly ? styles.growthMobileHeading : styles.growthHeading
            }
          >
            {i18next.t("INCREASE_IN_CUSTOMER_ENGAGEMENT")}
          </p>
          <p
            style={
              isMobileOnly ? styles.growthMobileContent : styles.growthContent
            }
          >
            {i18next.t("INCREASE_IN_CUSTOMER_ENGAGEMENT_CONTENT")}
          </p>
        </div>
      </div>

      {isMobileOnly ? (
        <div
          style={
            isMobileOnly
              ? styles.contentContainerMobile
              : styles.contentContainer
          }
        >
          <div>
            <Image
              src={businessExpansionImage}
              alt="businessExpansionImage"
              objectFit="cover"
            />
          </div>

          <div
            style={isMobileOnly ? styles.paraContentMobile : styles.paraContent}
          >
            <div style={isMobileOnly ? styles.circle1Mobile : styles.circle1}>
              <div style={isMobileOnly ? styles.circle2Mobile : styles.circle2}>
                <span
                  style={
                    isMobileOnly ? styles.numberTextMobile : styles.numberText
                  }
                >
                  4
                </span>
              </div>
            </div>
            <p
              style={
                isMobileOnly ? styles.growthMobileHeading : styles.growthHeading
              }
            >
              {i18next.t("BUSINESS_EXPANSION")}
            </p>
            <p
              style={
                isMobileOnly ? styles.growthMobileContent : styles.growthContent
              }
            >
              {i18next.t("BUSINESS_EXPANSION_CONTENT")}
            </p>
          </div>
        </div>
      ) : (
        <div
          style={
            isMobileOnly
              ? styles.contentContainerMobile
              : styles.contentContainer
          }
        >
          <div
            style={isMobileOnly ? styles.paraContentMobile : styles.paraContent}
          >
            <div style={isMobileOnly ? styles.circle1Mobile : styles.circle1}>
              <div style={isMobileOnly ? styles.circle2Mobile : styles.circle2}>
                <span
                  style={
                    isMobileOnly ? styles.numberTextMobile : styles.numberText
                  }
                >
                  4
                </span>
              </div>
            </div>
            <p
              style={
                isMobileOnly ? styles.growthMobileHeading : styles.growthHeading
              }
            >
              {i18next.t("BUSINESS_EXPANSION")}
            </p>
            <p
              style={
                isMobileOnly ? styles.growthMobileContent : styles.growthContent
              }
            >
              {i18next.t("BUSINESS_EXPANSION_CONTENT")}
            </p>
          </div>
          <div style={styles.slideInDown}>
            <Image
              src={businessExpansionImage}
              alt="businessExpansionImage"
              width={366}
              height={403}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DigichalServices;

const styles = {
  container: {
    paddingLeft: 70,
    paddingRight: 70,
  },
  mobileContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    fontSize: "30px",
    letterSpacing: "0.7px",
    fontWeight: 500,
    color: "#000000",
  },
  mobileHeading: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    fontWeight: 600,
    color: "#000000",
  },
  growthHeading: {
    fontSize: "25px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    marginTop: "30px",
    fontWeight: 500,
  },
  growthMobileHeading: {
    fontSize: "16px",
    letterSpacing: "0.5px",
    color: "#090A0B",
    marginTop: "30px",
    fontWeight: 600,
  },
  growthContent: {
    fontSize: "18px",
    letterSpacing: "0.7px",
    color: "#3E3D3C",
    width: "452px",
    textAlign: "justify",
  },
  growthMobileContent: {
    fontSize: "12px",
    letterSpacing: "0.24px",
    color: "#3E3D3C",
    // width: "452px",
  },

  numberText: {
    fontSize: "22px",
    letterSpacing: "0.44px",
    fontWeight: 600,
    color: "#ffffff",
  },
  numberTextMobile: {
    fontSize: "14px",
    letterSpacing: "0.28px",
    fontWeight: 600,
    color: "#ffffff",
  },
  paraContent: {
    display: "flex",
    flexDirection: "column",
  },

  circle1: {
    height: "64px",
    width: "64px",
    backgroundColor: "#FFECE3",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle1Mobile: {
    height: "40px",
    width: "40px",
    backgroundColor: "#FFECE3",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle2: {
    height: "44px",
    width: "44px",
    backgroundColor: "#EF6E2C",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle2Mobile: {
    height: "30px",
    width: "30px",
    backgroundColor: "#EF6E2C",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "70px",
  },
  revenueContentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginTop: "70px",
  },

  revenueImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  moreText: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    fontWeight: 400,
    color: "#3CB3E7",
    cursor: "pointer",
  },
  moreTextMobile: {
    fontSize: "12px",
    letterSpacing: "0.24px",
    fontWeight: 400,
    color: "#3CB3E7",
    cursor: "pointer",
  },
  headingText: {
    textAlign: "center",
  },
};
