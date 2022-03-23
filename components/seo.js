import React from "react";
import Head from "next/head";
import i18next from "../i18/index";
import { useEffect } from "react";
import constant from "../config/constant";

export default function SEO({
  description = i18next.t("META_DESCRIPTION"),
  author = "digichal",
  meta,
  title = i18next.t("META_TITLE"),
  keywords = i18next.t("META_KEYWORDS"),
}) {
  const [language, setLanguage] = React.useState(constant.LANGUAGE.HINDI);

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
  }, [language]);

  const metaData = [
    {
      name: `title`,
      property: `og:title`,
      content: title,
    },
    {
      name: `description`,
      property: `og:description`,
      content: description,
    },
    {
      name: `keywords`,
      property: `og:keywords`,
      content: keywords,
    },
    {
      name: `website`,
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: "language",
      content: language,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5X3Q5NQZC5"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', '[G-5X3Q5NQZC5]', { page_path: window.location.pathname });
      `,
        }}
      ></script>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `hi`,
  meta: [],
  description: ``,
};
