import React, { useState } from "react";
import "./RowItem.css";

function RowItem({ movie, handleClick, isLargeRow, base_url }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="row-item-div"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        key={movie.id}
        onClick={() => handleClick(movie)}
        className={`row-poster ${isLargeRow && "row-posterLarge"}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        loading="lazy"
        alt={movie.name}
      />
      {isHovered && (
        <div className="row-hover-desc">
          <h3> {movie.title || movie.name} </h3>
        </div>
      )}
    </div>
  );
}

export default RowItem;
