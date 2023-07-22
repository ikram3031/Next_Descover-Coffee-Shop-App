import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});


const getUrlForCoffeeStores = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
}

const getListOfCoffeeStorePhoto = async ( ) => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 40,
    color: 'green',
    orientation: 'portrait',
  });

  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls["small"]);
}

export const fetchCoffeeStores = async (
    latLong = '23.72891800742518%2C90.43325302297949',
    limit = 6
  ) => {

  const photos = await getListOfCoffeeStorePhoto ();
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
    }
  };
  
  const response = await fetch(getUrlForCoffeeStores(latLong,"coffee", limit), options).catch(e => console.log(e));
  const data =  await response.json()
  // The `photos` variable is now defined, so we can safely call the `map()` method on it.
  return data.results?.map((result, idx) => { //idx is index
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address ? result.location.address : ' ',
      neighbourhood: result.location.region ? result.location.region : ' ',
      imgUrl: photos[idx] ? photos[idx] : null, //photos is an array as well so we can loop here
    };
  });
}