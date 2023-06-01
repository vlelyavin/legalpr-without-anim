import "./TitleSection.css";

export const TitleSection = ({ children, style }) => {
  return (
    <div className="title__section" style={style}>
      {children}
    </div>
  );
};
