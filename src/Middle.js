import React from 'react'
import { AiFillFacebook} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa";
function Middle() {
    return (
      <>
          <div className="container" style={{margin:"3%"}} id="container">
            <div className="container" id="book">
            </div>
            <div className="container">
                <div className="container" id="box">
                    <h1 style={{color:"blue"}}>LOREM IPSUM</h1>
                    <h3 style={{color:"black",fontSize:"20px"}}>Lorem Ipsum dolor sit amet</h3>
                    <p style={{color:"grey"}}>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua.</p>
                </div>
                <div className="container" style={{alignItems:"center", textAlign:"center",marginleft:"-20px",marginTop:"2%"}}>
                    <div className="row">
                        <div className="col">
                         <AiFillFacebook style={{height:"30px",width:"30px"}}/>
                        </div>
                        <div className="col">
                         <AiOutlineTwitter  style={{height:"30px",width:"30px"}}/>
                        </div>
                        <div className="col" >
                        <AiOutlineInstagram  style={{height:"30px",width:"30px"}} />
                        </div>
                        <div className="col" >
                        <FaLinkedin  style={{height:"30px",width:"30px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      </>
    )
}

export default Middle
