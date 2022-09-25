import React from "react";
function List({list}){
return(
  <div  className="listt">
    <h3>{` ${list.name} is offering a tip of ${list.percentage}`}</h3>
  </div>
)
}
export default  List;