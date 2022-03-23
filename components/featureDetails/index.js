import playStore from "../../assets/images/originals/playStoreImage.png";
import illustration from "../../assets/images/originals/i3.png";
import illustrationHindi from "../../assets/images/originals/i3Hindi.png";
import i18next from "../../i18/index";
import Image from "next/image";

const FeatureDetails = () => {
  return (
    <div style={styles.mainContent}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={styles.slideInLeft}>
          <span style={styles.heading1}>{i18next.t("MEET_OUR_EXCITING")}</span>
          <br />
          <span style={styles.heading2}>{i18next.t("FEATURES")}</span>
        </div>
        <div style={styles.div1}>
          <span style={styles.heading3}>
            {i18next.t("DEDICATE_TO_HELP_YOUR_BUSINESS")}
          </span>
        </div>
        <div style={styles.div2}>
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

export default FeatureDetails;

const styles = {
  section: {
    position: "relative",
    pt: [105, null, null, 140, 15, null, 140],
    pb: [8, null, null, 0],
    zIndex: 0,
    ":before": {
      content: ["none", null, null, `''`],
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  aboutText: {
    textAlign: "center",
  },

  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80vh",
    marginLeft: 70,
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
  div1: {
    marginTop: "10px",
  },
  div2: {
    marginTop: "50px",
  },
  fadeIn: {},

  slideInLeft: {},
};
