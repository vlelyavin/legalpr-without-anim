import { useNavigate } from "react-router-dom";
import { FixedButton } from "../../components/FixedButton";
import { Title } from "../../components/Title";
import { HomeGrid } from "../../feature/Home/HomeGrid";
import "./Home.css";
import { ROUTES } from "../../constants/routes";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.contactUs);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Title color="black">
        Legal & PR
        <br /> Solutions
      </Title>
      <div className="home__description">
        WE GET YOU KNOWN, PERIOD.
        <br /> Our company has one singular focus: to securely scale your awareness. This means stronger online
        reputation, greater brand awareness, ultimately more sales and ease at doing business.
      </div>
      <HomeGrid />
      <FixedButton onClick={handleClick} />
    </>
  );
};
