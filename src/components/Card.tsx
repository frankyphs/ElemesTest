import { useState } from "react"

interface ICardProps {
  image: string;
  title: string;
  items: number;
  background: string;
  backgroundColor: string
}

const Card = (props: ICardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`card ${isHovered ? "card--hovered" : ""}`}
      style={{ backgroundColor: props.backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="card__background"
          style={{ backgroundImage: `url(${props.background})` }}
        ></div>
      )}
      <img className="card__image" src={props.image} alt="" />
      <div className="card__title">{props.title}</div>
      <div className="card__items">{props.items} items</div>
    </div>
  );
};


export default Card