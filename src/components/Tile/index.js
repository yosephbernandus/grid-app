import * as React from 'react'; 
import { string, number, func } from 'prop-types'; 

import './style.css'; 

export default function Tile({color, id, onDoubleClick}){  
   return (
     <div className="tile" style={{backgroundColor: color, cursor: "pointer"}} onDoubleClick={onDoubleClick}/>
   )
}

Tile.defaultProps = {
   color: 'gray'
}

Tile.propTypes = {
   color: string,  
   id: number.isRequired,
   onDoubleClick: func.isRequired
}