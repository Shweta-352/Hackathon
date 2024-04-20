import React from "react";
import Insertblog from "../Components/Insertblog";
import Header from "../Components/Header";

function createblog(){
    return(
        <div>            
        <div>
            <Header/>
        </div>
        <div>
            <Insertblog/>
        </div>
        </div>
        
    );
}

export default createblog