import React from "react";

export const Tile = (props) => {
  const tile = props.contact;
  const tileArray = Object.values(tile);
  const key=props.key;

  return (
    <div className="tile-container">
      { 

        tileArray.map((value,ikey) => {
          if(ikey === 0){
            return <p className="Tile-title" key={key}>{value}</p>
          }else{
            return <p className="tile" key={key}>{value}</p>
          }
        })
      }
    </div>
  );
};
