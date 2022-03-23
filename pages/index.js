import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SEO from "../components/seo";
import i18next from "../i18/index";
import Dashboard from "./dashboard/index";
import HeaderDesktop from "../components/header-desktop";
import FooterDesktop from "../components/footer-desktop";
export default function Home() {
  return (
    <div className={styles.container}>
      <SEO
        title={i18next.t("META_TITLE")}
        description={i18next.t("META_DESCRIPTION")}
      />
      <Dashboard />
    </div>
  );
}
