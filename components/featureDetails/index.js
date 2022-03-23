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
    <div style={isMobileOnly ? styles.sectionMobile : styles.section}>
      <div style={styles.mobileContent}>
        <div style={{ textAlign: "center" }}>
          <p style={isMobileOnly ? styles.mobileHeading1 : styles.heading1}>
            {i18next.t("EXPLORE_HOW_CAN_WE__HELP_GROW")}
          </p>
        </div>
        <div
          style={
            isMobileOnly
              ? styles.contentContainerMobile
              : styles.contentContainer
          }
        >
          <div
            style={
              isMobileOnly ? styles.detailContentMobile : styles.detailContent
            }
          >
            {isMobileOnly ? (
              <Image
                src={i18next.language === "hi" ? i8Hindi : i8}
                alt="i8"
                objectFit="cover"
              />
            ) : (
              <div style={styles.slideInLeft}>
                <Image
                  src={i18next.language === "hi" ? i8Hindi : i8}
                  alt="i8"
                  width={554}
                  height={520}
                />
              </div>
            )}
          </div>
          <div style={styles.detailContainer}>
            <div style={styles.slideInRight}>
              <div>
                <p
                  style={isMobileOnly ? styles.mobileHeading2 : styles.heading2}
                >
                  {i18next.t("DISCOVERY")}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("GO_ONLINE_WITH_YOUR_BUSINESS")}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("SHARE_YOUR_CATALOGUE")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("GET_NEW_ORDER_ALERTS")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("ACCEPT_YOUR_ORDERS")}
                  </p>
                </div>
              </div>
            </div>
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
            <div
              item
              xs={12}
              md={12}
              style={
                isMobileOnly ? styles.detailContentMobile : styles.detailContent
              }
            >
              <Image
                src={i18next.language === "hi" ? i2Hindi : i2}
                alt="i2"
                objectFit="cover"
              />
            </div>
            <div style={styles.detailContainer}>
              <div>
                <p
                  style={isMobileOnly ? styles.mobileHeading2 : styles.heading2}
                >
                  {i18next.t("ACCOUNTING")}
                </p>
              </div>
              <div
                item
                xs={12}
                md={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image src={i4} alt="iq" width={15} height={15} />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("RECORD_YOUR_SALES")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image src={i4} alt="iq" width={15} height={15} />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("CREATE_PROFESSIONAL_INVOICES_IN_SECONDSD")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image src={i4} alt="iq" width={15} height={15} />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("TRACK_YOUR_BUSINESS")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image src={i4} alt="iq" width={15} height={15} />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("ALL_CARDS_IN_ONE_PLACE")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            item
            xs={12}
            md={12}
            style={
              isMobileOnly
                ? styles.contentContainerMobile
                : styles.contentContainer
            }
          >
            <div style={styles.slideInRightAccounting}>
              <div
                item
                xs={12}
                md={12}
                style={{
                  marginTop: "24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <p
                    style={
                      isMobileOnly ? styles.mobileHeading2 : styles.heading2
                    }
                  >
                    {i18next.t("ACCOUNTING")}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={styles.imageContainer}>
                    {isMobileOnly ? (
                      <Image src={i4} alt="iq" width={15} height={15} />
                    ) : (
                      <Image
                        src={i4}
                        alt="iq"
                        width={21}
                        height={21}
                        style={styles.bulletImage}
                      />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? styles.bulletContentMobile
                        : styles.bulletContent
                    }
                  >
                    <p
                      style={
                        isMobileOnly
                          ? styles.bulletMobileText
                          : styles.bulletText
                      }
                    >
                      {i18next.t("RECORD_YOUR_SALES")}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={styles.imageContainer}>
                    {isMobileOnly ? (
                      <Image src={i4} alt="iq" width={15} height={15} />
                    ) : (
                      <Image
                        src={i4}
                        alt="iq"
                        width={21}
                        height={21}
                        style={styles.bulletImage}
                      />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? styles.bulletContentMobile
                        : styles.bulletContent
                    }
                  >
                    <p
                      style={
                        isMobileOnly
                          ? styles.bulletMobileText
                          : styles.bulletText
                      }
                    >
                      {i18next.t("CREATE_PROFESSIONAL_INVOICES_IN_SECONDSD")}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={styles.imageContainer}>
                    {isMobileOnly ? (
                      <Image src={i4} alt="iq" width={15} height={15} />
                    ) : (
                      <Image
                        src={i4}
                        alt="iq"
                        width={21}
                        height={21}
                        style={styles.bulletImage}
                      />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? styles.bulletContentMobile
                        : styles.bulletContent
                    }
                  >
                    <p
                      style={
                        isMobileOnly
                          ? styles.bulletMobileText
                          : styles.bulletText
                      }
                    >
                      {i18next.t("TRACK_YOUR_BUSINESS")}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                  }}
                >
                  <div style={styles.imageContainer}>
                    {isMobileOnly ? (
                      <Image src={i4} alt="iq" width={15} height={15} />
                    ) : (
                      <Image
                        src={i4}
                        alt="iq"
                        width={21}
                        height={21}
                        style={styles.bulletImage}
                      />
                    )}
                  </div>
                  <div
                    style={
                      isMobileOnly
                        ? styles.bulletContentMobile
                        : styles.bulletContent
                    }
                  >
                    <p
                      style={
                        isMobileOnly
                          ? styles.bulletMobileText
                          : styles.bulletText
                      }
                    >
                      {i18next.t("ALL_CARDS_IN_ONE_PLACE")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={
                isMobileOnly ? styles.detailContentMobile : styles.detailContent
              }
            >
              <div style={styles.slideInLeft}>
                <Image
                  src={i18next.language === "hi" ? i2Hindi : i2}
                  alt="i2"
                  width={547}
                  height={547}
                />
              </div>
            </div>
          </div>
        )}

        <div
          style={
            isMobileOnly
              ? styles.contentContainerMobile
              : styles.contentContainer
          }
        >
          <div
            style={
              isMobileOnly ? styles.detailContentMobile : styles.detailContent
            }
          >
            {isMobileOnly ? (
              <Image
                src={i18next.language === "hi" ? i1Hindi : i1}
                alt="i2"
                objectFit="cover"
              />
            ) : (
              <div style={styles.slideInLeft}>
                <Image
                  src={i18next.language === "hi" ? i1Hindi : i1}
                  alt="i2"
                  width={547}
                  height={547}
                />
              </div>
            )}
          </div>
          <div style={styles.detailContainer}>
            <div style={styles.slideInRight}>
              <div>
                <p
                  style={isMobileOnly ? styles.mobileHeading2 : styles.heading2}
                >
                  {i18next.t("PROMOTION_AND_BRANDING")}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("YOUR_OWN_CUSTOMER_DATA")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("OFFER_DISOCUNT_IN_SALES")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("PROMOTE_YOUR_SHOP")}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div style={styles.imageContainer}>
                  {isMobileOnly ? (
                    <Image
                      src={i4}
                      alt="iq"
                      width={15}
                      height={15}
                      style={{ maxWidth: "fit-content" }}
                    />
                  ) : (
                    <Image
                      src={i4}
                      alt="iq"
                      width={21}
                      height={21}
                      style={styles.bulletImage}
                    />
                  )}
                </div>
                <div
                  style={
                    isMobileOnly
                      ? styles.bulletContentMobile
                      : styles.bulletContent
                  }
                >
                  <p
                    style={
                      isMobileOnly ? styles.bulletMobileText : styles.bulletText
                    }
                  >
                    {i18next.t("RUN_SMS_CAMPAIGN")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isMobileOnly ? (
          <div style={{ marginTop: "60px" }}>
            <Image
              src={i18next.language === "hi" ? avatarBannerHindi : avatarBanner}
              alt="avatarIamge"
              objectFit="cover"
            />
          </div>
        ) : (
          <div style={{ marginTop: "60px" }}>
            <Image
              src={i18next.language === "hi" ? avatarBannerHindi : avatarBanner}
              alt="avatarIamge"
              // width={"100%"}
              // height={"353px"}
              objectFit="cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureDetails;

const styles = {
  section: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 70,
    paddingRight: 70,
  },
  sectionMobile: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  heading: {
    fontSize: "30px",
    letterSpacing: "0.7px",
    fontWeight: "500",
    color: "#000000",
  },
  growthHeading: {
    fontSize: "25px",
    letterSpacing: "0.5px",
    color: "#090A0B",
  },
  growthContent: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    color: "#3E3D3C",
    width: "452px",
  },
  numberText: {
    fontSize: "22px",
    letterSpacing: "0.44px",
    fontWeight: "500px",
    color: "#ffffff",
  },
  bulletText: {
    fontSize: "18px",
    letterSpacing: "0.18px",
    color: "#3E3D3C",
    marginLeft: "12px",
  },
  headerText: {
    fontSize: "30px",
    letterSpacing: "0.6px",
    fontWeight: 500,
    color: "#090A0B",
  },
  mobileHeading1: {
    fontSize: "18px",
    letterSpacing: "0.64px",
    fontWeight: 600,
  },
  heading1: {
    fontSize: "32px",
    letterSpacing: "0.36px",
    fontWeight: 600,
  },
  heading2: {
    fontSize: "30px",
    letterSpacing: "0.6px",
    fontWeight: 600,
  },
  mobileHeading2: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    fontWeight: 600,
  },

  mobileContent: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bulletMobileText: {
    fontSize: "13px",
    letterSpacing: "0.13px",
  },
  bulletContent: {
    display: "flex",
    // justifyContent: "center",
    marginLeft: "9px",
    marginTop: "15px",
    width: "90%",
  },
  bulletContentMobile: {
    marginLeft: "9px",
    marginTop: "15px",
  },
  detailContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "32px",
  },
  detailContentMobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "32px",
  },
  detailContainer: {
    marginTop: "27px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainerMobile: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  bulletImage: {
    marginTop: "5px",
  },

  slideInRightAccounting: {
    width: "100%",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
