"use client"
// import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import SlideOutWords from "@/components/slide-text/slide-text";
export default function Home() {
  const words = ['Hello.', 'I am Daniel', 'A Frontend Developer.'];
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      {!showMainContent ? (
        <SlideOutWords 
          words={words} 
          onComplete={() => setShowMainContent(true)} 
        />
      ) : (
        // Your main content here
        <div className={styles.container}> 
          Colossus
        </div>
      )}
    </>
  );
}
