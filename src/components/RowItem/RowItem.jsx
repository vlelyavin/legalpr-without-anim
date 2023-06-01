import "./RowItem.css";

export const RowItem = ({ style, imageStyle, image, text }) => {
  return (
    <div className="row__item" style={style}>
      <div className="row__item__icon__container" style={imageStyle} dangerouslySetInnerHTML={{ __html: image }}></div>
      <div className="row__item__text" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
};
