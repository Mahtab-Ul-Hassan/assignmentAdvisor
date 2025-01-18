import React from 'react';
import { MdFreeCancellation, MdOutlineAssignment, MdSupportAgent } from 'react-icons/md';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { MdOutlinePriceChange } from 'react-icons/md';
import styles from './page.module.css';
import { Assignment } from '@/components/assignment/Assignment';
import Footer from '@/components/footer/Footer';
import Benefits from '@/components/benefits/Benefits';
import Navbar from '@/components/navbar/Navbar';
import { FaWhatsapp } from 'react-icons/fa';

const page = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.homeContainer}>
          <div className={styles.upperhomeContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.mainHeading}>
                <h2>Empowering students with reliable academic assistance crafted for success and peace of mind.</h2>
              </div>
              <p className={styles.p}>Our services are available worldwide.</p>
            </div>
            <div className={styles.rightContainer}></div>
          </div>
          <div className={styles.lowerhomeContainer}> 
              <div className={styles.icon}> 
              <MdFreeCancellation size={40} />
              <h5  >100% Plagiarism Free  </h5>
              </div>
              <div className={styles.icon}>
              <AiOutlineDeliveredProcedure size={40} />
              <h5>Timely Delivered</h5>
              </div>
              <div className={styles.icon} >
              <MdOutlinePriceChange size={40} />
              <h5>Friendly Price</h5>
              </div>
              <div className={styles.icon}>
              <MdSupportAgent size={40}/>
              <h5>24/7 Customer Support</h5>
              </div>
              <div className={styles.icon}>
              <MdOutlineAssignment size={40}/>
              <h5 >Expert Writers</h5> 
              
            </div>
          </div>
        </div>
      </div>
      <div className={styles.assignments}>
        <Assignment />
      </div>
      <div className={styles.benefits}>
        <Benefits />
      </div>
      <div className={styles.footer}>
        <Footer />
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

export default page;
