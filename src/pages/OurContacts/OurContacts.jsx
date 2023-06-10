import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Title } from "../../components/Title";
import { TitleSection } from "../../components/TitleSection";
import { Row } from "../../components/Row";
import "./OurContacts.css";
import { useMemo } from "react";

export const OurContacts = () => {
  const center = useMemo(() => ({ lat: 51.513297880023465, lng: -0.14107495573477286 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDbO7lfYrR_h1T9nEu7OUPIVFtRIaN_q78",
  });
  return (
    <>
      <TitleSection style={{ background: "var(--green)" }}>
        <Title>Our Contacts</Title>
      </TitleSection>
      <Row style={{ marginTop: "40px" }}>
        {isLoaded ? (
          <GoogleMap zoom={15} center={center} mapContainerClassName="contacts__map">
            <MarkerF position={center} />
          </GoogleMap>
        ) : (
          <p>Loading...</p>
        )}
        <div className="contacts__info">
          <Row>
            <div className="contacts__info__item">
              <div className="contacts__info__item__info">
                <div className="contacts__info__item__title">Phone number</div>
                <div className="contacts__info__item__line">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 13.42V16.9561C18 17.4811 17.5941 17.9167 17.0705 17.9537C16.6331 17.9846 16.2763 18 16 18C7.1634 18 0 10.8366 0 2C0 1.72371 0.01545 1.36687 0.04635 0.9295C0.08337 0.40588 0.51894 0 1.04386 0H4.5801C4.83678 0 5.05176 0.19442 5.07753 0.4498C5.10067 0.67907 5.12218 0.86314 5.14207 1.00202C5.34435 2.41472 5.75753 3.75936 6.3487 5.00303C6.44359 5.20265 6.38171 5.44159 6.20185 5.57006L4.04355 7.1118C5.35752 10.1811 7.8189 12.6425 10.8882 13.9565L12.4271 11.8019C12.5572 11.6199 12.799 11.5573 13.001 11.6532C14.2446 12.2439 15.5891 12.6566 17.0016 12.8584C17.1396 12.8782 17.3225 12.8995 17.5502 12.9225C17.8056 12.9483 18 13.1633 18 13.42Z"
                      fill="#5200FF"
                    />
                  </svg>
                  <a href="tel:+447537142922" className="contacts__info__item__text">
                    +447537142922
                  </a>
                </div>
              </div>
            </div>
            <div className="contacts__info__item">
              <div className="contacts__info__item__info">
                <div className="contacts__info__item__title">Email</div>
                <div className="contacts__info__item__line">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM10.0606 8.6829L3.64722 3.2377L2.35278 4.7623L10.0731 11.3171L17.6544 4.75616L16.3456 3.24384L10.0606 8.6829Z"
                      fill="#5200FF"
                    />
                  </svg>
                  <a href="mailto:office@legal-pr.com" className="contacts__info__item__text">
                    office@legal-pr.com
                  </a>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="contacts__info__item">
              <div className="contacts__info__item__info">
                <div className="contacts__info__item__title">Address</div>
                <div className="contacts__info__item__line">
                  <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.6569 13.6569L8 19.3137L2.34315 13.6569C-0.78105 10.5327 -0.78105 5.46734 2.34315 2.34315C5.46734 -0.78105 10.5327 -0.78105 13.6569 2.34315C16.781 5.46734 16.781 10.5327 13.6569 13.6569ZM1 20H15V22H1V20Z"
                      fill="#5200FF"
                    />
                  </svg>
                  <p className="contacts__info__item__text">
                    3rd Floor Suite, 207 Regent Street, London, England,
                    <br /> W1B3HH
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Row>
    </>
  );
};
