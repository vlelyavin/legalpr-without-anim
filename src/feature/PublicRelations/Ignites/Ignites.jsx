import "./Ignites.css";

export const Ignites = () => {
  const items = [
    { text: "Promotion" },
    { text: "Thought Leadership" },
    { text: "Source filling" },
    { text: "Newsjacking" },
    { text: "Content Marketing" },
  ];
  return (
    <div className="ignites__grid">
      {items.map((item, idx) => (
        <div className="ignites__item" key={idx}>
          <div className="ignites__item__number">{idx + 1}</div>
          <div className="ignites__item__text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};
