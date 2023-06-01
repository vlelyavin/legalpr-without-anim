import { useEffect, useRef, useState } from "react";
import { ContactForm } from "../../components/ContactForm";
import { Row } from "../../components/Row";
import { RowItem } from "../../components/RowItem";
import { Title } from "../../components/Title";
import { TitleSection } from "../../components/TitleSection";
import "./FundingAndInvestment.css";
import { FixedButton } from "../../components/FixedButton";

export const FundingAndInvestment = () => {
  const contactFormRef = useRef();
  const fixedButtonRef = useRef();
  const [isFixedButtonVisible, setFixedButtonVisibility] = useState(true);
  const style = {
    padding: "5px 10px",
    borderRadius: "24px",
  };

  const fundingFirstRowItems = [
    {
      text: "Due Diligence",
      image: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.0572 27.4641L37.9088 35.3157L35.3161 37.9084L27.4645 30.0568C24.6413 32.3155 21.061 33.6667 17.167 33.6667C8.05899 33.6667 0.666992 26.2747 0.666992 17.1667C0.666992 8.05866 8.05899 0.666656 17.167 0.666656C26.275 0.666656 33.667 8.05866 33.667 17.1667C33.667 21.0607 32.3158 24.641 30.0572 27.4641ZM26.3789 26.1038C28.6207 23.7934 30.0003 20.6419 30.0003 17.1667C30.0003 10.0762 24.2574 4.33332 17.167 4.33332C10.0766 4.33332 4.33366 10.0762 4.33366 17.1667C4.33366 24.2571 10.0766 30 17.167 30C20.6423 30 23.7938 28.6204 26.1041 26.3786L26.3789 26.1038ZM19.3265 10.1564C18.0532 10.7313 17.167 12.0122 17.167 13.5C17.167 15.5251 18.8086 17.1667 20.8337 17.1667C22.3214 17.1667 23.6024 16.2804 24.1773 15.0072C24.3872 15.6899 24.5003 16.415 24.5003 17.1667C24.5003 21.2167 21.217 24.5 17.167 24.5C13.1169 24.5 9.83366 21.2167 9.83366 17.1667C9.83366 13.1166 13.1169 9.83332 17.167 9.83332C17.9187 9.83332 18.6437 9.94639 19.3265 10.1564Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Private Placement Strategy and Counsel",
      image: `<svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 17.3333V35.6667H29.8333V17.3333H6ZM28 13.6667H31.6667C32.6792 13.6667 33.5 14.4875 33.5 15.5V37.5C33.5 38.5126 32.6792 39.3333 31.6667 39.3333H2.33333C1.32082 39.3333 0.5 38.5126 0.5 37.5V15.5C0.5 14.4875 1.32082 13.6667 2.33333 13.6667H6V11.8333C6 5.75821 10.9249 0.833344 17 0.833344C23.0751 0.833344 28 5.75821 28 11.8333V13.6667ZM24.3333 13.6667V11.8333C24.3333 7.78325 21.05 4.50001 17 4.50001C12.9499 4.50001 9.66667 7.78325 9.66667 11.8333V13.6667H24.3333ZM7.83333 19.1667H11.5V22.8333H7.83333V19.1667ZM7.83333 24.6667H11.5V28.3333H7.83333V24.6667ZM7.83333 30.1667H11.5V33.8333H7.83333V30.1667Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Investing in Real Estate",
      image: `<svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.4997 29.8333H41.1663V33.5H0.833008V29.8333H4.49967V2.33333C4.49967 1.32082 5.32049 0.5 6.33301 0.5H24.6663C25.6789 0.5 26.4997 1.32082 26.4997 2.33333V29.8333H33.833V15.1667H30.1663V11.5H35.6663C36.6789 11.5 37.4997 12.3208 37.4997 13.3333V29.8333ZM8.16634 4.16667V29.8333H22.833V4.16667H8.16634ZM11.833 15.1667H19.1663V18.8333H11.833V15.1667ZM11.833 7.83333H19.1663V11.5H11.833V7.83333Z" fill="white"/>
      </svg>
      
      
  `,
    },
    {
      text: "Real Estate Broker Services",
      image: `<svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99967 32.8335H31.9997V14.7889L20.9997 4.78888L9.99967 14.7889V32.8335ZM33.833 36.5002H8.16634C7.15383 36.5002 6.33301 35.6794 6.33301 34.6669V18.1669H0.833008L19.7664 0.954642C20.4656 0.318952 21.5337 0.318952 22.233 0.954642L41.1663 18.1669H35.6663V34.6669C35.6663 35.6794 34.8456 36.5002 33.833 36.5002ZM13.6663 16.3335C20.754 16.3335 26.4997 22.0792 26.4997 29.1669H22.833C22.833 24.1043 18.7289 20.0002 13.6663 20.0002V16.3335ZM13.6663 23.6669C16.7039 23.6669 19.1663 26.1292 19.1663 29.1669H13.6663V23.6669Z" fill="white"/>
      </svg>
      
  `,
    },
  ];

  const fundingSecondRowItems = [
    {
      text: "Buying and Selling Property",
      image: `<svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16667 17.9167C4.16667 18.4912 5.01185 19.4904 6.97253 20.4707C9.50909 21.739 13.1074 22.5 17 22.5C20.8925 22.5 24.4908 21.739 27.0274 20.4707C28.9882 19.4904 29.8333 18.4912 29.8333 17.9167V13.9359C26.8083 15.805 22.1834 17 17 17C11.8167 17 7.19159 15.805 4.16667 13.9359V17.9167ZM29.8333 23.1026C26.8083 24.9717 22.1834 26.1667 17 26.1667C11.8167 26.1667 7.19159 24.9717 4.16667 23.1026V27.0833C4.16667 27.6579 5.01185 28.6571 6.97253 29.6374C9.50909 30.9057 13.1074 31.6667 17 31.6667C20.8925 31.6667 24.4908 30.9057 27.0274 29.6374C28.9882 28.6571 29.8333 27.6579 29.8333 27.0833V23.1026ZM0.5 27.0833V8.75C0.5 4.19365 7.88731 0.5 17 0.5C26.1128 0.5 33.5 4.19365 33.5 8.75V27.0833C33.5 31.6397 26.1128 35.3333 17 35.3333C7.88731 35.3333 0.5 31.6397 0.5 27.0833ZM17 13.3333C20.8925 13.3333 24.4908 12.5724 27.0274 11.3041C28.9882 10.3237 29.8333 9.3246 29.8333 8.75C29.8333 8.1754 28.9882 7.17627 27.0274 6.19593C24.4908 4.92765 20.8925 4.16667 17 4.16667C13.1074 4.16667 9.50909 4.92765 6.97253 6.19593C5.01185 7.17627 4.16667 8.1754 4.16667 8.75C4.16667 9.3246 5.01185 10.3237 6.97253 11.3041C9.50909 12.5724 13.1074 13.3333 17 13.3333Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Letters of Intent",
      image: `<svg width="41" height="34" viewBox="0 0 41 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.5 0.5C39.5125 0.5 40.3333 1.32082 40.3333 2.33333V31.6788C40.3333 32.6845 39.4986 33.5 38.515 33.5H5.48497C4.48076 33.5 3.66667 32.6843 3.66667 31.6788V29.8333H36.6667V8.38333L22 21.5833L3.66667 5.08333V2.33333C3.66667 1.32082 4.48749 0.5 5.5 0.5H38.5ZM14.6667 22.5V26.1667H0V22.5H14.6667ZM9.16667 13.3333V17H0V13.3333H9.16667ZM35.8708 4.16667H8.12926L22 16.6504L35.8708 4.16667Z" fill="white"/>
      </svg>
      
      
  `,
    },

    {
      text: "Event Space Agreements",
      image: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5003 0.833344V4.50001H24.5003V0.833344H28.167V4.50001H35.5003C36.5129 4.50001 37.3337 5.32083 37.3337 6.33334V35.6667C37.3337 36.6792 36.5129 37.5 35.5003 37.5H2.50033C1.48781 37.5 0.666992 36.6792 0.666992 35.6667V6.33334C0.666992 5.32083 1.48781 4.50001 2.50033 4.50001H9.83366V0.833344H13.5003ZM33.667 19.1667H4.33366V33.8333H33.667V19.1667ZM17.167 22.8333V30.1667H8.00033V22.8333H17.167ZM9.83366 8.16668H4.33366V15.5H33.667V8.16668H28.167V11.8333H24.5003V8.16668H13.5003V11.8333H9.83366V8.16668Z" fill="white"/>
      </svg>
      
  `,
    },
    {
      text: "Commercial Leases",
      image: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16667 29.6317H6.75938L23.8345 12.5565L21.2418 9.9638L4.16667 27.039V29.6317ZM33.5 33.2983H0.5V25.5202L25.1308 0.889274C25.8469 0.173302 27.0076 0.173302 27.7235 0.889274L32.9091 6.07471C33.625 6.79068 33.625 7.95148 32.9091 8.66745L11.9448 29.6317H33.5V33.2983ZM23.8345 7.37108L26.4272 9.9638L29.0199 7.37108L26.4272 4.77836L23.8345 7.37108Z" fill="white"/>
      </svg>
      
  `,
    },
  ];

  const imageStyle = {
    background: "var(--purple)",
    width: "80px",
    height: "80px",
    boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
  };

  const handleClick = () => {
    const options = {
      block: "center",
      behavior: "smooth",
    };
    contactFormRef.current.scrollIntoView(options);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFixedButtonVisibility(false);
          } else {
            setFixedButtonVisibility(true);
          }
        });
      },
      {
        threshold: 0,
      }
    );
    observer.observe(contactFormRef.current);
  }, []);

  return (
    <>
      <TitleSection>
        <Title>
          Funding<span style={{ margin: "0 20px" }}>&</span> Investment
        </Title>
      </TitleSection>
      <Row style={{ marginTop: "40px" }}>
        {fundingFirstRowItems.map((item, idx) => (
          <RowItem style={style} imageStyle={imageStyle} text={item.text} image={item.image} key={idx} />
        ))}
      </Row>
      <Row>
        {fundingSecondRowItems.map((item, idx) => (
          <RowItem style={style} imageStyle={imageStyle} text={item.text} image={item.image} key={idx} />
        ))}
      </Row>
      <ContactForm ref={contactFormRef} />
      {isFixedButtonVisible && <FixedButton ref={fixedButtonRef} onClick={handleClick} />}
    </>
  );
};
