import { Row } from "../../components/Row";
import { Title } from "../../components/Title";
import { TitleSection } from "../../components/TitleSection";
import "./BusinessDesign.css";

export const BusinessDesign = () => {
  return (
    <>
      <TitleSection>
        <Title>Business Design</Title>
      </TitleSection>
      <Row style={{ marginTop: "40px" }}>
        <div className="business__column">
          <div className="business__column__upper">
            <div className="business__column__upper__icon">
              <svg width="43" height="35" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.5 4.375V25H36.5V4.375H6.5ZM2.75 2.51403C2.75 1.47076 3.60371 0.625 4.60963 0.625H38.3904C39.4175 0.625 40.25 1.46673 40.25 2.51403V28.75H2.75V2.51403ZM0.875 30.625H42.125V34.375H0.875V30.625Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="business__column__upper__info">
              <div className="business__column__upper__info__title">WebSite Development</div>
              <div className="business__column__upper__info__text">You will increase your profit with our design </div>
            </div>
          </div>
          <div className="business__column__info">
            <Row>
              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--green)" }}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 5H10V15H8V5ZM12 9H14V15H12V9ZM4 11H6V15H4V11ZM12 2H2V18H16V6H12V2ZM0 0.9918C0 0.44405 0.44749 0 0.9985 0H13L17.9997 5L18 18.9925C18 19.5489 17.5551 20 17.0066 20H0.9934C0.44476 20 0 19.5447 0 19.0082V0.9918Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Landing Page</div>
                </div>
                <div className="info__item__text">
                  A one-page website with the goal of maximizing conversions from regular visitors to repeat customers
                </div>
              </div>

              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--orange)" }}>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.0082 0C19.556 0 20 0.44495 20 0.9934V17.0066C20 17.5552 19.5447 18 19.0082 18H0.9918C0.44405 18 0 17.5551 0 17.0066V0.9934C0 0.44476 0.45531 0 0.9918 0H19.0082ZM18 2H2V16H18V2ZM16 12V14H4V12H16ZM10 4V10H4V4H10ZM16 8V10H12V8H16ZM8 6H6V8H8V6ZM16 4V6H12V4H16Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Portfolio website</div>
                </div>
                <div className="info__item__text">
                  A small site consisting of several pages with general information about the company, services and
                  contact information
                </div>
              </div>
            </Row>

            <Row style={{ marginBottom: 0 }}>
              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--red)" }}>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.5 6.65311V15.3469L10 19.689L17.5 15.3469V6.65311L10 2.311L2.5 6.65311ZM10 0L19.5 5.5V16.5L10 22L0.5 16.5V5.5L10 0ZM4.49896 8.97065L9 11.5765V16.625H11V11.5765L15.501 8.97066L14.499 7.2398L10 9.8445L5.50104 7.2398L4.49896 8.97065Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Corporate website</div>
                </div>
                <div className="info__item__text">
                  A one-page website with the goal of maximizing conversions from regular visitors to repeat customers
                </div>
              </div>

              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--purple)" }}>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 10V17C19 17.5523 18.5523 18 18 18H2C1.44772 18 1 17.5523 1 17V10H0V8L1 3H19L20 8V10H19ZM3 10V16H17V10H3ZM2.03961 8H17.9604L17.3604 5H2.63961L2.03961 8ZM4 11H12V14H4V11ZM1 0H19V2H1V0Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Portfolio website</div>
                </div>
                <div className="info__item__text">
                  A small site consisting of several pages with general information about the company, services and
                  contact information
                </div>
              </div>
            </Row>
          </div>
        </div>

        <div className="business__column">
          <div className="business__column__upper">
            <div className="business__column__upper__icon">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.375 4.36859V9.99359H30.625V4.36859H4.375ZM2.5 0.618591H32.5C33.5356 0.618591 34.375 1.45807 34.375 2.49359V11.8686C34.375 12.9041 33.5356 13.7436 32.5 13.7436H2.5C1.46447 13.7436 0.625 12.9041 0.625 11.8686V2.49359C0.625 1.45807 1.46447 0.618591 2.5 0.618591ZM6.25 17.4936H17.5C18.5356 17.4936 19.375 18.3331 19.375 19.3686V24.9936H21.25V36.2436H13.75V24.9936H15.625V21.2436H4.375C3.33947 21.2436 2.5 20.4042 2.5 19.3686V15.6186H6.25V17.4936ZM28.2479 20.7415L31.5625 17.4269L34.8771 20.7415C36.7077 22.5721 36.7077 25.54 34.8771 27.3706C33.0466 29.2013 30.0784 29.2013 28.2479 27.3706C26.4173 25.54 26.4173 22.5721 28.2479 20.7415Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="business__column__upper__info">
              <div className="business__column__upper__info__title">Branding</div>
              <div className="business__column__upper__info__text">
                With us, you will create a recognizable design for your business
              </div>
            </div>
          </div>
          <div className="business__column__info">
            <Row>
              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--green)" }}>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.9995 0C9.5518 0 9.9995 0.44772 9.9995 1V4C9.9995 4.55228 9.5518 5 8.9995 5C8.4472 5 7.9995 4.55228 7.9995 4V1C7.9995 0.44772 8.4472 0 8.9995 0ZM8.9995 15C9.5518 15 9.9995 15.4477 9.9995 16V19C9.9995 19.5523 9.5518 20 8.9995 20C8.4472 20 7.9995 19.5523 7.9995 19V16C7.9995 15.4477 8.4472 15 8.9995 15ZM17.6597 5C17.9359 5.47829 17.772 6.08988 17.2937 6.36602L14.6956 7.86602C14.2173 8.1422 13.6057 7.97829 13.3296 7.5C13.0535 7.02171 13.2173 6.41012 13.6956 6.13398L16.2937 4.63397C16.772 4.35783 17.3836 4.52171 17.6597 5ZM4.66935 12.5C4.94549 12.9783 4.78161 13.5899 4.30332 13.866L1.70525 15.366C1.22695 15.6422 0.615359 15.4783 0.339219 15C0.0630791 14.5217 0.226949 13.9101 0.705249 13.634L3.30332 12.134C3.78161 11.8578 4.3932 12.0217 4.66935 12.5ZM17.6597 15C17.3836 15.4783 16.772 15.6422 16.2937 15.366L13.6956 13.866C13.2173 13.5899 13.0535 12.9783 13.3296 12.5C13.6057 12.0217 14.2173 11.8578 14.6956 12.134L17.2937 13.634C17.772 13.9101 17.9359 14.5217 17.6597 15ZM4.66935 7.5C4.3932 7.97829 3.78161 8.1422 3.30332 7.86602L0.705249 6.36602C0.226949 6.08988 0.0630791 5.47829 0.339219 5C0.615359 4.52171 1.22695 4.35783 1.70525 4.63397L4.30332 6.13398C4.78161 6.41012 4.94549 7.02171 4.66935 7.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Logotype</div>
                </div>
                <div className="info__item__text">
                  We will design an original logo for your business, with which the association will immediately emerge
                </div>
              </div>

              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--orange)" }}>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 9.5C2.01472 9.5 0 7.48528 0 5C0 2.51472 2.01472 0.5 4.5 0.5C6.98528 0.5 9 2.51472 9 5C9 7.48528 6.98528 9.5 4.5 9.5ZM4.5 19.5C2.01472 19.5 0 17.4853 0 15C0 12.5147 2.01472 10.5 4.5 10.5C6.98528 10.5 9 12.5147 9 15C9 17.4853 6.98528 19.5 4.5 19.5ZM14.5 9.5C12.0147 9.5 10 7.48528 10 5C10 2.51472 12.0147 0.5 14.5 0.5C16.9853 0.5 19 2.51472 19 5C19 7.48528 16.9853 9.5 14.5 9.5ZM14.5 19.5C12.0147 19.5 10 17.4853 10 15C10 12.5147 12.0147 10.5 14.5 10.5C16.9853 10.5 19 12.5147 19 15C19 17.4853 16.9853 19.5 14.5 19.5ZM4.5 7.5C5.88071 7.5 7 6.38071 7 5C7 3.61929 5.88071 2.5 4.5 2.5C3.11929 2.5 2 3.61929 2 5C2 6.38071 3.11929 7.5 4.5 7.5ZM4.5 17.5C5.88071 17.5 7 16.3807 7 15C7 13.6193 5.88071 12.5 4.5 12.5C3.11929 12.5 2 13.6193 2 15C2 16.3807 3.11929 17.5 4.5 17.5ZM14.5 7.5C15.8807 7.5 17 6.38071 17 5C17 3.61929 15.8807 2.5 14.5 2.5C13.1193 2.5 12 3.61929 12 5C12 6.38071 13.1193 7.5 14.5 7.5ZM14.5 17.5C15.8807 17.5 17 16.3807 17 15C17 13.6193 15.8807 12.5 14.5 12.5C13.1193 12.5 12 13.6193 12 15C12 16.3807 13.1193 17.5 14.5 17.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Corporate identity</div>
                </div>
                <div className="info__item__text">
                  Designing a style, according to which customers will immediately recognize the owner
                </div>
              </div>
            </Row>

            <Row style={{ marginBottom: 0 }}>
              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--red)" }}>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.598 13L7.39893 5H5.39893L3.39893 10L3.39795 10.002L2.19897 13H4.35303L4.75293 12H8.043L8.443 13H10.598ZM5.552 10L6.39893 7.8851L7.24402 10H5.552ZM15 5H17V13H14C12.3431 13 11 11.6569 11 10C11 8.3431 12.3431 7 14 7H15V5ZM14 9C13.4478 9 13 9.4478 13 10C13 10.5522 13.4478 11 14 11H15V9H14ZM19 0H1C0.44775 0 0 0.44775 0 1V17C0 17.5522 0.44775 18 1 18H19C19.5522 18 20 17.5522 20 17V1C20 0.44775 19.5522 0 19 0ZM2 16V2H18V16H2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Advertising banners</div>
                </div>
                <div className="info__item__text">A banner ad design that will increase your reach many times over</div>
              </div>

              <div className="info__item">
                <div className="info__item__upper">
                  <div className="info__item__upper__icon" style={{ background: "var(--purple)" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.0357 4.69802C5.38492 6.55932 3.5134 9.2442 1.89465 12.4817C1.64766 12.9757 1.04698 13.1759 0.553011 12.9289C0.0590312 12.6819 -0.141199 12.0812 0.105791 11.5873C1.79739 8.2041 3.76494 5.37171 5.53943 3.37095C6.4251 2.37234 7.2797 1.56162 8.0449 0.99131C8.4272 0.7063 8.8049 0.46806 9.1677 0.29756C9.5193 0.13234 9.921 0 10.3336 0C10.5496 0 10.7872 0.0535001 11.007 0.19476C11.2233 0.33371 11.3629 0.51925 11.4495 0.69083C11.6066 1.00215 11.624 1.33473 11.6201 1.55938C11.6118 2.03651 11.4847 2.6328 11.3216 3.23975C10.9874 4.48318 10.3994 6.13104 9.8149 7.7577L9.7329 7.9858C9.1671 9.5598 8.6101 11.1093 8.248 12.3466C8.1505 12.68 8.0706 12.9792 8.0094 13.2414C8.7035 12.6835 9.5581 11.8454 10.466 10.9534L10.4956 10.9243C11.3772 10.0581 12.3098 9.1418 13.0967 8.5127C13.4872 8.2006 13.9082 7.904 14.3138 7.7322C14.6544 7.5878 15.4343 7.3532 16.0407 7.9596C16.4251 8.344 16.5318 8.8438 16.5594 9.2164C16.5883 9.6064 16.5429 10.0267 16.4725 10.4261C16.3315 11.2258 16.0483 12.159 15.7894 13.0009L15.7478 13.136C15.5165 13.8874 15.3102 14.5577 15.1926 15.0965C15.4529 14.8352 15.7734 14.4216 16.1475 13.811C16.436 13.34 17.0517 13.1921 17.5226 13.4806C17.9935 13.7691 18.1414 14.3848 17.8529 14.8557C17.3099 15.7422 16.748 16.4622 16.1519 16.9092C15.5283 17.377 14.7121 17.6407 13.8863 17.2278C13.2779 16.9235 13.1398 16.3173 13.1091 15.9819C13.0759 15.6192 13.1284 15.2233 13.1979 14.8667C13.3288 14.1944 13.5829 13.3698 13.823 12.5907L13.8777 12.4129C14.1447 11.5451 14.3873 10.734 14.5028 10.0789C14.5117 10.0284 14.5196 9.9802 14.5266 9.9341C14.4697 9.977 14.4094 10.0239 14.3455 10.0749C13.6477 10.6328 12.785 11.4788 11.8677 12.38L11.8381 12.4091C10.9566 13.2752 10.024 14.1915 9.2371 14.8206C8.8466 15.1328 8.4255 15.4293 8.02 15.6012C7.6794 15.7455 6.89947 15.9801 6.29311 15.3738C5.9843 15.065 5.9052 14.6753 5.87972 14.4382C5.8515 14.1755 5.86901 13.8971 5.90269 13.6351C5.9706 13.1069 6.12934 12.4656 6.32855 11.7849C6.70829 10.4872 7.2842 8.8852 7.8411 7.3362L7.9327 7.0814C8.5263 5.42931 9.082 3.8674 9.3901 2.72074C9.4172 2.61968 9.4418 2.52435 9.4638 2.43468C9.3924 2.48361 9.3178 2.53695 9.2401 2.59489C8.6173 3.05907 7.8627 3.76559 7.0357 4.69802Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="info__item__upper__title">Rebranding</div>
                </div>
                <div className="info__item__text">
                  We will refresh the look of your brand, giving it a new lease of life
                </div>
              </div>
            </Row>
          </div>
        </div>
      </Row>
    </>
  );
};
