import starFull from "../assets/starFull.svg"
import starEmpty from "../assets/starEmpty.svg"
import { useState } from "react"

interface ICardMenuProps {
  image: string;
  title: string;
  category: string;
  stars: number;
  background: string;
  backgroundColor: string

}
const CardMenu = (props: ICardMenuProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`card-menu ${isHovered ? "card-menu--hovered" : ""}`}
      style={{ backgroundColor: props.backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="card-menu__background"
          style={{ backgroundImage: `url(${props.background})` }}
        ></div>
      )}
      <img
        className="card-menu__image"
        src={props.image}
        alt=""
      />
      <div className="card-menu__title">{props.title}</div>
      <div className="card-menu__category">{props.category}</div>
      <div className="card-menu__stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src={index < props.stars ? starFull : starEmpty}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};


export default CardMenu