import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Route, Routes } from "react-router-dom";
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

export const App = () => {
  return (
    <>
      <Header />
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
        <Footer />
      </Container>
    </>
  );
};
