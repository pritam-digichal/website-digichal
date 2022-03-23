import { AutoComplete, Row, Col, Drawer } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import i18next from "../../i18/index";
import Link from "next/link";
import constant from "../../config/constant";
const logo = require("./../../assets/images/logo.png");
const menu = require("./../../assets/images/icons/menu.png");
const HeaderMobile = (props) => {
  const router = useRouter();
  const [language, setLanguage] = useState(constant.LANGUAGE.HINDI);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
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
    <Row style={{ marginTop: 20 }}>
      <Col span={12}>
        <div style={styles.logoBox}>
          <span style={styles.logo}>
            <Link href="/">
              <Image alt="logo" src={logo} width={108} height={30} />
            </Link>
          </span>
        </div>
      </Col>
      <Col span={4} push={8}>
        <Image
          alt="logo"
          src={menu}
          width={30}
          height={30}
          onClick={showDrawer}
        />
      </Col>
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        width={300}
        closable={false}
      >
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
        <br />
        <br />
        <Link href="https://shop.digichal.in/">
          <a
            style={
              router.pathname == "/store_finder"
                ? styles.aboutUsNewText
                : styles.aboutUsText
            }
            target="_blank"
          >
            {i18next.t("STORE_FINDER")}
          </a>
        </Link>
        <br />
        <br />
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
        <br />
        <br />
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
        <br />
        <br />
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
      </Drawer>
    </Row>
  );
};
const styles = {
  logoBox: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  logo: {
    cursor: "pointer",
  },
  aboutUsText: {
    fontSize: 18,
    letterSpacing: "0.44px",
    color: "#3E3D3C",
    cursor: "pointer",
    "&:hover": {
      color: "#3CB3E7 !important",
    },
    textDecoration: "none",
  },
  aboutUsNewText: {
    fontSize: 18,
    letterSpacing: "0.44px",
    color: "#3CB3E7",
    cursor: "pointer",
    "&:hover": {
      color: "#3CB3E7 !important",
    },
    textDecoration: "none",
  },
};
export default HeaderMobile;
