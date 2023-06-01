import "./Title.css";

export const Title = ({ children, color }) => {
  return (
    <h1 className="title" style={{ color: color }}>
      {children}
    </h1>
  );
};
