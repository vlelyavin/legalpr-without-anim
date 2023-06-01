import { Link } from "react-router-dom";
import "./Header.css";
import { ROUTES } from "../../constants/routes";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isDropDownListVisible, setDropdownListVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        setMenuVisibility(false);
      }
    });
  });

  const handleLinkClick = () => {
    setMenuVisibility(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to={ROUTES.home}>
          <svg
            width="32"
            height="38"
            viewBox="0 0 32 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header__logo"
          >
            <path
              d="M31.9696 21.9351V0H28.5987H27.4779H25.8446V0.0327454L10.6536 15.3009L4.48951 9.10323V5.06463L10.1258 10.7296L13.3035 7.538L20.8034 0H14.4525L10.128 4.34641L5.8014 0H4.48951H0.0369239H0V0.0371115V21.9547V22.0071H0.0521279L10.1258 32.132L10.1671 32.0905L10.5298 32.4529L24.587 18.3244L24.5892 12.3516L10.4886 26.1134L4.48951 20.0839V15.4886L7.47818 18.4924L7.46732 18.5034L10.6428 21.6949L27.4779 4.77429V20.1275L12.8734 34.8084L16.0489 38L32 21.9656L31.9696 21.9351Z"
              fill="#5200FF"
            />
          </svg>
        </Link>

        <div className="header__menu__container">
          <div className="header__nav__link">Our services</div>
          <div className="header__menu">
            <Link to={ROUTES.publicRelations} className="header__menu__link" onClick={handleLinkClick}>
              Public relations
            </Link>
            <Link to={ROUTES.contentMarketing} className="header__menu__link" onClick={handleLinkClick}>
              Content marketing
            </Link>
            <Link to={ROUTES.socialMedia} className="header__menu__link" onClick={handleLinkClick}>
              Social media
            </Link>
            <Link to={ROUTES.seoMarketing} className="header__menu__link" onClick={handleLinkClick}>
              SEO marketing
            </Link>
            <Link to={ROUTES.generalCounsel} className="header__menu__link" onClick={handleLinkClick}>
              General Counsel
            </Link>
            <Link to={ROUTES.fundingAndInvestment} className="header__menu__link" onClick={handleLinkClick}>
              Funding & Investment
            </Link>
            <Link to={ROUTES.businessDesign} className="header__menu__link" onClick={handleLinkClick}>
              Business design
            </Link>
          </div>
        </div>
        <Link to={ROUTES.ourContacts} className="header__nav__link" onClick={handleLinkClick}>
          Our contacts
        </Link>
      </nav>
      <Link to={ROUTES.contactUs} className="header__button" onClick={handleLinkClick}>
        Contact us
      </Link>
      <div
        className={classNames("menu__icon", { transform: isMenuVisible })}
        onClick={() => setMenuVisibility(!isMenuVisible)}
      >
        <div className="menu__icon__line"></div>
        <div className="menu__icon__line"></div>
        <div className="menu__icon__line"></div>
      </div>
      <div className={classNames("menu", { opened: isMenuVisible })}>
        <div className="menu__header">
          <Link to={ROUTES.home} className="menu__logo__container">
            <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M31.9696 21.9351V0H28.5987H27.4779H25.8446V0.0327454L10.6536 15.3009L4.48951 9.10323V5.06463L10.1258 10.7296L13.3035 7.538L20.8034 0H14.4525L10.128 4.34641L5.8014 0H4.48951H0.0369239H0V0.0371115V21.9547V22.0071H0.0521279L10.1258 32.132L10.1671 32.0905L10.5298 32.4529L24.587 18.3244L24.5892 12.3516L10.4886 26.1134L4.48951 20.0839V15.4886L7.47818 18.4924L7.46732 18.5034L10.6428 21.6949L27.4779 4.77429V20.1275L12.8734 34.8084L16.0489 38L32 21.9656L31.9696 21.9351Z"
                fill="white"
              />
            </svg>
            <div className="menu__logo__text">
              <span className="bold">Legal</span>
              <span className="symbol">&</span>
              <span className="bold">PR</span>
              <br /> Solutions
            </div>
          </Link>
        </div>
        <div className="menu__content">
          <div className="menu__links__container">
            <div
              className="menu__link__title dropdown"
              onClick={() => setDropdownListVisibility(!isDropDownListVisible)}
            >
              Our services
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={classNames("menu__link__title__icon", { rotate: isDropDownListVisible })}
              >
                <path
                  d="M5.99983 4.97633L10.1247 0.851562L11.3032 2.03007L5.99983 7.33341L0.696533 2.03007L1.87505 0.851562L5.99983 4.97633Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={classNames("menu__links", { expanded: isDropDownListVisible })}>
              <div className="menu__links__column">
                <Link to={ROUTES.publicRelations} className="menu__link" onClick={handleLinkClick}>
                  Public relations
                </Link>
                <Link to={ROUTES.contentMarketing} className="menu__link" onClick={handleLinkClick}>
                  Content marketing
                </Link>
                <Link to={ROUTES.socialMedia} className="menu__link" onClick={handleLinkClick}>
                  Social media
                </Link>
                <Link to={ROUTES.seoMarketing} className="menu__link" onClick={handleLinkClick}>
                  SEO marketing
                </Link>
              </div>
              <div className="menu__links__column">
                <Link to={ROUTES.generalCounsel} className="menu__link" onClick={handleLinkClick}>
                  General Counsel
                </Link>
                <Link to={ROUTES.fundingAndInvestment} className="menu__link" onClick={handleLinkClick}>
                  Funding & Investment
                </Link>
                <Link to={ROUTES.businessDesign} className="menu__link" onClick={handleLinkClick}>
                  Business design
                </Link>
              </div>
            </div>
          </div>
          <Link to={ROUTES.ourContacts} className="menu__link__title" onClick={handleLinkClick}>
            Our contacts
          </Link>
        </div>
        <Link to={ROUTES.contactUs} onClick={handleLinkClick} className="menu__button__container">
          <button className="menu__button">Contact us</button>
        </Link>
      </div>
    </header>
  );
};
