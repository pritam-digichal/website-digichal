import { AutoComplete, Row, Col, Menu } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import i18next from "../../i18/index";
import Link from "next/link";
import constant from "../../config/constant";
const logo = require("./../../assets/images/logo.png");
const HeaderDesktop = (props) => {
  const router = useRouter();
  const [language, setLanguage] = useState(constant.LANGUAGE.HINDI);
  const gotoHome = () => {
    props.goBack();
  };
  useEffect(() => {
    let lang = "hi";
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("language") != null
    ) {
      lang = localStorage.getItem("language");
      setLanguage(lang);
    } else {
      setLanguage(lang);
    }
  }, []);

  const _handleLanguage = () => {
    if (language === constant.LANGUAGE.HINDI) {
      localStorage.setItem("language", "en");
      setLanguage(constant.LANGUAGE.ENGLISH);
      location.reload();
    } else {
      localStorage.setItem("language", "hi");
      setLanguage(constant.LANGUAGE.HINDI);
      location.reload();
    }
  };
  return (
    <Row justify="space-between" align="middle" style={{ marginTop: 65 }}>
      <Col span={4}>
        <div style={styles.logoBox}>
          <span style={styles.logo}>
            <Image
              alt="logo"
              src={logo}
              width={272}
              height={72}
              onClick={gotoHome}
            />
          </span>
        </div>
      </Col>
      <Col span={20}>
        <Menu
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          style={{ justifyContent: "end", border: "none", marginRight: 70 }}
        >
          <Menu.Item key="1">
            <Link href="/">
              <a
                style={
                  router.pathname == "/"
                    ? styles.aboutUsNewText
                    : styles.aboutUsText
                }
              >
                {i18next.t("HOME")}
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/feature">
              <a
                style={
                  router.pathname == "/feature"
                    ? styles.aboutUsNewText
                    : styles.aboutUsText
                }
              >
                {i18next.t("FEATURES")}
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/about_us">
              <a
                style={
                  router.pathname == "/about_us"
                    ? styles.aboutUsNewText
                    : styles.aboutUsText
                }
              >
                {i18next.t("ABOUT_US")}
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <span
              style={styles.aboutUsText}
              onClick={() => {
                _handleLanguage();
              }}
            >
              {language === constant.LANGUAGE.ENGLISH
                ? i18next.t("HINDI")
                : i18next.t("ENGLISH")}
            </span>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
const styles = {
  logoBox: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 70,
  },
  logo: {
    cursor: "pointer",
  },
  aboutUsText: {
    fontSize: "18px",
    fontWeight: "500",
    letterSpacing: "0.44px",
    color: "#3E3D3C",
    cursor: "pointer",
    marginLeft: "40px",
    "&:hover": {
      color: "#3CB3E7 !important",
    },
    textDecoration: "none",
    fontFamily: "Roboto",
  },
  aboutUsNewText: {
    fontSize: "18px",
    fontWeight: "500",
    letterSpacing: "0.44px",
    color: "#3CB3E7",
    cursor: "pointer",
    marginLeft: "40px",
    "&:hover": {
      color: "#3CB3E7 !important",
    },
    textDecoration: "none",
    fontFamily: "Roboto",
  },
};
export default HeaderDesktop;
