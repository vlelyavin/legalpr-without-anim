import { forwardRef } from "react";
import "./ContactForm.css";

export const ContactForm = forwardRef((props, ref) => {
  return (
    <form className="contact__form" ref={ref}>
      <div className="contact__form__intro">
        <div className="contact__form__intro__title">Contact us</div>
        <div className="contact__form__intro__text">
          To know more information, fill in the
          <br /> fields and our manager will contact you
        </div>
      </div>
      <div className="contact__form__inputs">
        <div className="contact__form__input__name">Your name</div>
        <input type="text" className="contact__form__input" placeholder="John Smith" />
        <div className="contact__form__input__name">Your Email</div>
        <input type="text" className="contact__form__input" placeholder="example@mail.com" />
        <div className="contact__form__input__name">Your Subject</div>
        <input type="text" className="contact__form__input" placeholder="Global Technology's" />
      </div>
      <div className="contact__form__textarea__container">
        <div className="contact__form__input__name">Your message</div>
        <textarea name="message" className="contact__form__textarea" />
      </div>
      <button className="contact__form__button">Send</button>
    </form>
  );
});
