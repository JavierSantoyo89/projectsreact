// import { Link } from "react-router-dom";
import style from "./EventItem.module.css";
// import hearthFilled from "../../../../assets/hearth-filled.png";
import hearthFilled from "@assets/ticketmasterpirate/hearth-filled.png"
import hearthUnfilled from "@assets/ticketmasterpirate/hearth-unfilled.png";
import useLikeEvents from "@hooks/useLiveEvents";
import React from "react";


//***********************  EventItem  *********************/
//*********************/  EventItem component  *********************/
// eslint-disable-next-line react/prop-types
interface EventItemProps 
  { info: string, 
    id : string, 
    name: string, 
    image?: string, 
    onEventClick: (id:string) => void
}

function EventItem({ info, id, name, image, onEventClick }: EventItemProps) {
  const { isEventLiked, toggleEventLike } = useLikeEvents(id);
console.log('el id es en EventItem: '+ id);

  const handleSeeMoreClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onEventClick(id);
  };

  const handleHearthClick = () => {
    toggleEventLike();
  };
  return (
    <div className={style.eventItemContainer}>
      <div className={style.imageContainer}>
        <img
          src={isEventLiked ? hearthFilled : hearthUnfilled}
          onClick={handleHearthClick}
          alt="Hearth booton"
          className={style.hearthImage}
        />
        <img src={image} alt={name} width={200} height={200}></img>
      </div>
      <div className={style.eventItemInfoContainer}>
        <h4 className={style.eventName}>{name}</h4>
        <p className={style.eventInfo}>{info}</p>
        <button
          onClick={handleSeeMoreClick}
          // className={style.seeMoreBtn}
          className={style.button}
        >
          {/* <Link to={`/detail/${id}`}>Ver mas</Link> */}
          <span>Ver mas</span>
        </button>
      </div>
    </div>
  );
}

export default EventItem;
