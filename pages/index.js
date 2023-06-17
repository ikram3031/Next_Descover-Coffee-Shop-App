import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Banner from '../components/banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cofee Locator</title>        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        
        <Banner/>
      </main>
    </>
  )
}
