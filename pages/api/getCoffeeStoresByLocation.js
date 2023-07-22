import { fetchCoffeeStores } from "@/lib/coffee-stores"

const getCoffeeStoresByLocation = async (req, res) => {
    // configure response and limit

    try{
        const {latLong, limit} = req.query;

        const response = await fetchCoffeeStores(latLong, limit)
        res.status(200).json(response)
    } catch(error){
        console.log('There is an error:', error)
        res.status(500).json({ message: 'Something went wrong'})
    }
    //return
}

export default getCoffeeStoresByLocation