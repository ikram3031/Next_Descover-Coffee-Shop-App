import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

import Banner from '../components/banner';
import Card from '../components/card';

import { fetchCoffeeStores} from '@/lib/coffee-stores';
import useTrackLocation from '@/hooks/use-track-location';
import { ACTION_TYPES, StoreContext } from "@/store/store-context";

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
    handleTrackLocation, locationErrorMsg, isFindingLocation,
  } = useTrackLocation()

  // const [ coffeeStores, setCoffeeStores ] = useState([]);
  const [ coffeeStoresError, setCoffeeStoresError ] = useState(null);

  const { dispatch , state } = useContext(StoreContext)

  const { coffeeStores, latLong } = state

  console.log('state',state)

  useEffect(() => {
    // making useEffect async brings an error. thats wy const fetchData block is used to use async
    const fetchData = async () => {
      if (latLong) {
        try {
          const response = await fetch(`/api/getCoffeeStoresByLocation?latLong=${latLong}&limit=30`);
          const coffeeStores = await response.json()
          dispatch({
            type: ACTION_TYPES.SET_COFFEE_STORES,
            payload: {
              coffeeStores,
            },
          });
          setCoffeeStoresError('')
        } catch (error) {
          console.log('error', error);
          setCoffeeStoresError(error.message);
        }
      }
    };
  
    fetchData();
  }, [latLong]);

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

        {/* error messages */}
        {locationErrorMsg && <p>Something went wrong: {locationErrorMsg}</p>}
        {coffeeStoresError && <p>Something went wrong: {coffeeStoresError}</p>}
        <div className={styles.heroImage}>
          <Image 
            src="/static/hero-image.png" 
            width={700}
            height={400}
          />
        </div>

        {coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Stores Near Me</h2>
          
            <div className={styles.cardLayout}>
              {
                coffeeStores.map(coffeeStore => {
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
