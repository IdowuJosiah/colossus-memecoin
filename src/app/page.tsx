"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import NavigationBar from "@/components/navbar/navbar";
import SlideOutWords from "@/components/slide-text/slide-text";
import BannerImage from '../../public/ai-generated-8644499_1280.jpg'
import './globals.css'
import Footer from "@/components/footer/footer";
import MemeOne from '../../public/WhatsApp Image 2024-10-29 at 20.37.29.jpeg'
import MemeTwo from '../../public/WhatsApp Image 2024-10-29 at 20.37.30.jpeg'
import MemeThree from '../../public/WhatsApp Image 2024-10-29 at 20.37.31.jpeg'
import MemeFour from '../../public/GbBlc37XwAAkYvB.jpeg'
import MemeFive from '../../public/GbBmEIKWIAAdwUx.jpeg'
import MemeSix from '../../public/GbEioERbQAAEH3P.jpeg'
import Steps from "@/components/steps/steps";

export default function Home() {
  const words = ['Hello there', ' Colossus Welcomes you', 'To the future'];
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
          <div className={styles.banner__section} id="home">
            <Image className={styles.banner__image} src={BannerImage} alt=''/>
            <div className={styles.banner__section__overlay}>
              <p>Hi there DeGEN</p>
              <p className={styles.ma}>It&apos;s COLOSSUS. Talking to you from the FUTURE</p>
              <span>Let&apos;s create your own technological adventure.</span>

              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a href="https://jup.ag/swap/SOL-8SuMAjoZeLGaaekNHP235Dv4soXsrcseFXefT3A9pump">Buy Now</a> </button>
                <button className={styles.get__button}> <a href="https://dexscreener.com/solana/8wgy9ke3yatcvoiw4engaxvukpqr2pmvhzcmyzavlbke">Get on Dex</a></button>
              </div>
            </div>
          </div>

          <div className={styles.about__section} id="about">
            <header>Discover the Power of the Colossus The Great</header>
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

          <div className={styles.meme__gallery} id="gallery">
            <div className={styles.meme}>
              <Image src={MemeOne} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeTwo} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeThree} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeFour} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeFive} alt="#"/>
             </div>

             <div className={styles.meme}>
              <Image src={MemeSix} alt="#"/>
             </div>
             

          </div>

          <Steps/>

          <Footer/>
        </div>

   
      )}
    </>
  );
}
