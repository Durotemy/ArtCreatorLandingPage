import React from "react";
import style from "./NavBar.module.css";
import { navLinks } from "../constants/index";

const NavBar = () => {
  return (
    <div className={style.navbar}>
      {/* <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcircle-logo&psig=AOvVaw2kKIhHGegFqikloDcl9bhx&ust=1668175636213000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCID3udzko_sCFQAAAAAdAAAAABAn"} alt="icon" /> */}
      <p className={style.logo}>Logo</p>
      <div class={style.links}>
        {navLinks.map((item, index) => {
          return (
              <ul className={style.navbar__links}>
                <li key={index}>
                  <a className={style.link} href={item.link}>{item.title}</a>
                </li>
              </ul>
          );
        })}
        <button className={style.button}>Connect</button>
      </div>
    </div>
  );
};
export default NavBar;
