import { Link } from "react-router-dom";
import "./HomeGrid.css";
import { ROUTES } from "../../../constants/routes";

export const HomeGrid = () => {
  const Arrow = () => {
    return (
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="homegrid__arrow"
      >
        <circle cx="46" cy="46" r="44.5" stroke="white" strokeWidth="3" />
        <path
          d="M54.341 40.6129L36.4106 58.5433L33.4644 55.5971L51.3948 37.6667H35.5911V33.5H58.5077V56.4167H54.341V40.6129Z"
          fill="white"
        />
      </svg>
    );
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="homegrid">
      <Link to={ROUTES.publicRelations} className="homegrid__item" onClick={handleLinkClick}>
        <div className="homegrid__item__title">
          Public
          <br /> relations
        </div>
        <Arrow />
      </Link>

      <Link to={ROUTES.seoMarketing} className="homegrid__item" onClick={handleLinkClick}>
        <div className="homegrid__item__title">
          SEO
          <br /> Marketing
        </div>
        <Arrow />
      </Link>

      <Link to={ROUTES.contentMarketing} className="homegrid__item" onClick={handleLinkClick}>
        <div className="homegrid__item__title">
          Content
          <br /> marketing
        </div>
        <Arrow />
      </Link>

      <Link to={ROUTES.socialMedia} className="homegrid__item" onClick={handleLinkClick}>
        <div className="homegrid__item__title">
          Social
          <br /> Media
        </div>
        <Arrow />
      </Link>

      <Link to={ROUTES.legalAdvice} className="homegrid__item" onClick={handleLinkClick}>
        <div className="homegrid__item__title">
          Legal
          <br />
          Advice
        </div>
        <Arrow />
      </Link>

      <Link to={ROUTES.fundingAndInvestment} className="homegrid__item" onClick={handleLinkClick}>
        <div className="homegrid__item__title">
          Funding &<br /> Investment
        </div>
        <Arrow />
      </Link>

      <Link to={ROUTES.businessDesign} className="homegrid__item" onClick={handleLinkClick}>
        <div className="homegrid__item__title">
          Business
          <br /> design
        </div>
        <Arrow />
      </Link>
    </div>
  );
};
