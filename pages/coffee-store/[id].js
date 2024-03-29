import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/coffee-store.module.css'
import Image from "next/image";
import cls from "classnames";
import Places from "../../public/static/icons/places.svg"
import Neighbourhood from "../../public/static/icons/nearMe.svg"
import Star from "../../public/static/icons/star.svg"
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { useContext, useState, useEffect } from "react";
import { isEmpty } from "@/utils";
import { ACTION_TYPES, StoreContext } from "@/store/store-context";

export async function getStaticProps(staticProps){
  const params = staticProps.params;

  const coffeeStores = await fetchCoffeeStores();
  console.log('static coffeeStores', coffeeStores)
  const findCoffeeStoreById = coffeeStores.find(CoffeeStore => {
    return CoffeeStore.id.toString() === params.id
  })
  console.log('findCoffeeStoreById',findCoffeeStoreById)
  return {
    props:{
      coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {}
    }
  }
}

export async function getStaticPaths(){
  const coffeeStores = await fetchCoffeeStores();
  console.log('static path coffeeStores', coffeeStores)
  const paths = coffeeStores.map(coffeeStore => {
    return {
      params: {
        id: coffeeStore.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: true
  }
}

const CoffeeStore = (initialProps) => {
  const router = useRouter()

  if(router.isFallback){
    return <div>Loading...</div>
  }

  const id = router.query.id;

  const [coffeeStore, setCoffeeStore] = useState(initialProps.coffeeStore)

  const {
    state:{
      coffeeStores
    }
  } = useContext(StoreContext)

  const handleCreateCoffeeStore = async () => {
    try{
      const data ={
        id, 
        name, 
        neighbourhood, 
        address, 
        imgUrl, 
        voting
      }
      const response = await fetch('api/createCoffeeStore', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
    } catch(error){
      console.error('Error creating coffeestore')
    }
  }

  useEffect(() => {
console.log(initialProps)
    if(isEmpty(initialProps.coffeeStore)){
      if(coffeeStore.length > 0){
        const findCoffeeStoreById = coffeeStores.find(CoffeeStore => {
          return CoffeeStore.id.toString() === id
        })
        setCoffeeStore(findCoffeeStoreById)
      }
    }
  }, [id]);  

  console.log('coffeeStore',coffeeStore)

  const { address , name, neighbourhood, imgUrl } = coffeeStore;

  const handleUpvoteButton = () => {
    console.log('Handle Upvote')
  }

  return (
    <div className={styles.layout}>      
      <Head><title>{name}</title></Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">← Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass",styles.col2)}>
          {address && (
          <div className={styles.iconWrapper}>
              <Image src="/static/icons/places.svg" width="24" height="24" />
              <p className={styles.text}>{address}</p>
            </div>   
          )}
          {neighbourhood && (
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/nearMe.svg" width="24" height="24" />
              <p className={styles.text}>{neighbourhood}</p>
            </div>
          )}
          <div className={styles.iconWrapper}>
            <Image src={Star} width="24" height="24" />
            <p className={styles.text}>1</p>
          </div>

          <button
            className={styles.upvoteButton} 
            onClick={handleUpvoteButton()}
          > Up Vote!
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeStore;