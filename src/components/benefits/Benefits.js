import React from 'react';
import styles from './benefits.module.css';

const Features = () => {
  return (
    <div className={styles.container}>  
      <div className={styles.headingContainer}>
       <div className={styles.heading}>
        <h2 >Benefits of Choosing Our <br></br> Assignment Writing Services</h2>
        </div>
    </div>
    <div className={styles.paradiv}>
      <div className={styles.left}>
    <div className={styles.para}>
        <div>
          <div >


          <img className={styles.imageContainer} src='https://as1.ftcdn.net/v2/jpg/00/84/78/28/1000_F_84782836_Ve5462rGRdfF8l54uySIq9tuZmZDtI1F.jpg'></img>
          </div>
          <h3>We Prioritize You</h3>
         <p>Our services are designed with your success in mind. We focus on enhancing your academic performance, not just our reputation. Every project we deliver undergoes meticulous proofreading and quality checks by our expert team. With the ability to cover a broad range of subjects and formats.</p>
         </div>
    </div>
    <div className={styles.para}>
        <div>
          <img className={styles.imageContainer} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJnm7q7RkUUfYnj7zPXZLiTcIIVYZoINkwg&s'></img>
          <h3>Tailored Academic Support</h3>
         <p>We don’t rely on generic templates. Each assignment is uniquely crafted to align with your specific instructions and academic goals. Our expert team matches your project with specialists in the relevant field, ensuring every assignment is customized to perfection.</p>
         </div>
    </div>
    </div>
    <div className={styles.right}>
    <div className={styles.para}>
        <div>
          <img className={styles.imageContainer} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekcM4io5baoJffzjqhswNz0nDG25emO6OAQ&s'></img>
          <h3> Unlimited Revisions for Your Satisfaction</h3>
         <p>We value your satisfaction above all else. That’s why we provide unlimited revision opportunities to fine-tune your project according to your feedback. Our dedicated support team works tirelessly to exceed your expectations and ensure you are delighted with the final result.</p>
         </div>
    </div>  
    <div className={styles.para}>
        <div>
          <img  className={styles.imageContainer}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyRP1YPRqCHFV8_21fqQcUuHM4iw2QPrGUQ&s'></img>
          <h3>Excellence in Every Submission</h3>
         <p>We are committed to delivering assignments that exceed your expectations. Our team of experienced professionals ensures that each project is not only original and well-researched but also formatted and structured to match your institution’s standards. With timely delivery and plagiarism-free content, achieve academic excellence.</p>
         </div>
   
    </div>
    </div>
    </div>
    </div>
  );
};

export default Features;
