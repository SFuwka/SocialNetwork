import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://cdn.shopify.com/s/files/1/1158/9490/products/C000010116-PAR-ZOOM_118656dd-d874-4683-969b-91318e06f8be_800x.jpg?v=1520276617"
          alt="pied pipper logo"
        />
      </div>
    </div>
  );
};

export default Header;
