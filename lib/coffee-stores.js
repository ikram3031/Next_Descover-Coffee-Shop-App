import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});


const getUrlForCoffeeStores = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
}

const getListOfCoffeeStorePhoto = async ( ) => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'portrait',
  });

  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls["small"]);
}

export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeeStorePhoto ();
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY
    }
  };

  const response = await fetch(getUrlForCoffeeStores('23.72891800742518%2C90.43325302297949',"coffee", 6), options);
  const data =  await response.json()
  return data.results.map((result, idx) => { //idx is index
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address ? result.location.address : ' ',
      neighbourhood: result.location.region ? result.location.region : ' ',
      imgUrl: photos.length > 0 ? photos[idx] : null, //photos is an array as well so we can loop here
    };
  });
}