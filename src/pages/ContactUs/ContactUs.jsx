import { TitleSection } from "../../components/TitleSection";
import { Title } from "../../components/Title";

import "./ContactUs.css";
import { Row } from "../../components/Row";

export const ContactUs = () => {
  return (
    <>
      <TitleSection style={{ flexDirection: "row", gap: "50px", alignItems: "center", background: "var(--orange)" }}>
        <Title>Contact Us</Title>
        <p style={{ fontWeight: 300 }}>
          To know more information, fill in the
          <br /> fields and our manager will contact you
        </p>
      </TitleSection>
      <Row style={{ marginTop: "40px" }}>
        <div className="contact__form__inputs" style={{ maxWidth: "500px" }}>
          <div className="contact__form__input__name">Your name</div>
          <input type="text" className="contact__form__input" placeholder="John Smith" />
          <div className="contact__form__input__name">Your Email</div>
          <input type="text" className="contact__form__input" placeholder="example@mail.com" />
          <div className="contact__form__input__name">Your Subject</div>
          <input type="text" className="contact__form__input" placeholder="Global Technology's" />
        </div>
        <div className="contact__form__textarea__container" style={{ maxWidth: "100%" }}>
          <div className="contact__form__input__name">Your message</div>
          <textarea name="message" className="contact__form__textarea" />
        </div>
      </Row>
      <Row style={{ justifyContent: "flex-end" }}>
        <button className="contact__form__button" style={{ position: "relative", bottom: "0", right: "0" }}>
          Send
        </button>
      </Row>
    </>
  );
};
