import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import NavItem from "./NavItem";
import arrow from "../../assets/images/arrow.svg";
import menu from "../../assets/images/menu.svg";
import platepal from "../../assets/images/platepal.svg";
import heart from "../../assets/images/heart.svg";
import home from "../../assets/images/home.svg";
import person from "../../assets/images/person.svg";
import bookmark from "../../assets/images/bookmark.svg";
import heartFilled from "../../assets/images/heart_filled.svg";
import homeFilled from "../../assets/images/home_filled.svg";
import personFilled from "../../assets/images/person_filled.svg";
import bookmarkFilled from "../../assets/images/bookmark_filled.svg";
import path from "../../constant/routes";
import AdjustOptions from "../AdjustOptions/AdjustOptions";

const Navbar = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  const checkPage = (page) => {
    if (props.fill === page) {
      if (page === "home") return homeFilled;
      if (page === "heart") return heartFilled;
      if (page === "bookmark") return bookmarkFilled;
      if (page === "person") return personFilled;
    }
  };

  return (
    <div>
      {showFilter && (
        <div className={styles.modal} onClick={() => setShowFilter(false)}>
          <AdjustOptions />
        </div>
      )}
      <div className={styles.topNavContainer}>
        <NavItem image={arrow} route="back" />
        <NavItem image={platepal} route={path.login} />
        <input
          type="image"
          className={styles.navButton}
          src={menu}
          onClick={() => {
            setShowFilter(true);
          }}
          alt={"nav tab"}
        />
      </div>
      <div className={styles.bottomNavContainer}>
        <NavItem image={checkPage("home") || home} route={path.main} />
        <NavItem image={checkPage("heart") || heart} route={path.saved} />
        <NavItem image={checkPage("bookmark") || bookmark} route={path.today} />
        <NavItem image={checkPage("person") || person} route={path.profile} />
      </div>
    </div>
  );
};

export default Navbar;
