import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (prop) => {
  const contacts = prop.data;

  return (
    <div>
      {
        contacts.map ((contact,key) => {
          return <Tile contact= {contact} key={key}/>
        })
      }
    </div>
  );
};
