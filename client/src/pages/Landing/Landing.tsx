import { BottomNavigation } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import s from "../Landing/LandingStyled.module.css";

// import Bot from "../../..";


export default function Landing() {
  return (

    
    <div className={s.body}>
      <div className={s.context}>
     
        <h1>CompuStore</h1>


        <div className={s.button}>
          {/* <button className={s.btn}>Login</button> */}
          <Link to="/home">  {" "}        
            <button className={s.btn}>ENTRAR</button>
            
          </Link>
        </div>
      </div>

      <div className={s.area}>
        <ul className={s.circles}>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
          <li className={s.circles_li}></li>
        </ul>
        
      </div>
      <div >
        <video
        className={s.video}
          // id="intro"
          src="https://res.cloudinary.com/carina-bosio/video/upload/v1663865600/20220922_112400_online-video-cutter.com_1_cuysmn.mp4"
          // width="200"
          // height="59"
          autoPlay
          loop
          muted
          // top="10px"
          // className="d-inline-block align-top"
          // alt=""
          // poster={Poster}
        />
      </div>
      <img src="https://res.cloudinary.com/carina-bosio/image/upload/v1663801881/Logo-mobile_zuwpxx.png"  
                    alt="flag"
                 

                    className={s.img}
                  />


  
     
    </div>
  );
}
