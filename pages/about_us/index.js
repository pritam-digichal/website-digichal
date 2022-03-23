import AboutUsDesktop from "./desktop";
import AboutUsMobile from "./mobile";
import { useMediaQuery } from "react-responsive";

function AboutUs() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && <AboutUsDesktop />}
      {isTabletOrMobile && <AboutUsMobile />}
    </>
  );
}

export default AboutUs;
