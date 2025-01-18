import React from 'react'
import styles from './assignment.module.css'
import { LuBookOpen } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { FaSwatchbook } from 'react-icons/fa';
export const Assignment = () => {
  return (
    <div className={styles.container}>
    <div className={styles.headingContainer}>
       <div className={styles.heading}>
       <LuBookOpen color='#173744' className={styles.bookIcon} size={55} />
        <h2 >Leading Assignment Writing Services <br/>to Support Your Academic Success!</h2>
        </div>
    </div>
    <div className={styles.paradiv}>
    <div className={styles.para}>
        <div>
          
         <p>Student life comes with endless challenges. From juggling assignments, meeting tight deadlines, and aiming for top grades to managing personal commitments, it’s easy to feel overwhelmed. Falling behind can result in stress and hinder your performance. That&apos;s why having reliable academic support is essential to unleash your creativity and consistently deliver high-quality work.</p>
         </div>
         <div className={styles.assignmentIcon} >
          <FaSwatchbook color='#173744' size={35}/>
       </div>
       
    </div>
  
    <div className={styles.para}>
   <div>
    
    <p>At Assignment Advisor, we empower students worldwide to overcome the hurdles of academic life with our professional and affordable services. Our expert team delivers 100% original assignments helping you achieve your academic goals with ease. What sets us apart is our commitment to quality, research-based writing, and delivering excellence on time, every time.</p>
    </div><div className={styles.assignmentIcon} >
       <GoGoal color='#173744' size={35}/>
       </div>
       
    </div>
    
    
    </div>
    </div>
  )
}
