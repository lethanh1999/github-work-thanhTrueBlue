import React from "react";
function Clothes(props){
    console.log(props)
    return(
        
        <div>
            
            <h1>{props.children}</h1>
            <ul><b>Ten:</b>{props.name}</ul>
            <ul><b>Loai:</b>{props.type}</ul>
        </div>
    )
}
export default Clothes;