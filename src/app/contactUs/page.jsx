import React from 'react';
import styles from './contactUs.module.css';
import Navbar from '@/components/navbar/Navbar';
import { CiInstagram } from "react-icons/ci";
import { FaPhone, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineMarkEmailRead } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.contactUs}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Please reach out to us if you have any questions regarding assignments, dissertation, or presentation.
        </p>
        <div className={styles.boxes}>
          
          <div className={styles.contactBox}>
         
            <FaPhone className={styles.contactIcon} />
            <h2 className={styles.contactTitle}>Phone</h2>
            <p className={styles.contactDetails}>
              <FaWhatsapp /> +92 320 9794089 - <br></br> <a href="https://wa.me/message/NVQA3HVT2FL6K1">WhatsApp Link</a>
              <br />
              <FaWhatsapp /> +44 7857 132462 - <br></br> <a href="https://wa.me/+447857132462">WhatsApp Link</a>
            </p>
            <button className={styles.contactButton}>Call Us</button>
          </div>

         
          <div className={styles.contactBox}>
          <div>
          <MdOutlineEmail className={styles.contactIcon} />
          <h2 className={styles.contactTitle}>Email</h2>
          <p className={styles.contactDetails}>
              <MdOutlineMarkEmailRead /> academicassistant77@gmail.com
            </p>
       

           

            </div>
         
            <button className={styles.contactButton}>Send Email</button>
          </div>

         
          <div className={styles.contactBox}>
            <IoShareSocialOutline className={styles.contactIcon} />
            <h2 className={styles.contactTitle}>Social Media</h2>
            <p className={styles.contactDetails}>
              <FaFacebookF /> Assignment Advisor -{" "}
              <br></br>
              <a href="https://www.facebook.com/profile.php?id=61565903766370&mibextid=ZbWKwL">Facebook Link</a>
              <br />
              <CiInstagram /> assignmentadvisor089 -{" "}
              <a href="https://www.instagram.com/assignmentadvisor089/profilecard/?igsh=bHJkeWtrNXp0azBp">Instagram Link</a>
            </p>
            <button className={styles.contactButton}>Follow Us</button>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/message/NVQA3HVT2FL6K1" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactUs;
