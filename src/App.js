import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  const appRef = useRef();
  const [isFixedButtonVisible, setFixedButtonVisibility] = useState(false);
  const [isButtonRouteCorrect, setButtonRouteStatus] = useState(false);
  const [isContactRouteCorrect, setContactRouteStatus] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setFixedButtonVisibility(false);
      } else {
        setFixedButtonVisibility(true);
      }
    });
    if (window.innerWidth > 800) {
      setFixedButtonVisibility(false);
    } else {
      setFixedButtonVisibility(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (window.innerWidth < 800) {
            if (entry.isIntersecting) {
              setFixedButtonVisibility(false);
            } else {
              setFixedButtonVisibility(true);
            }
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
  }, [location]);

  useEffect(() => {
    if (location.pathname !== ROUTES.contactUs && location.pathname !== ROUTES.ourContacts) {
      setButtonRouteStatus(true);
    } else {
      setButtonRouteStatus(false);
    }

    if (
      location.pathname !== ROUTES.home &&
      location.pathname !== ROUTES.contactUs &&
      location.pathname !== ROUTES.ourContacts
    ) {
      setContactRouteStatus(true);
    } else {
      setContactRouteStatus(false);
    }
  }, [location]);

  const handleClick = () => {
    const options = {
      block: "center",
      behavior: "smooth",
    };
    if (location.pathname === ROUTES.home) {
      navigate(ROUTES.contactUs);
    } else {
      contactFormRef.current.scrollIntoView(options);
    }
  };

  return (
    <>
      <Header />
      <div className="app" ref={appRef}>
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
          {isContactRouteCorrect && <ContactForm ref={contactFormRef} />}
          <Footer />
        </Container>
      </div>
      {isButtonRouteCorrect && (
        <FixedButton
          ref={fixedButtonRef}
          className={classNames({ visible: isFixedButtonVisible })}
          onClick={handleClick}
        />
      )}
    </>
  );
};
