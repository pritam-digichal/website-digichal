import { isMobileOnly } from "react-device-detect";
import i18next from "../../i18/index";
import React from "react";
import Image from "next/image";
import person1 from "../../assets/images/users/person1.png";
import person2 from "../../assets/images/users/person2.png";
import person3 from "../../assets/images/users/person3.png";
import person4 from "../../assets/images/users/person4.png";
import person5 from "../../assets/images/users/person5.jpeg";
import person6 from "../../assets/images/users/person6.jpeg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "antd";

const data = [
  {
    id: 1,
    name: i18next.t("SHRAWAN_GUPTA"),
    review: i18next.t("SHRAWAN_GUPTA_REVIEW"),
  },
  {
    id: 2,
    name: i18next.t("SANTOSH_SHARMA"),
    review: i18next.t("SANTOSH_SHARMA_REVIEW"),
  },
  {
    id: 3,
    name: i18next.t("JOGINDER_SINGH"),
    review: i18next.t("JOGINDER_SINGH_REVIEW"),
  },
  {
    id: 4,
    name: i18next.t("OM_FURNITURE"),
    review: i18next.t("OM_FURNITURE_REVIEW"),
  },
  {
    id: 5,
    name: i18next.t("RAMESH_KUMAR"),
    review: i18next.t("RAMESH_KUMAR_REVIEW"),
  },
  {
    id: 6,
    name: i18next.t("SURENDRA_VERMA"),
    review: i18next.t("SURENDRA_VERMA_REVIEW"),
  },
];

