import { useState } from "react"

interface ICardProps {
  image: string;
  title: string;
  items: number;
  background: string;
  backgroundColor: string
}

// const Card = (props: ICardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         border: "1px solid orange",
//         width: "230px",
//         height: isHovered ? "195px" : "175px",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: "8px",
//         position: "relative",
//         overflow: "hidden",
//         transition: "height 0.3s ease",
//         backgroundColor: props.backgroundColor
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {isHovered && (
//         <div
//           style={{
//             backgroundImage: `url(${props.background})`,
//             backgroundSize: "contain",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             opacity: "0.15",
//             zIndex: 1,
//           }}
//         ></div>
//       )}
//       <img src={props.image} alt="" style={{ width: "47px", height: "52px", zIndex: 1 }} />
//       <div style={{ marginTop: "20px", zIndex: 1, fontSize: "16px", fontWeight: "500" }}>{props.title}</div>
//       <div style={{ zIndex: 1, fontSize: "14px" }}>{props.items} items</div>
//     </div>
//   );
// };

const Card = (props: ICardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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