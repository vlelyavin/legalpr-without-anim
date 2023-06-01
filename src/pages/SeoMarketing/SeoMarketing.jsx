import { useEffect, useRef, useState } from "react";
import { ContactForm } from "../../components/ContactForm";
import { FixedButton } from "../../components/FixedButton";
import { Row } from "../../components/Row";
import { RowItem } from "../../components/RowItem";
import { SectionIntro } from "../../components/SectionIntro";
import { Title } from "../../components/Title";
import { TitleSection } from "../../components/TitleSection";
import "./SeoMarketing.css";

export const SeoMarketing = () => {
  const fixedButtonRef = useRef();
  const contactFormRef = useRef();
  const [isFixedButtonVisible, setFixedButtonVisibility] = useState(true);

  const seoStyle = {
    background: "var(--green)",
    color: "white",
    padding: "15px 5px 15px 20px",
    borderRadius: "24px",
  };

  const seoImageStyle = {
    background: "var(--green)",
    width: "80px",
    height: "80px",
    boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
  };

  const tasksStyle = { fontSize: "0.9rem", gap: "20px", padding: "5px 15px" };
  const tasksImageStyle = { background: "var(--orange)", width: "60px", height: "60px" };

  const seoFirstRowItems = [
    {
      text: "Understanding of business goals and web goals",
      image: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.9998 3.66669C32.1198 3.66669 40.3332 11.88 40.3332 22C40.3332 32.12 32.1198 40.3334 21.9998 40.3334C11.8798 40.3334 3.6665 32.12 3.6665 22C3.6665 11.88 11.8798 3.66669 21.9998 3.66669ZM21.9998 36.6667C30.1155 36.6667 36.6665 30.1156 36.6665 22C36.6665 13.8845 30.1155 7.33335 21.9998 7.33335C13.8843 7.33335 7.33317 13.8845 7.33317 22C7.33317 30.1156 13.8843 36.6667 21.9998 36.6667ZM21.9998 33C15.9132 33 10.9998 28.0867 10.9998 22C10.9998 15.9134 15.9132 11 21.9998 11C28.0865 11 32.9998 15.9134 32.9998 22C32.9998 28.0867 28.0865 33 21.9998 33ZM21.9998 18.3334C19.9832 18.3334 18.3332 19.9834 18.3332 22C18.3332 24.0167 19.9832 25.6667 21.9998 25.6667C24.0165 25.6667 25.6665 24.0167 25.6665 22C25.6665 19.9834 24.0165 18.3334 21.9998 18.3334Z" fill="white"/>
  </svg>
  `,
    },

    {
      text: "Complete website SEO audit",
      image: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.0567 30.4642L40.9083 38.3158L38.3156 40.9085L30.464 33.0569C27.6408 35.3155 24.0605 36.6667 20.1665 36.6667C11.0585 36.6667 3.6665 29.2747 3.6665 20.1667C3.6665 11.0587 11.0585 3.66669 20.1665 3.66669C29.2745 3.66669 36.6665 11.0587 36.6665 20.1667C36.6665 24.0607 35.3153 27.641 33.0567 30.4642ZM29.3785 29.1038C31.6203 26.7935 32.9998 23.642 32.9998 20.1667C32.9998 13.0763 27.2569 7.33335 20.1665 7.33335C13.0761 7.33335 7.33317 13.0763 7.33317 20.1667C7.33317 27.2571 13.0761 33 20.1665 33C23.6418 33 26.7933 31.6204 29.1036 29.3786L29.3785 29.1038ZM22.326 13.1565C21.0527 13.7314 20.1665 15.0122 20.1665 16.5C20.1665 18.5251 21.8081 20.1667 23.8332 20.1667C25.3209 20.1667 26.6019 19.2805 27.1768 18.0072C27.3867 18.6899 27.4998 19.415 27.4998 20.1667C27.4998 24.2167 24.2165 27.5 20.1665 27.5C16.1164 27.5 12.8332 24.2167 12.8332 20.1667C12.8332 16.1166 16.1164 12.8334 20.1665 12.8334C20.9182 12.8334 21.6433 12.9464 22.326 13.1565Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Brainstorm list of potential keywords prospects would use",
      image: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.8332 37.3334H6.1665C3.12895 37.3334 0.666504 34.871 0.666504 31.8334V2.50002C0.666504 1.48751 1.48732 0.666687 2.49984 0.666687H28.1665C29.1791 0.666687 29.9998 1.48751 29.9998 2.50002V24.5H37.3332V31.8334C37.3332 34.871 34.8708 37.3334 31.8332 37.3334ZM29.9998 28.1667V31.8334C29.9998 32.8459 30.8206 33.6667 31.8332 33.6667C32.8457 33.6667 33.6665 32.8459 33.6665 31.8334V28.1667H29.9998ZM26.3332 33.6667V4.33335H4.33317V31.8334C4.33317 32.8459 5.15399 33.6667 6.1665 33.6667H26.3332ZM7.99984 9.83335H22.6665V13.5H7.99984V9.83335ZM7.99984 17.1667H22.6665V20.8334H7.99984V17.1667ZM7.99984 24.5H17.1665V28.1667H7.99984V24.5Z" fill="white"/>
      </svg>

  `,
    },
  ];

  const seoSecondRowItems = [
    {
      text: "Keyword research on related search terms & monthly search volumes",
      image: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.667 11V16.5H9.16697V11H14.667ZM5.50031 7.33331V20.1666H18.3337V7.33331H5.50031ZM23.8337 7.33331H38.5003V11H23.8337V7.33331ZM23.8337 20.1666H38.5003V23.8333H23.8337V20.1666ZM23.8337 33H38.5003V36.6666H23.8337V33ZM19.63 29.713L17.0373 27.1203L11.0003 33.1573L7.71332 29.8703L5.12061 32.463L11.0003 38.3427L19.63 29.713Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Manual search of each short-listed term to estimate ranking difficulty",
      image: `<svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 4.33335H4.16667V33.6667H29.8333V11.6667H22.5V4.33335ZM0.5 2.48499C0.5 1.48078 1.3204 0.666687 2.33058 0.666687H24.3333L33.4995 9.83335L33.5 35.4863C33.5 36.5063 32.6843 37.3334 31.6788 37.3334H2.32123C1.31539 37.3334 0.5 36.4986 0.5 35.5151V2.48499ZM19.8032 23.4851C16.991 25.1461 13.3083 24.7684 10.892 22.3521C8.02822 19.4882 8.02822 14.8451 10.892 11.9812C13.7559 9.1174 18.399 9.1174 21.2629 11.9812C23.6792 14.3975 24.0569 18.0802 22.3959 20.8924L26.4485 24.9448L23.8558 27.5377L19.8032 23.4851ZM18.6702 19.7594C20.1022 18.3276 20.1022 16.0058 18.6702 14.574C17.2383 13.142 14.9168 13.142 13.4848 14.574C12.0529 16.0058 12.0529 18.3276 13.4848 19.7594C14.9168 21.1914 17.2383 21.1914 18.6702 19.7594Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Finalized list of proposed target keyword phrases",
      image: `<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2.5H34.375V6.25H10V2.5ZM4.375 0.625V6.25H6.25V8.125H0.625V6.25H2.5V2.5H0.625V0.625H4.375ZM0.625 21.25V16.5625H4.375V15.625H0.625V13.75H6.25V18.4375H2.5V19.375H6.25V21.25H0.625ZM4.375 31.5625H0.625V29.6875H4.375V28.75H0.625V26.875H6.25V34.375H0.625V32.5H4.375V31.5625ZM10 15.625H34.375V19.375H10V15.625ZM10 28.75H34.375V32.5H10V28.75Z" fill="white"/>
      </svg>      
  `,
    },
  ];

  const seoThirdRowItems = [
    {
      text: "Write new Title and Description meta tags",
      image: `<svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.72172 22.7266C7.29653 23.8697 6.93559 24.9272 6.61272 25.9949C8.37133 24.7178 10.465 23.9071 12.8785 23.6053C17.4862 23.0295 21.5789 19.9871 23.6512 16.1648L20.9822 13.4978L23.5721 10.9041C24.1839 10.2915 24.7955 9.67939 25.4073 9.06768C26.1944 8.28052 27.0833 6.8237 28.0236 4.72712C17.7694 6.31649 11.4905 12.595 7.72172 22.7266ZM26.1667 13.495L28 15.3271C26.1667 20.8271 20.6667 26.3271 13.3333 27.2438C8.44101 27.8552 5.38439 31.2164 4.16344 37.3271H0.5C2.33333 26.3271 6 0.6604 33.5 0.6604C31.6683 6.15552 29.8366 9.82056 28.005 11.6555C27.388 12.2724 26.7774 12.8835 26.1667 13.495Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Edit new copy to ensure SEO keyword optimization",
      image: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.7219 2.49385L22.0552 6.16052H4.16667V31.8273H29.8333V13.9387L33.5 10.272V33.6606C33.5 34.673 32.6792 35.4939 31.6667 35.4939H2.33333C1.32082 35.4939 0.5 34.673 0.5 33.6606V4.32719C0.5 3.31467 1.32082 2.49385 2.33333 2.49385H25.7219ZM32.5564 0.844788L35.1491 3.43751L18.2963 20.2903L15.7082 20.2947L15.7036 17.6976L32.5564 0.844788Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Ensure tracking code in place for Google Analytics",
      image: `<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.666504 0.333313H4.33317V29.6666H0.666504V0.333313ZM7.99984 0.333313H9.83317V29.6666H7.99984V0.333313ZM11.6665 0.333313H15.3332V29.6666H11.6665V0.333313ZM17.1665 0.333313H20.8332V29.6666H17.1665V0.333313ZM22.6665 0.333313H26.3332V29.6666H22.6665V0.333313ZM28.1665 0.333313H29.9998V29.6666H28.1665V0.333313ZM31.8332 0.333313H37.3332V29.6666H31.8332V0.333313Z" fill="white"/>
      </svg>          
  `,
    },
  ];

  const seoFourthRowItems = [
    {
      text: "Decide on “conversions” and “goals”, integrate into GA for tracking",
      image: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.8335 0.833374L22.8353 6.44706C29.4687 7.27506 34.7261 12.533 35.5533 19.1667H41.1668V22.8334L35.5532 22.8352C34.7252 29.468 29.4681 34.7251 22.8353 35.553L22.8335 41.1667H19.1668V35.5532C12.5332 34.726 7.27519 29.4686 6.44718 22.8352L0.833496 22.8334V19.1667H6.44696C7.27422 12.5324 12.5325 7.27409 19.1668 6.44684V0.833374H22.8335ZM21.0002 10C14.925 10 10.0002 14.9249 10.0002 21C10.0002 27.0752 14.925 32 21.0002 32C27.0753 32 32.0002 27.0752 32.0002 21C32.0002 14.9249 27.0753 10 21.0002 10ZM21.0002 17.3334C23.0253 17.3334 24.6668 18.9749 24.6668 21C24.6668 23.0251 23.0253 24.6667 21.0002 24.6667C18.9751 24.6667 17.3335 23.0251 17.3335 21C17.3335 18.9749 18.9751 17.3334 21.0002 17.3334Z" fill="white"/>
      </svg>
           
  `,
    },
    {
      text: "Update HTML and XML sitemaps",
      image: `<svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 30.3259L8.53152 28.024L7.92812 21.5259H12.0895L12.3808 24.9073L17 26.1296L21.6191 24.9073L22.0978 19.6519H7.76167L6.59647 7.40922H27.4036L26.9875 11.4629H11.174L11.5485 15.598H26.6129L25.4685 28.024L17 30.3259ZM0.5 0.666626H33.5L30.5245 33.6666L17 37.3333L3.47541 33.6666L0.5 0.666626ZM4.51214 4.33329L6.89808 30.7954L17 33.5343L27.1018 30.7954L29.4879 4.33329H4.51214Z" fill="white"/>
      </svg>
           
  `,
    },
  ];

  const tasksFirstRowItems = [
    { text: "Keyword research for each next level of webpages" },
    { text: "Revised copy or copy suggestions" },
    { text: "Analyze target pages for improved optimization" },
  ];

  const tasksSecondRowItems = [
    { text: "New Title and Description meta tags for each set of webpages" },
    { text: "Optimize for long tail keyword searches" },
    { text: "Write new title and description meta tags" },
  ];

  const tasksImage = `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="white"/>
  </svg>`;

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
          if (fixedButtonRef && entry.isIntersecting) {
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
      <TitleSection style={{ flexDirection: "row", gap: "50px", alignItems: "center" }}>
        <Title>
          SEO
          <br /> Marketing
        </Title>
        <p style={{ fontWeight: 300 }}>
          PR is the new SEO. Forget what you know about SEO from a few
          <br /> years ago.
          <br />
          <br />
          The time of trying to “game” Google is over. If you want to build a lasting advantage that makes
          <br /> sure your competitors will never overcome you, you need public relations to boost your search
          <br /> engine optimization efforts.
        </p>
      </TitleSection>
      <SectionIntro>Here’s what we do for you in SEO:</SectionIntro>
      <Row>
        {seoFirstRowItems.map((item, idx) => (
          <RowItem text={item.text} image={item.image} imageStyle={seoImageStyle} style={seoStyle} key={idx} />
        ))}
      </Row>
      <Row>
        {seoSecondRowItems.map((item, idx) => (
          <RowItem text={item.text} image={item.image} imageStyle={seoImageStyle} style={seoStyle} key={idx} />
        ))}
      </Row>
      <Row>
        {seoThirdRowItems.map((item, idx) => (
          <RowItem text={item.text} image={item.image} imageStyle={seoImageStyle} style={seoStyle} key={idx} />
        ))}
      </Row>
      <Row>
        {seoFourthRowItems.map((item, idx) => (
          <RowItem
            text={item.text}
            image={item.image}
            imageStyle={seoImageStyle}
            style={{ ...seoStyle, width: "calc(34% - 21px)" }}
            key={idx}
          />
        ))}
      </Row>
      <SectionIntro>SEO Monthly ongoing tasks:</SectionIntro>
      <Row>
        {tasksFirstRowItems.map((item, idx) => (
          <RowItem text={item.text} image={tasksImage} imageStyle={tasksImageStyle} style={tasksStyle} key={idx} />
        ))}
      </Row>
      <Row>
        {tasksSecondRowItems.map((item, idx) => (
          <RowItem text={item.text} image={tasksImage} imageStyle={tasksImageStyle} style={tasksStyle} key={idx} />
        ))}
      </Row>
      <Row>
        <RowItem
          text="Provide written monthly report and analysis"
          image={tasksImage}
          imageStyle={tasksImageStyle}
          style={{ ...tasksStyle, width: "calc(34% - 21px)" }}
        />
        <RowItem
          text="Conduct call to review data, recommendations & to confirm action items/next steps"
          image={tasksImage}
          imageStyle={tasksImageStyle}
          style={{ ...tasksStyle, width: "calc(34% - 21px)" }}
        />
      </Row>
      {isFixedButtonVisible && <FixedButton ref={fixedButtonRef} onClick={handleClick} />}
      <ContactForm ref={contactFormRef} />
    </>
  );
};
