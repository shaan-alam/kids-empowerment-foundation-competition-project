import { useContext } from "react";
import HeroSection from "./HeroSection";
import GoalsSection from "./GoalsSection";
import InfoSection from "./InfoSection";
import HelpSection from "./HelpSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";

import { Context } from "../Context/GlobalState";

const Home = () => {
  const { isPageLoading } = useContext(Context);

  if (isPageLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <HeroSection />
      <GoalsSection />
      <InfoSection />
      <HelpSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
