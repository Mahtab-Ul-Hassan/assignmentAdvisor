import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div style={{display:'flex',flexDirection:'row',margin:'10px 0px'}}>
        <img src="/cap.png" className={styles.logo} alt="Logo" />
        <h2 className={styles.name}>
          Assignment <br />
          <span className={styles.advisor}>Advisor</span>
        </h2>
        </div>
        

        <div className={styles.mainHome}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navItemText}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navItemText}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contactUs" className={styles.navItemText}>
              Contact Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/servicesOur" className={styles.navItemText}>
              Our Services
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
