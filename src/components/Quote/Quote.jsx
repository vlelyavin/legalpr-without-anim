import "./Quote.css";

export const Quote = ({ text, style }) => {
  return (
    <div className="quote__container" style={style}>
      <div className="quote" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
};
