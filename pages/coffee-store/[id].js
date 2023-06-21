import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter()
  return (
    <div>      
      coffee-store {router.query.id}
      <Link href="/">
        Back to Store
      </Link>
      </div>
  )
}

export default CoffeeStore;