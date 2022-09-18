import React from "react";
import { Link } from "react-router-dom";
import s from "../Landing/LandingStyled.module.css";

export default function Landing() {
  return (
    <div className={s.body}>
      <div className={s.context}>
        <h1>E-Commerce Tech Henry´s</h1>
        <div className={s.button}>
          <button className={s.btn}>Login</button>
          <Link to="/home">  {" "}        
            <button className={s.btn}>Invitado</button>
            
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
    </div>
  );
}
