import { AutoComplete, Row, Col, Input } from "antd";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
const logo = require("./../../assets/images/logo.png");
const HeaderDesktop = (props) => {
  const router = useRouter();
  const gotoHome = () => {
    props.goBack();
  };

  return (
    <Row justify="space-between" align="middle" style={{ marginTop: 65 }}>
      <Col span={4}>
        <div style={styles.logoBox}>
          <span style={styles.logo}>
            <Image
              alt="logo"
              src={logo}
              width={236}
              height={62}
              onClick={gotoHome}
            />
          </span>
        </div>
      </Col>
      <Col span={20}></Col>
    </Row>
  );
};
const styles = {
  logoBox: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },
  logo: {
    cursor: "pointer",
  },
};
export default HeaderDesktop;
