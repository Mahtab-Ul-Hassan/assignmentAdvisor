import React from 'react'
import styles from './about.module.css'
import Navbar from '@/components/navbar/Navbar'
import { FaWhatsapp } from 'react-icons/fa'
const page = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar/>
      <div className={styles.about}>
        <div className={styles.upper}>
           <div className={styles.left}>
               <h2 className={styles.heading}>About Us</h2>
               <p className={styles.paragraph}>
            At Assignment Advisor, we are dedicated to empowering students at every academic level—whether you&apos;re pursuing a bachelor&apos;s, master&apos;s, or PhD. Our mission is to simplify your academic journey with expertly crafted assignments, theses, dissertations, and more, tailored to meet your unique requirements.

            Our team comprises highly skilled writers and editors with expertise across diverse fields, ensuring that every piece of work we deliver exceeds expectations. With a steadfast commitment to quality, we focus on providing you with original, meticulously researched content that stands out for its precision and professionalism.

            We understand the pressures of academic life—tight deadlines, demanding workloads, and high expectations. That’s why we’re here 24/7 to provide reliable support, no matter your time zone. From conceptualization to the final draft, our dedicated experts ensure your success is our top priority.

            Choose Assignment Advisor—your trusted partner in academic excellence.
            </p>
           </div>
           <div className={styles.right}>
              <img src='https://images.unsplash.com/photo-1518463892881-d587bf2c296a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className={styles.image}></img>
           </div>
        </div>
        <div className={styles.lower}>
        
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
    
  )
}

export default page