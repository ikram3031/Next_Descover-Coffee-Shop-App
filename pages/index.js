import { useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

import Banner from '../components/banner';
import Card from '../components/card';

import { fetchCoffeeStores} from '@/lib/coffee-stores';
import useTrackLocation from '@/hooks/use-track-location';

export async function getStaticProps(context) {
  // API call
  const coffeeStores = await fetchCoffeeStores();
  return{
    props:{
      coffeeStores,
    }
  }
}

export default function Home(props) {

  const {
    latLong,
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation,
  } = useTrackLocation()

  console.log({latLong, locationErrorMsg})

  useEffect(() => {
    if (latLong) {
      const fetchCoffeeStoresData = async () => {
        try {
          const fetchCoffeeStoresResult = await fetchCoffeeStores(latLong);
          console.log({ fetchCoffeeStoresResult });
        } catch (error) {
          console.log('error', error);
        }
      };

      fetchCoffeeStoresData();
    }

    // Clean up the location tracking resources when the component unmounts
    return () => {
      destroy(); // Call the destroy function to clean up the effect
    };
  }, [latLong, destroy]);

  const handleOnBannerBtnClick = () => {
    handleTrackLocation();
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
          buttonText = { isFindingLocation ? "Locating" : "View stores nearby" }
          handleOnClick={handleOnBannerBtnClick}
        />
        {locationErrorMsg && <p>Something went wrong: {locationErrorMsg}</p>}
        <div className={styles.heroImage}>
          <Image 
            src="/static/hero-image.png" 
            width={700}
            height={400}
          />
        </div>
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Mugda Stores</h2>
          
            <div className={styles.cardLayout}>
              {
                props.coffeeStores.map(coffeeStore => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                      href={`/coffee-store/${coffeeStore.id}`}
                      className={styles.card}
                    />
                  )
                })
              }
            </div>
          </>
        )}      
     
      </main>
    </>
  )
}
