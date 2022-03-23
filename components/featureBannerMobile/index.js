import playStore from "../../assets/images/originals/playStoreImage.png";
import illustration from "../../assets/images/originals/i3.png";
import illustrationHindi from "../../assets/images/originals/i3Hindi.png";
import i18next from "../../i18/index";
import Image from "next/image";

const FeatureBanner = () => {
  return (
    <div style={styles.section}>
      <div>
        <Image
          src={i18next.language === "hi" ? illustrationHindi : illustration}
          alt="illustration"
          objectFit="cover"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "27px",
        }}
      >
        <span style={styles.headingMobile1}>
          {i18next.t("MEET_OUR_EXCITING")}
        </span>
        <span style={styles.headingMobile2}>{i18next.t("FEATURES")}</span>
        <div style={{ marginTop: "8px" }}>
          <span style={styles.headingMobile3}>
            {i18next.t("DEDICATE_TO_HELP_YOUR_BUSINESS")}
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

export default FeatureBanner;

const styles = {
  section: {
    padding: 20,
  },
  aboutText: {
    textAlign: "center",
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    textAlign: "center",
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 6],
      lineHeight: [1.87, null, null, 2.33],
      color: "#3cb3e7",
    },
  },
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
  headingMobile1: {
    fontSize: "20px",
    letterSpacing: "0.2px",
    color: "#000000",
  },
  headingMobile2: {
    fontSize: "32px",
    letterSpacing: "0.32px",
    color: "#3CB3E7",
    fontWeight: 500,
  },
  headingMobile3: {
    fontSize: "14px",
    letterSpacing: "0.14px",
    color: "#000000",
  },
  mobileMainContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  div1: {
    marginTop: "10px",
  },
  div2: {
    marginTop: "50px",
  },
};
