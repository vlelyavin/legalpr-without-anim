import { Link } from "react-router-dom";
import "./Footer.css";
import { ROUTES } from "../../constants/routes";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__item logo">
        <Link to={ROUTES.home} className="footer__logo__container">
          <svg width="51" height="60" viewBox="0 0 51 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50.9515 34.6343V0H45.5791H43.7929H41.1898V0.0517033L16.9792 24.1592L7.15516 14.3735V7.99678L16.1381 16.9415L21.2024 11.9021L33.1554 0H23.0336L16.1415 6.86276L9.24598 0H7.15516H0.0588475H0V0.0585971V34.6654V34.7481H0.0830788L16.1381 50.7348L16.2038 50.6693L16.7819 51.2415L39.1855 28.9332L39.189 19.5025L16.7161 41.2317L7.15516 31.7114V24.4557L11.9183 29.1986L11.901 29.2158L16.9619 34.2552L43.7929 7.53835V31.7803L20.517 54.9606L25.5779 60L51 34.6826L50.9515 34.6343Z"
              fill="#5200FF"
            />
          </svg>
          <div className="footer__logo__text">
            <span className="bold">Legal</span>
            <span className="symbol">&</span>
            <span className="bold">PR</span>
            <br /> Solutions
          </div>
        </Link>
        <div className="footer__logo__licence">Legal & PR Solutions, 2023, all rights reserved</div>
      </div>
      <div className="footer__item">
        <div className="footer__columns">
          <div className="footer__column__wrapper">
            <div className="footer__column">
              <div className="footer__column__title">Our Services</div>
              <Link to={ROUTES.publicRelations} className="footer__column__link">
                Public relations
              </Link>

              <Link to={ROUTES.contentMarketing} className="footer__column__link">
                Content marketing
              </Link>

              <Link to={ROUTES.socialMedia} className="footer__column__link">
                Social media
              </Link>

              <Link to={ROUTES.seoMarketing} className="footer__column__link">
                SEO marketing
              </Link>
            </div>
            <div className="footer__column">
              <div className="footer__column__title" style={{ opacity: 0 }}>
                Our Contacts
              </div>
              <Link to={ROUTES.generalCounsel} className="footer__column__link">
                General Counsel
              </Link>

              <Link to={ROUTES.fundingAndInvestment} className="footer__column__link">
                Funding & Investment
              </Link>

              <Link to={ROUTES.businessDesign} className="footer__column__link">
                Business design
              </Link>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column__title">Our Contacts</div>
            <div className="footer__column__line__groups">
              <div className="footer__column__line__group">
                <div className="footer__column__line">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="footer__column__line__icon"
                  >
                    <path
                      d="M14.625 10.9992V13.7986C14.625 14.2142 14.3037 14.5591 13.8891 14.5883C13.5429 14.6128 13.2604 14.625 13.0417 14.625C6.04602 14.625 0.375 8.95398 0.375 1.95833C0.375 1.7396 0.387231 1.45711 0.411694 1.11085C0.441001 0.696322 0.785827 0.375 1.20139 0.375H4.00091C4.20412 0.375 4.37431 0.528916 4.39471 0.731092C4.41303 0.912597 4.43006 1.05832 4.44581 1.16827C4.60594 2.28665 4.93304 3.35116 5.40105 4.33573C5.47618 4.49376 5.42719 4.68293 5.2848 4.78463L3.57614 6.00518C4.61637 8.43504 6.56496 10.3836 8.99483 11.4239L10.2131 9.71817C10.3161 9.57409 10.5075 9.52453 10.6675 9.60045C11.652 10.0681 12.7164 10.3948 13.8346 10.5546C13.9439 10.5702 14.0886 10.5871 14.2689 10.6053C14.4711 10.6257 14.625 10.7959 14.625 10.9992Z"
                      fill="#5200FF"
                    />
                  </svg>

                  <div className="footer__column__link">+447537142922</div>
                </div>
                <div className="footer__column__line">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="footer__column__line__icon"
                  >
                    <path
                      d="M0.8 0H15.2C15.6418 0 16 0.348227 16 0.777778V13.2222C16 13.6518 15.6418 14 15.2 14H0.8C0.358176 14 0 13.6518 0 13.2222V0.777778C0 0.348227 0.358176 0 0.8 0ZM8.04848 6.75337L2.91778 2.51821L1.88222 3.70401L8.05848 8.80219L14.1235 3.69924L13.0765 2.52299L8.04848 6.75337Z"
                      fill="#5200FF"
                    />
                  </svg>

                  <div className="footer__column__link">office@legal-pr.com</div>
                </div>
              </div>
              <div className="footer__column__line__group">
                <div className="footer__column__line">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="footer__column__line__icon"
                  >
                    <path
                      d="M10.2427 9.93229L6.00001 14.0463L1.75737 9.93229C-0.585788 7.66015 -0.585788 3.97625 1.75737 1.70411C4.10051 -0.568036 7.89954 -0.568036 10.2427 1.70411C12.5858 3.97625 12.5858 7.66015 10.2427 9.93229ZM0.750001 14.5455H11.25V16H0.750001V14.5455Z"
                      fill="#5200FF"
                    />
                  </svg>

                  <div className="footer__column__link" style={{ fontSize: "0.85rem" }}>
                    3rd Floor Suite, 207 Regent
                    <br /> Street, London, England,
                    <br /> W1B3HH
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to={ROUTES.contactUs} className="footer__item" onClick={() => window.scrollTo(0, 0)}>
            <button className="footer__button">Contact us</button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
