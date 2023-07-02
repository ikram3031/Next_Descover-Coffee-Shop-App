import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import coffeeStoresData from '../../data/coffee-stores.json'
import styles from '../../styles/coffee-store.module.css'
import Image from "next/image";
import cls from "classnames";

export function getStaticProps(staticProps){
  const params = staticProps.params;
  return {
    props:{
      coffeeStore: coffeeStoresData.find(CoffeeStore => {
        return CoffeeStore.id.toString() === params.id
      })
    }
  }
}

export function getStaticPaths(){
  const paths = coffeeStoresData.map(coffeeStore => {
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

const CoffeeStore = (props) => {
  const router = useRouter()

  if(router.isFallback){
    return <div>Loading...</div>
  }

  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

  return (
    <div className={styles.layout}>      
      <Head><title>{name}</title></Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              Back to Home
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image 
            src={imgUrl}
            width={600}
            height={300}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass",styles.col2)}>
          <p>{address}</p>
          <p>{neighbourhood}</p>
        </div>
        </div>
    </div>
  )
}

export default CoffeeStore;