"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import NavigationBar from "@/components/navbar/navbar";
import BannerImage from '../../public/ai-generated-8644499_1280.jpg'
import './globals.css'
import Footer from "@/components/footer/footer";
import MemeOne from '../../public/WhatsApp Image 2024-10-29 at 20.37.29.jpeg'
import MemeTwo from '../../public/WhatsApp Image 2024-10-29 at 20.37.30.jpeg'
import MemeThree from '../../public/GbEioERbQAAEH3P.jpeg'
import MemeFour from '../../public/photo_2024-10-31 22.30.55.jpeg'
import MemeFive from '../../public/WhatsApp Image 2024-10-29 at 20.37.31.jpeg'
import MemeSix from '../../public/photo_2024-10-31 22.31.01.jpeg'
import Steps from "@/components/steps/steps";

export default function Home() {

  return (
    <>
    

        <div className={styles.container}> 
          <NavigationBar/>
          <div className={styles.banner__section} id="home">
            <Image className={styles.banner__image} src={BannerImage} alt=''/>
            <div className={styles.banner__section__overlay}>
              <p>Hi there DeGEN</p>
              <p className={styles.ma}>It&apos;s COLOSSUS. Talking to you from the FUTURE</p>
              <span>Let&apos;s create your own technological adventure.</span>

              <div className={styles.cta__buttons}>
                <button className={styles.buy__button}><a style={{textDecoration:"none", color:"inherit"}} href="https://jup.ag/swap/SOL-8SuMAjoZeLGaaekNHP235Dv4soXsrcseFXefT3A9pump">Buy Now</a> </button>
                <button className={styles.get__button}> <a style={{textDecoration:"none", color:"inherit"}} href="https://dexscreener.com/solana/8wgy9ke3yatcvoiw4engaxvukpqr2pmvhzcmyzavlbke">Get on Dex</a></button>
              </div>
            </div>
          </div>

          <div className={styles.about__section} id="about">
            <header>Discover the Power of the Colossus The Great</header>
          
          <b>About Colossus</b>
            <p>

              This is more than just a token - it&apos;s a community takeover and celebration of cutting-edge AI technology. Inspired by the massive Colossus supercomputer that Elon Musk himself has proclaimed as the most powerful training system in the world, our token brings the essence of AI innovation to the blockchain.
              </p>
             
              <b>Strategic Context</b>
              <p>
             
              As Gilad Shainer from NVIDIA notes, AI is becoming mission-critical and requires increased performance, security, scalability and cost-efficiency. Our Colossus token aims to capture this transformative moment in technological evolution.
          
              </p>

              <b>Vision and Potential</b>
              <p>
 
              By bridging the world of advanced AI infrastructure with decentralized community engagement, Colossus token represents a unique intersection of technological innovation and collective ambition.
              Born from the community&apos;s vision and inspired by xAIs groundbreaking Colossus supercomputer, our Colossus token represents a decentralized homage to the most powerful AI training system in the world.
              </p>
           
          
            
            <b>Technological Inspiration</b>
            <p>
   
              Colossus token draws its name and spirit from xAIs revolutionary AI infrastructure - the world&apos;s largest AI supercomputer dedicated to powering advanced language models. Just as the original Colossus comprises an impressive array of 200,000 NVIDIA Hopper GPUs, our token embodies the community&apos;s collective computational spirit.
              Community-Driven Initiative
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


    </>
  );
}