const Review = () => {
  const [reviewData, setReviewData] = React.useState(data[0]);

  const handleChange = (e) => {
    if (e == 0) {
      setReviewData(data[0]);
    } else if (e == 1) {
      setReviewData(data[1]);
    } else if (e == 2) {
      setReviewData(data[2]);
    } else if (e == 3) {
      setReviewData(data[3]);
    } else if (e == 4) {
      setReviewData(data[4]);
    } else {
      setReviewData(data[5]);
    }
  };
  return (
    <div style={isMobileOnly ? styles.sectionMobile : styles.section}>
      <div>
        <div style={{ textAlign: "center" }}>
          <p
            style={isMobileOnly ? styles.userSayTextMobile : styles.userSayText}
          >
            {i18next.t("WHAT_USER_SAY_ABOUT_US")}
          </p>
        </div>
      </div>
      <div style={isMobileOnly ? styles.gridContentMobile : styles.gridContent}>
        <div item xs={12} md={6} style={{ marginTop: "30px" }}>
          <Carousel
            variant="dark"
            controls={false}
            style={{
              height: "350px",
              width: "100%",
            }}
            onSelect={(e) => {
              handleChange(e);
            }}
          >
            <Carousel.Item>
              <div style={styles.carouselItem}>
                <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                  <div style={styles.carouselItem}>
                    <Image src={person1} width={132} height={131} />
                  </div>
                  <div style={{ marginTop: "13px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("SHRAWAN_GUPTA")}
                    </span>
                  </div>

                  <div style={{ marginTop: "7px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("SHRAWAN_GUPTA_ADDRESS")}
                    </span>
                  </div>
                </Card>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div style={styles.carouselItem}>
                <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                  <div style={styles.cardContent}>
                    <Image src={person2} width={132} height={131} />
                  </div>
                  <div style={{ marginTop: "13px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("SANTOSH_SHARMA")}
                    </span>
                  </div>

                  <div style={{ marginTop: "7px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("SANTOSH_SHARMA_ADDRESS")}
                    </span>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={styles.carouselItem}>
                <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                  <div style={styles.cardContent}>
                    <Image src={person4} width={132} height={131} />
                  </div>
                  <div style={{ marginTop: "13px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("JOGINDER_SINGH")}
                    </span>
                  </div>

                  <div style={{ marginTop: "7px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("JOGINDER_SINGH_ADDRESS")}
                    </span>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={styles.carouselItem}>
                <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                  <div style={styles.cardContent}>
                    <Image src={person3} width={132} height={131} />
                  </div>
                  <div style={{ marginTop: "13px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("OM_FURNITURE")}
                    </span>
                  </div>

                  <div style={{ marginTop: "7px", textAlign: "center" }}>
                    <span
                      sstyle={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("OM_FURNITURE_ADDRESS")}
                    </span>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={styles.carouselItem}>
                <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                  <div style={styles.cardContent}>
                    <div
                      style={{
                        overflow: "hidden",
                        borderRadius: "80px",
                        height: "131px",
                        width: "132px",
                      }}
                    >
                      <Image src={person5} width={132} height={131} />
                    </div>
                  </div>
                  <div style={{ marginTop: "13px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("RAMESH_KUMAR")}
                    </span>
                  </div>

                  <div style={{ marginTop: "7px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("RAMESH_KUMAR_ADDRESS")}
                    </span>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={styles.carouselItem}>
                <Card style={isMobileOnly ? styles.rootMobile : styles.root}>
                  <div style={styles.cardContent}>
                    <div
                      style={{
                        overflow: "hidden",
                        borderRadius: "80px",
                        height: "131px",
                        width: "132px",
                      }}
                    >
                      <Image src={person6} width={132} height={131} />
                    </div>
                  </div>
                  <div style={{ marginTop: "13px", textAlign: "center" }}>
                    <span
                      style={
                        isMobileOnly
                          ? styles.supportTextMobile
                          : styles.supportText
                      }
                    >
                      {i18next.t("SURENDRA_VERMA")}
                    </span>
                  </div>

                  <div style={{ marginTop: "7px", textAlign: "center" }}>
                    <span
                      sstyle={
                        isMobileOnly
                          ? styles.supportContentMobile
                          : styles.supportContent
                      }
                    >
                      {i18next.t("SURENDRA_VERMA_ADDRESS")}
                    </span>
                  </div>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={isMobileOnly ? styles.nameContentMobile : styles.nameContent}
        >
          <div>
            <span
              style={isMobileOnly ? styles.apostropheMobile : styles.apostrophe}
            >
              ‟
            </span>
          </div>
          <div
            style={
              isMobileOnly ? styles.nameContainerMobile : styles.nameContainer
            }
          >
            <p style={isMobileOnly ? styles.nameTextMobile : styles.nameText}>
              {reviewData.name}
            </p>

            <p style={isMobileOnly ? styles.descTextMobile : styles.descText}>
              {reviewData.review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

const styles = {
  section: {
    backgroundColor: "#FFFFFF",
    marginTop: "90px",
    paddingLeft: 70,
    paddingRight: 70,
  },
  sectionMobile: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  userSayText: {
    fontSize: "35px",
    letterSpacing: "0.7px",
    color: "#090A0B",
    fontWeight: 500,
  },
  userSayTextMobile: {
    fontSize: "18px",
    letterSpacing: "0.36px",
    color: "#090A0B",
    fontWeight: 500,
  },

  imageContent: {
    minHeight: "1140",
    maxHeight: " 600",
    width: "100%",
  },
  supportText: {
    fontSize: "21px",
    letterSpacing: "0.42px",
    fontWeight: 500,
    color: "#3CB3E7",
  },
  supportTextMobile: {
    fontSize: "14px",
    letterSpacing: "0.2px",
    fontWeight: 500,
    color: "#3CB3E7",
  },
  supportContent: {
    fontSize: "21px",
    letterSpacing: "0.2px",
    fontWeight: 500,
    color: "#3E3D3C",
  },
  supportContentMobile: {
    fontSize: "14px",
    letterSpacing: "0.42px",
    fontWeight: 500,
    color: "#3E3D3C",
  },
  apostrophe: {
    fontSize: "104px",
    fontWeight: 400,
    color: "#3CB3E7",
  },
  apostropheMobile: {
    fontSize: "73px",
    fontWeight: 400,
    color: "#3CB3E7",
  },
  nameText: {
    fontSize: "30px",
    fontWeight: 500,
    letterSpacing: "0.6px",
    color: "#3CB3E7",
  },
  nameTextMobile: {
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "0.4px",
    color: "#3CB3E7",
  },
  descText: {
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "0.4px",
    color: "#3E3D3C",
  },
  descTextMobile: {
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "0.26px",
    color: "#3E3D3C",
  },
  nameContent: {
    display: "flex",
    flexDirection: " row",
    justifyContent: "space-between",
    paddingLeft: 30,
    // width: "80%",
  },
  nameContentMobile: {
    display: "flex",
    flexDirection: " row",
    // marginTop: "30px",
    marginBottom: "30px",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  carouselItem: {
    // width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  gridContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gridContentMobile: {},
  nameContainer: { marginLeft: "5px", marginTop: "60px" },
  nameContainerMobile: { marginLeft: "5px", marginTop: "40px" },
  root: {
    width: 334,
    height: 273,
    border: "1px solid #E8E8E8",
  },
  rootMobile: {
    width: "100% !important",
    height: "260px !important",
    border: "1px solid #E8E8E8",
  },
};
