import React from 'react';
import styles from './servicesOur.module.css';
import Navbar from '@/components/navbar/Navbar';
import { FaWhatsapp } from 'react-icons/fa';

const ServicesOur = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.services}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <h3>Assignment Writing</h3>
            <p>Get plagiarism-free, customized assignments with proper formatting and on-time delivery. Affordable and reliable for all subjects.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Dissertation Writing</h3>
            <p>Expert guidance for original dissertations, covering research, writing, and formatting. Achieve excellence with professional support.  
            </p>
          </div>
          <div className={styles.box}>
            <h3>Thesis Writing</h3>
            <p>Well-researched, structured theses with expert assistance in all methodologies. Timely delivery and guaranteed originality.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Online Quiz </h3>
            <p>Accurate and fast solutions for all your quizzes, ensuring top results. Reliable and stress-free service.

          </p>
          </div>
          <div className={styles.box}>
            <h3>Essay Writing</h3>
            <p>Crafted essays tailored to your needs, with engaging content and perfect grammar. Quick, affordable, and top-quality.
            </p>
          </div>
          <div className={styles.box}>
            <h3>
            Presentation Preparation</h3>
            <p>Professional slides with impactful visuals and clear structuring. Designed to impress and deliver on time.</p>
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

export default ServicesOur;
