import "./Row.css";

export const Row = ({ children, style }) => {
  return (
    <div className="row" style={style}>
      {children}
    </div>
  );
};
