import ContactDesktop from "./desktop";
import ContactMobile from "./mobile";
import { useMediaQuery } from "react-responsive";

function ContactUS() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop && <ContactDesktop />}
      {isTabletOrMobile && <ContactMobile />}
    </>
  );
}

export default ContactUS;
