import Document, { Html, Head, Main, NextScript } from "next/document";

let mainLang = "en";

const getLang = (lng) => {
  mainLang = lng;
  return;
};

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    initialProps.head.forEach((value, index) => {
      if (value.type === "meta" && value.props.name === "language") {
        getLang(value.props.content);
      }
    });

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="stylesheet" href="carousel.css" /> */}
          <meta
            name="google-site-verification"
            content="LvhWwpuBncSxTySd8O7_JHO3HXcIdXAL3FslrrJ9ynE"
          />
          {/* <meta name="viewport" content="viewport-fit=cover" /> */}
        </Head>
        <body style={{ fontFamily: "Roboto" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
