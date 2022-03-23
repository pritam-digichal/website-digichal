import DashboardDesktop from "./desktop";
import DasboardMobile from "./mobile";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && <DashboardDesktop />}
      {isTabletOrMobile && <DasboardMobile />}
    </>
  );
}

export default HomePage;
