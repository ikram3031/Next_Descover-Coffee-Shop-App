import { table, getMinifiedRecords } from '../../lib/airtable';

const createCoffeeStore = async (req,res) => {

    try{
        if(req.method === "POST"){

            const { id, name, neighbourhood, address, imgUrl, voting } = req.body;

            // finding store
            const findCoffeeStoreRecords = await table
                .select({
                    // filterByFormula: `id="59f784dd28122f14f9d5d63d"`,
                    filterByFormula: `id="9"`,
                })
                .firstPage();
    
            if(id){
                if(findCoffeeStoreRecords.length !== 0){
                    // find from array
                    const records = getMinifiedRecords(findCoffeeStoreRecords)
                    
                    res.json(records)
                } else{
    
                    if(name){
                        const createRecords = await table.create([
                            {
                              fields: {
                                id,
                                name,
                                address,
                                neighbourhood,
                                voting,
                                imgUrl
                              },
                            },
                        ]);
                  
                        const records = getMinifiedRecords(createRecords)
    
                        res.json(records);
                    } else{
                        res.status(400).json({message: "Name is missing"})
                    }               
                      
                }
            } else{
                res.status(400).json({message: "Id is missing"})
            }
            res.status(200)
        }
    } catch(err){
        console.error('Error creating or finding the store')
        res.json({message: 'Error creating or finding the store', err}).status(500)
    }
}

export default createCoffeeStore 