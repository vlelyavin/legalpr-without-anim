import { useEffect, useRef, useState } from "react";
import { ContactForm } from "../../components/ContactForm";
import { FixedButton } from "../../components/FixedButton";
import { Quote } from "../../components/Quote";
import { Row } from "../../components/Row";
import { RowItem } from "../../components/RowItem";
import { SectionIntro } from "../../components/SectionIntro";
import { Title } from "../../components/Title";
import { TitleSection } from "../../components/TitleSection";
import { Ignites } from "../../feature/PublicRelations/Ignites";
import "./PublicRelations.css";

export const PublicRelations = () => {
  const fixedButtonRef = useRef();
  const contactFormRef = useRef();
  const [isFixedButtonVisible, setFixedButtonVisibility] = useState(true);
  const firstRowItems = [
    {
      text: "Get feature stories<br /> in the press",
      image: `<svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M35.5151 0.5C36.5194 0.5 37.3334 1.31574 37.3334 2.32123V31.6788C37.3334 32.6845 36.4986 33.5 35.5151 33.5H2.48499C1.48078 33.5 0.666687 32.6843 0.666687 31.6788V2.32123C0.666687 1.31539 1.50142 0.5 2.48499 0.5H35.5151ZM33.6667 4.16667H4.33335V29.8333H33.6667V4.16667ZM30 22.5V26.1667H8.00002V22.5H30ZM19 7.83333V18.8333H8.00002V7.83333H19ZM30 15.1667V18.8333H22.6667V15.1667H30ZM15.3334 11.5H11.6667V15.1667H15.3334V11.5ZM30 7.83333V11.5H22.6667V7.83333H30Z" fill="white"/>
  </svg>
  `,
    },

    {
      text: "Secure live interviews on<br /> radio, podcasts, TV",
      image: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.2594 8.16675H35.515C36.5193 8.16675 37.3333 8.9819 37.3333 10.0017V35.6652C37.3333 36.6785 36.4986 37.5 35.515 37.5H2.48497C1.48076 37.5 0.666672 36.6849 0.666672 35.6652V10.0017C0.666672 8.98828 1.50141 8.16675 2.48497 8.16675H12.7406L8.09213 3.51827L10.6849 0.925537L17.926 8.16675H20.074L27.3151 0.925537L29.9078 3.51827L25.2594 8.16675ZM4.33334 11.8334V33.8333H33.6667V11.8334H4.33334Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Help you win industry<br /> awards",
      image: `<svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.1667 26.9499V39.5477C24.1667 40.0538 23.7562 40.4645 23.25 40.4645C23.0839 40.4645 22.9209 40.4192 22.7785 40.3338L15 35.6667L7.22163 40.3338C6.78752 40.5941 6.22445 40.4533 5.96397 40.0194C5.8785 39.8767 5.83334 39.7138 5.83334 39.5477V26.9499C2.48031 24.2621 0.333344 20.1317 0.333344 15.5C0.333344 7.39983 6.89983 0.833344 15 0.833344C23.1002 0.833344 29.6667 7.39983 29.6667 15.5C29.6667 20.1317 27.5197 24.2621 24.1667 26.9499ZM15 26.5C21.0751 26.5 26 21.5751 26 15.5C26 9.42488 21.0751 4.50001 15 4.50001C8.92488 4.50001 4.00001 9.42488 4.00001 15.5C4.00001 21.5751 8.92488 26.5 15 26.5ZM15 22.8333C10.9499 22.8333 7.66668 19.55 7.66668 15.5C7.66668 11.4499 10.9499 8.16668 15 8.16668C19.05 8.16668 22.3333 11.4499 22.3333 15.5C22.3333 19.55 19.05 22.8333 15 22.8333Z" fill="white"/>
      </svg>
      
  `,
    },
  ];

  const secondRowItems = [
    {
      text: "Stack the first page of Google with real stories about you",
      image: `<svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.3333 0.666687L33.4995 9.83335L33.5 35.4863C33.5 36.5063 32.6843 37.3334 31.6788 37.3334H2.32123C1.31539 37.3334 0.5 36.4986 0.5 35.5151V2.48499C0.5 1.48078 1.3204 0.666687 2.33058 0.666687H24.3333ZM22.5 4.33335H4.16667V33.6667H29.8333V11.6667H22.5V4.33335ZM18.8333 13.5V20.8334H24.3333V24.5H15.1667V13.5H18.8333Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Increase your awareness and reputation",
      image: `<svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.666664 18.8333H11.6667V33.5H0.666664V18.8333ZM26.3333 9.66667H37.3333V33.5H26.3333V9.66667ZM13.5 0.5H24.5V33.5H13.5V0.5ZM4.33333 22.5V29.8333H8V22.5H4.33333ZM17.1667 4.16667V29.8333H20.8333V4.16667H17.1667ZM30 13.3333V29.8333H33.6667V13.3333H30Z" fill="white"/>
      </svg>
      
      
  `,
    },
  ];

  const benefitsFirstRowItems = [
    {
      text: "Stronger brand reputation<br/> and perception",
      image: `<svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.66667 4.33335C9.66667 6.3584 8.02505 8.00002 6 8.00002C3.97496 8.00002 2.33333 6.3584 2.33333 4.33335C2.33333 2.30831 3.97496 0.666687 6 0.666687C8.02505 0.666687 9.66667 2.30831 9.66667 4.33335ZM4.16667 26.3334V37.3334H0.5V15.3334C0.5 12.2958 2.96244 9.83335 6 9.83335C7.50442 9.83335 8.86776 10.4374 9.86073 11.4161L14.2139 15.5271L18.454 11.287L21.0467 13.8797L14.2868 20.6396L11.5 18.0076V37.3334H7.83333V26.3334H4.16667ZM13.3333 6.16669H29.8333V22.6667H13.3333V26.3334H21.3366L26.513 37.3334H30.5654L25.389 26.3334H31.6667C32.6792 26.3334 33.5 25.5126 33.5 24.5V4.33335C33.5 3.32084 32.6792 2.50002 31.6667 2.50002H13.3333V6.16669Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Can lead to higher company<br /> valuation for investment",
      image: `<svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.5278 24.6938C36.364 17.977 33.8184 10.0428 27.341 6.30314C22.6603 3.60073 17.1092 3.77158 12.73 6.26849L10.9106 3.08434C16.3847 -0.0367272 23.3235 -0.250292 29.1744 3.12772C37.4073 7.88096 40.5588 18.0555 36.7231 26.5385L39.1831 27.9588L31.5471 32.018L31.2446 23.3754L33.5278 24.6938ZM6.48762 13.316C3.65149 20.0327 6.19713 27.9668 12.6744 31.7065C17.355 34.409 22.906 34.2381 27.2851 31.7415L29.1045 34.9254C23.6305 38.0465 16.6919 38.2599 10.841 34.882C2.60821 30.1287 -0.543299 19.9543 3.29232 11.4712L0.832352 10.0509L8.46831 5.99171L8.77092 14.6342L6.48762 13.316ZM13.5911 22.6714H23.6744C24.1807 22.6714 24.591 22.2611 24.591 21.7548C24.591 21.2486 24.1807 20.8381 23.6744 20.8381H16.341C13.8097 20.8381 11.7577 18.7862 11.7577 16.2548C11.7577 13.7235 13.8097 11.6715 16.341 11.6715H18.1744V9.83819H21.841V11.6715H26.4244V15.3381H16.341C15.8348 15.3381 15.4244 15.7486 15.4244 16.2548C15.4244 16.7611 15.8348 17.1714 16.341 17.1714H23.6744C26.2056 17.1714 28.2577 19.2235 28.2577 21.7548C28.2577 24.2862 26.2056 26.3381 23.6744 26.3381H21.841V28.1714H18.1744V26.3381H13.5911V22.6714Z" fill="white"/>
      </svg>
      
  `,
    },
    {
      text: "High quality inbound web <br/> traffic",
      image: `<svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.83334 4.33335V2.50002C5.83334 1.48751 6.65416 0.666687 7.66668 0.666687H22.3333C23.3459 0.666687 24.1667 1.48751 24.1667 2.50002V4.33335H29.6667C29.6667 8.91669 25.0833 10.75 24.1667 10.75V15.3334H29.6667C29.6667 19.9167 25.0833 21.75 24.1667 21.75V26.3334H29.6667C29.6667 30.9167 25.0833 32.75 24.1667 32.75V35.5C24.1667 36.5126 23.3459 37.3334 22.3333 37.3334H7.66668C6.65416 37.3334 5.83334 36.5126 5.83334 35.5V32.75C4.91668 32.75 0.333344 30.9167 0.333344 26.3334H5.83334V21.75C4.91668 21.75 0.333344 19.9167 0.333344 15.3334H5.83334V10.75C4.91668 10.75 0.333344 8.91669 0.333344 4.33335H5.83334ZM15 33.6667C17.0251 33.6667 18.6667 32.0251 18.6667 30C18.6667 27.9749 17.0251 26.3334 15 26.3334C12.9749 26.3334 11.3333 27.9749 11.3333 30C11.3333 32.0251 12.9749 33.6667 15 33.6667ZM15 22.6667C17.0251 22.6667 18.6667 21.0251 18.6667 19C18.6667 16.9749 17.0251 15.3334 15 15.3334C12.9749 15.3334 11.3333 16.9749 11.3333 19C11.3333 21.0251 12.9749 22.6667 15 22.6667ZM15 11.6667C17.0251 11.6667 18.6667 10.0251 18.6667 8.00002C18.6667 5.97498 17.0251 4.33335 15 4.33335C12.9749 4.33335 11.3333 5.97498 11.3333 8.00002C11.3333 10.0251 12.9749 11.6667 15 11.6667Z" fill="white"/>
      </svg>
      
  `,
    },
  ];

  const benefitsSecondRowItems = [
    {
      text: "Consistent stream of<br/> inbound lead generation",
      image: `<svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.625 2.5H38.375V6.25H19.625V2.5ZM10.25 8.125V15.625H6.5V8.125H0.875L8.375 0.625L15.875 8.125H10.25ZM10.25 26.875H15.875L8.375 34.375L0.875 26.875H6.5V19.375H10.25V26.875ZM19.625 28.75H38.375V32.5H19.625V28.75ZM15.875 15.625H38.375V19.375H15.875V15.625Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "High quality backlinks with<br /> strong DA for SEO",
      image: `<svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6667 0.5C6.57901 0.5 0.833328 6.24569 0.833328 13.3333C0.833328 20.421 6.57901 26.1667 13.6667 26.1667H15.63C15.5443 25.5679 15.5 24.9558 15.5 24.3333C15.5 23.7109 15.5443 23.0988 15.63 22.5H13.6667C8.60406 22.5 4.49999 18.3959 4.49999 13.3333C4.49999 8.27073 8.60406 4.16667 13.6667 4.16667H28.3333C33.3959 4.16667 37.5 8.27073 37.5 13.3333C37.5 13.9618 37.4367 14.5754 37.3163 15.1681C38.3897 16.2205 39.2791 17.4598 39.9317 18.8333C40.7235 17.1663 41.1667 15.3016 41.1667 13.3333C41.1667 6.24569 35.421 0.5 28.3333 0.5H13.6667ZM28.3333 18.8333C25.2957 18.8333 22.8333 21.2957 22.8333 24.3333C22.8333 27.371 25.2957 29.8333 28.3333 29.8333C31.371 29.8333 33.8333 27.371 33.8333 24.3333C33.8333 21.2957 31.371 18.8333 28.3333 18.8333ZM19.1667 24.3333C19.1667 19.2708 23.2708 15.1667 28.3333 15.1667C33.3959 15.1667 37.5 19.2708 37.5 24.3333C37.5 26.2017 36.941 27.9395 35.9813 29.3886L40.6297 34.037L38.037 36.6297L33.3886 31.9813C31.9395 32.941 30.2017 33.5 28.3333 33.5C23.2708 33.5 19.1667 29.3959 19.1667 24.3333Z" fill="white"/>
      </svg>
      
  `,
    },
    {
      text: "“Evergreen” content<br /> (always there)",
      image: `<svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0002 12.5833L17.8795 21.9104L27.9489 22.7178L20.2772 29.2895L22.6209 39.1155L14.0002 33.85L5.37925 39.1155L7.72313 29.2895L0.0512695 22.7178L10.1207 21.9104L14.0002 12.5833ZM14.0002 22.1295L12.6461 25.3864L9.13259 25.6678L11.8094 27.9618L10.9899 31.3915L14.0002 29.5534L17.0087 31.3915L16.1908 27.9618L18.8659 25.6678L15.3541 25.3864L14.0002 22.1295ZM6.66676 0.666626V17.1666H3.00009V0.666626H6.66676ZM25.0002 0.666626V17.1666H21.3335V0.666626H25.0002ZM15.8335 0.666626V9.83329H12.1669V0.666626H15.8335Z" fill="white"/>
      </svg>
      
  `,
    },
  ];

  const servicesFirstRowItems = [
    {
      text: "Full PR messaging and strategy<br />formulation",
    },

    {
      text: "Manual research and building of<br />target media list",
    },

    {
      text: "Submissions for awards",
    },
  ];

  const servicesSecondRowItems = [
    {
      text: "Brainstorming and drafting press<br/> releases",
    },

    {
      text: "Personalized media outreach and<br/> story pitching",
    },

    {
      text: "Event or tradeshow support: pre-<br/>event and post-event",
    },
  ];

  const servicesThirdRowItems = [
    {
      text: "Brainstorming and ghostwriting<br/> thought leadership articles",
    },

    {
      text: "Outreach for podcast, radio, TV and<br/> live speaking engagements",
    },

    {
      text: "Analyst relations and engagement (if<br /> applicable)",
    },
  ];

  const servicesRowImage = `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <TitleSection style={{ flexDirection: "column" }}>
        <Title>Public Relations</Title>
        <p style={{ fontWeight: 300 }}>
          You may be losing business to your competitors simply
          <br />
          because they’re in the news more. We can change that.
        </p>
      </TitleSection>
      <SectionIntro>Legal & PR Solutions can help you:</SectionIntro>
      <Row>
        {firstRowItems.map((rowItem, idx) => (
          <RowItem text={rowItem.text} image={rowItem.image} imageStyle={{ background: "var(--green)" }} key={idx} />
        ))}
      </Row>
      <Row>
        {secondRowItems.map((rowItem, idx) => (
          <RowItem text={rowItem.text} image={rowItem.image} imageStyle={{ background: "var(--green)" }} key={idx} />
        ))}
      </Row>

      <SectionIntro>Benefits to you:</SectionIntro>
      <Row>
        {benefitsFirstRowItems.map((rowItem, idx) => (
          <RowItem text={rowItem.text} image={rowItem.image} imageStyle={{ background: "var(--purple)" }} key={idx} />
        ))}
      </Row>
      <Row>
        {benefitsSecondRowItems.map((rowItem, idx) => (
          <RowItem text={rowItem.text} image={rowItem.image} imageStyle={{ background: "var(--purple)" }} key={idx} />
        ))}
      </Row>
      <Quote
        style={{ background: "var(--green)", marginTop: "50px" }}
        text="Let’s put an end to prospects saying “we’ve never heard of you”. Firecracker PR has created a unique 5-step process we call “Ignites”. Ignites is a proven system that has helped dozens of companies go from zero to hero in as short amount of time as possible."
      />
      <SectionIntro>Ignites has 5 steps wich includes:</SectionIntro>
      <Ignites />
      <SectionIntro>Services offered</SectionIntro>
      <Row>
        {servicesFirstRowItems.map((rowItem, idx) => (
          <RowItem
            text={rowItem.text}
            image={servicesRowImage}
            imageStyle={{ background: "var(--orange)", width: "60px", height: "60px" }}
            key={idx}
            style={{ fontSize: "0.9rem", gap: "20px", padding: "5px 15px" }}
          />
        ))}
      </Row>
      <Row>
        {servicesSecondRowItems.map((rowItem, idx) => (
          <RowItem
            text={rowItem.text}
            image={servicesRowImage}
            imageStyle={{ background: "var(--orange)", width: "60px", height: "60px" }}
            key={idx}
            style={{ fontSize: "0.9rem", gap: "20px", padding: "5px 15px" }}
          />
        ))}
      </Row>
      <Row>
        {servicesThirdRowItems.map((rowItem, idx) => (
          <RowItem
            text={rowItem.text}
            image={servicesRowImage}
            imageStyle={{ background: "var(--orange)", width: "60px", height: "60px" }}
            key={idx}
            style={{ fontSize: "0.9rem", gap: "20px", padding: "5px 15px" }}
          />
        ))}
      </Row>
      <Row>
        <RowItem
          text="Integration with social media,<br/> content marketing, search engine<br/> marketing"
          image={servicesRowImage}
          imageStyle={{ background: "var(--orange)", width: "60px", height: "60px" }}
          style={{ fontSize: "0.9rem", gap: "20px", padding: "5px 15px", width: "calc(34% - 20px)" }}
        />
      </Row>
      {isFixedButtonVisible && <FixedButton ref={fixedButtonRef} onClick={handleClick} />}

      <ContactForm ref={contactFormRef} />
    </>
  );
};
