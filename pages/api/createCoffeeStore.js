const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}).base(
    process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY
);

const table = base('Coffee Stores')

const createCoffeeStore = (req,res) => {
    res.json({message: 'hi'})
}

export default createCoffeeStore 