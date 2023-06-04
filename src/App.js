import { useEffect, useRef, useState } from "react";
import SmoothScrollbar from "smooth-scrollbar";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { PublicRelations } from "./pages/PublicRelations";
import { ContentMarketing } from "./pages/ContentMarketing";
import { SocialMedia } from "./pages/SocialMedia";
import { SeoMarketing } from "./pages/SeoMarketing";
import { FundingAndInvestment } from "./pages/FundingAndInvestment";
import { BusinessDesign } from "./pages/BusinessDesign";
import { ContactUs } from "./pages/ContactUs";
import { OurContacts } from "./pages/OurContacts";
import { LegalAdvice } from "./pages/LegalAdvice";
import "../src/assets/styles/main.css";
import "../src/assets/styles/fonts.css";
import { FixedButton } from "./components/FixedButton";
import { ContactForm } from "./components/ContactForm";
import classNames from "classnames";

export const App = () => {
  const fixedButtonRef = useRef();
  const contactFormRef = useRef();
  const [isFixedButtonVisible, setFixedButtonVisibility] = useState(true);
  const [isRouteCorrect, setRouteStatus] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const container = document.querySelector(".app");
    const options = {
      damping: 0.03,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
      overscrollEffect: true,
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        SmoothScrollbar.init(container, options);
        setFixedButtonVisibility(false);
      } else {
        SmoothScrollbar.destroy(container, options);
        setFixedButtonVisibility(true);
      }
    });
    if (window.innerWidth > 800) {
      SmoothScrollbar.init(container, options);
      setFixedButtonVisibility(false);
    } else {
      SmoothScrollbar.destroy(container, options);
      setFixedButtonVisibility(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFixedButtonVisibility(false);
          } else {
            setFixedButtonVisibility(true);
          }
        });
      },
      {
        threshold: 0,
      }
    );
    const contactForms = document.querySelectorAll(".contact__form");
    contactForms.forEach((form) => {
      observer.observe(form);
    });
  }, [location, fixedButtonRef, contactFormRef, isRouteCorrect]);

  useEffect(() => {
    if (
      location.pathname !== ROUTES.home &&
      location.pathname !== ROUTES.contactUs &&
      location.pathname !== ROUTES.ourContacts
    ) {
      setRouteStatus(true);
    } else {
      setRouteStatus(false);
    }
  }, [location, isRouteCorrect]);

  const handleClick = () => {
    const options = {
      block: "center",
      behavior: "smooth",
    };
    contactFormRef.current.scrollIntoView(options);
  };

  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.publicRelations} element={<PublicRelations />} />
            <Route path={ROUTES.contentMarketing} element={<ContentMarketing />} />
            <Route path={ROUTES.socialMedia} element={<SocialMedia />} />
            <Route path={ROUTES.seoMarketing} element={<SeoMarketing />} />
            <Route path={ROUTES.legalAdvice} element={<LegalAdvice />} />
            <Route path={ROUTES.fundingAndInvestment} element={<FundingAndInvestment />} />
            <Route path={ROUTES.businessDesign} element={<BusinessDesign />} />
            <Route path={ROUTES.contactUs} element={<ContactUs />} />
            <Route path={ROUTES.ourContacts} element={<OurContacts />} />
          </Routes>
          {isRouteCorrect && <ContactForm ref={contactFormRef} />}
          <Footer />
        </Container>
      </div>
      {isRouteCorrect && (
        <FixedButton
          ref={fixedButtonRef}
          className={classNames({ visible: isFixedButtonVisible })}
          onClick={handleClick}
        />
      )}
    </>
  );
};
