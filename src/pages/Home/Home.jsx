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
        Legal<span style={{ margin: "0 20px" }}>&</span>PR
        <br /> Solutions
      </Title>
      <div className="home__description">
        <span style={{ fontWeight: 400, fontSize: "1.2rem" }}>WE GET YOU KNOWN, PERIOD.</span>
        <br /> Our company has one singular focus: to securely scale your awareness. This means stronger online
        reputation, greater brand awareness, ultimately more sales and ease at doing business.
      </div>
      <HomeGrid />
      <FixedButton onClick={handleClick} />
    </>
  );
};
