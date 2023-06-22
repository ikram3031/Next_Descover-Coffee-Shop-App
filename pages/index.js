import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

import Banner from '../components/banner';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    // handleTrackLocation();
  };
  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>        
        <Banner
          buttonText = "View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image 
            src="/static/hero-image.png" 
            width={700}
            height={400}
          />
        </div>
        
      </main>
    </>
  )
}
