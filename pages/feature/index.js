import FeatureDesktop from "./desktop";
import FeatureMobile from "./mobile";
import { useMediaQuery } from "react-responsive";

function Feature() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && <FeatureDesktop />}
      {isTabletOrMobile && <FeatureMobile />}
    </>
  );
}

export default Feature;
