import React from 'react'
import Profile from "./Profile";
function Blue() {
    return (
        <div className="container" id="blue">
            <h1 style={{color:"white",textAlign:"center"}}>Featured Writers</h1>
            <div class="container" style={{display:"flex",flexDirection:"row",justifyContent:"spaceAround",flexWrap:"wrap"}} id="flex-container">
                        <Profile title="Peter Thel" image="/Person1.png" /> 
                        <Profile title="Jonn Bay" image="/Person2.png" />
                        <Profile title="Patrick Lewis" image="/Person3.png" />
                        <Profile title="Tiger Hoods" image="/Person4.png" />
                       <Profile title="Natasha Rae" image="/Person5.png" />
                        <Profile title="Aletta Rain" image="/Person6.png" />
                         <Profile title="Sophia Lewis" image="/Person7.png" />
                          <Profile title="Mandy Rose" image="/Person8.png" />
            </div>
        </div>
    )
}

export default Blue 
