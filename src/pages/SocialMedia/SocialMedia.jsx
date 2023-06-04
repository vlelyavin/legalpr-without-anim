import { Row } from "../../components/Row";
import { RowItem } from "../../components/RowItem";
import { SectionIntro } from "../../components/SectionIntro";
import { Title } from "../../components/Title";
import { TitleSection } from "../../components/TitleSection";
import { Goals } from "../../feature/SocialMedia/Goals";
import "./SocialMedia.css";

export const SocialMedia = () => {
  const socialMediaIntroItems = [
    {
      text: "The days of social media being a<br /> novelty is over.",
      image: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_35_2)">
  <path d="M27.5 0H12.5C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5L0 27.5C0 30.8152 1.31696 33.9946 3.66117 36.3388C6.00537 38.683 9.18479 40 12.5 40H27.5C30.8152 40 33.9946 38.683 36.3388 36.3388C38.683 33.9946 40 30.8152 40 27.5V12.5C40 9.18479 38.683 6.00537 36.3388 3.66117C33.9946 1.31696 30.8152 0 27.5 0ZM36.25 27.5C36.25 32.325 32.325 36.25 27.5 36.25H12.5C7.675 36.25 3.75 32.325 3.75 27.5V12.5C3.75 7.675 7.675 3.75 12.5 3.75H27.5C32.325 3.75 36.25 7.675 36.25 12.5V27.5Z" fill="white"/>
  <path d="M20 10C17.3478 10 14.8043 11.0536 12.9289 12.9289C11.0536 14.8043 10 17.3478 10 20C10 22.6522 11.0536 25.1957 12.9289 27.0711C14.8043 28.9464 17.3478 30 20 30C22.6522 30 25.1957 28.9464 27.0711 27.0711C28.9464 25.1957 30 22.6522 30 20C30 17.3478 28.9464 14.8043 27.0711 12.9289C25.1957 11.0536 22.6522 10 20 10ZM20 26.25C18.343 26.248 16.7544 25.5889 15.5828 24.4172C14.4111 23.2456 13.752 21.657 13.75 20C13.75 16.5525 16.555 13.75 20 13.75C23.445 13.75 26.25 16.5525 26.25 20C26.25 23.445 23.445 26.25 20 26.25Z" fill="white"/>
  <path d="M30.75 10.5825C31.4859 10.5825 32.0825 9.98593 32.0825 9.25001C32.0825 8.51409 31.4859 7.91751 30.75 7.91751C30.0141 7.91751 29.4175 8.51409 29.4175 9.25001C29.4175 9.98593 30.0141 10.5825 30.75 10.5825Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_35_2">
  <rect width="40" height="40" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `,
      imageStyle: {
        background: "var(--orange)",
        boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
        width: "80px",
        height: "80px",
      },
      style: {
        padding: "0 5px 0 20px",
        background: "var(--orange)",
        color: "white",
        borderRadius: "25px",
      },
    },

    {
      text: "If you’re not actively on social<br/> media, your clients will wonder why<br/> not.",
      image: `<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.125 32.3375C24.8336 31.5846 27.625 28.3059 27.625 24.375V19.5C27.625 18.3609 27.3917 17.2606 26.95 16.25H12.05C11.6083 17.2606 11.375 18.3609 11.375 19.5V24.375C11.375 28.3059 14.1664 31.5846 17.875 32.3375V22.75H21.125V32.3375ZM8.99568 28.7474C8.43474 27.4012 8.125 25.9243 8.125 24.375H3.25V21.125H8.125V19.5C8.125 18.4556 8.26574 17.4441 8.5293 16.4834L4.93334 14.4073L6.55834 11.5927L9.84158 13.4883C9.94492 13.3226 10.0524 13.1598 10.1639 13H28.8361C28.9476 13.1598 29.055 13.3226 29.1583 13.4883L32.4417 11.5927L34.0667 14.4073L30.4707 16.4834C30.7343 17.4441 30.875 18.4556 30.875 19.5V21.125H35.75V24.375H30.875C30.875 25.9243 30.5653 27.4012 30.0043 28.7474L34.0667 31.0928L32.4417 33.9072L28.3372 31.5375C26.2517 34.1076 23.0677 35.75 19.5 35.75C15.9324 35.75 12.7483 34.1076 10.6628 31.5375L6.55834 33.9072L4.93334 31.0928L8.99568 28.7474ZM13 9.75C13 6.16015 15.9101 3.25 19.5 3.25C23.0898 3.25 26 6.16015 26 9.75H13Z" fill="white"/>
      </svg>
      
  `,
      imageStyle: {
        background: "var(--red)",
        boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
        width: "80px",
        height: "80px",
      },
      style: {
        padding: "0 5px 0 20px",
        background: "var(--red)",
        color: "white",
        borderRadius: "25px",
      },
    },

    {
      text: "Besides providing a footprint of<br/> your activity, social media is your<br/> opportunity to get your message<br/> directly to your industry.",
      image: `<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 21.5C9.5 21.5 20 23 24.5 27.5H26C26.8284 27.5 27.5 26.8284 27.5 26V16.9055C28.7939 16.5725 29.75 15.3979 29.75 14C29.75 12.6021 28.7939 11.4275 27.5 11.0945V2C27.5 1.17158 26.8284 0.5 26 0.5H24.5C20 5 9.5 6.5 9.5 6.5H3.5C1.84314 6.5 0.5 7.84314 0.5 9.5V18.5C0.5 20.1569 1.84314 21.5 3.5 21.5H5L6.5 29H9.5V21.5ZM12.5 8.9918C13.525 8.7719 14.7912 8.46789 16.1589 8.06559C18.6762 7.32521 21.875 6.15893 24.5 4.36187V23.6381C21.875 21.8411 18.6762 20.6749 16.1589 19.9345C14.7912 19.5322 13.525 19.2281 12.5 19.0082V8.9918ZM3.5 9.5H9.5V18.5H3.5V9.5Z" fill="white"/>
      </svg>      
  `,
      imageStyle: {
        background: "var(--green)",
        boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
        width: "80px",
        height: "80px",
      },
      style: {
        padding: "0 5px 0 20px",
        background: "var(--green)",
        color: "white",
        borderRadius: "25px",
      },
    },
  ];

  return (
    <>
      <TitleSection>
        <Title>Social Media</Title>
      </TitleSection>
      <Row style={{ marginTop: "40px" }}>
        {socialMediaIntroItems.map((item, idx) => (
          <RowItem text={item.text} image={item.image} imageStyle={item.imageStyle} style={item.style} key={idx} />
        ))}
      </Row>
      <SectionIntro>Goals of Social Media</SectionIntro>
      <Goals />
    </>
  );
};
