"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import NavigationBar from "@/components/navbar/navbar";
import SlideOutWords from "@/components/slide-text/slide-text";
import BannerImage from '../../public/ai-generated-8644499_1280.jpg'
import './globals.css'
import Footer from "@/components/footer/footer";

export default function Home() {
  const words = ['Hello there', 'Welcome to Colossus', 'Your go to verified memecoin'];
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent ? (
        <SlideOutWords 
          words={words} 
          onComplete={() => setShowMainContent(true)} 
        />
      ) : (

        <div className={styles.container}> 
          <NavigationBar/>
          <div className={styles.banner__section}>
            <Image className={styles.banner__image} src={BannerImage} alt=''/>
            <div className={styles.banner__section__overlay}>
              <p>Hi there DeGEN</p>
              <p className={styles.ma}>It's Pre Rich. Talking to you from the FUTURE</p>
              <span>Let's create your own cinematic adventure.</span>

              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}>Buy Now</button>
                <button className={styles.get__button}>Get on Dex</button>
              </div>
            </div>
          </div>

          <div className={styles.about__section}>
            <header>Discover the Power of the Colossus Memecoin</header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste esse eius quam,
               expedita fugiat suscipit et unde hic voluptas non officia quidem obcaecati veritatis. 
               Aperiam illo expedita dolore ratione.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste esse eius quam,
               expedita fugiat suscipit et unde hic voluptas non officia quidem obcaecati veritatis. 
               Aperiam illo expedita dolore ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste esse eius quam,
               expedita fugiat suscipit et unde hic voluptas non officia quidem obcaecati veritatis. 
               Aperiam illo expedita dolore ratione.
            </p>
          </div>

          <Footer/>
        </div>

   
      )}
    </>
  );
}
