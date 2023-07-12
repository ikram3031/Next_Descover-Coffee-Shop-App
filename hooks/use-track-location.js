import { ACTION_TYPES, StoreContext } from "@/pages/_app";
import { useState, useEffect,useContext } from "react";

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMessage] = useState('');
    // const [latLong, setLatLong] = useState("");
    const [isFindingLocation, setIsFindingLocation] = useState(false);

    const {dispatch} = useContext(StoreContext)

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        // setLatLong(`${latitude},${longitude}`);

        dispatch({
            type: ACTION_TYPES.SET_LAT_LONG,
            payload: { latLong: `${latitude},${longitude}`}        
        })
        setLocationErrorMessage('');
        setTimeout(() => {
            setIsFindingLocation(false)
        }, 1000);
    };
    
    const error = () => {
        setIsFindingLocation(false)
        setLocationErrorMessage("Unable to retrieve your location");
    };

    const handleTrackLocation = () => {
        setIsFindingLocation(true)

        if (!navigator.geolocation) {
            setLocationErrorMessage("Geolocation is not supported by your browser");
            setIsFindingLocation(false)
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    useEffect(() => {
        const cleanup = () => {
          setIsFindingLocation(false);
          setLocationErrorMessage('');
        };
    
        return cleanup;
      }, []);
    
    return {
        // latLong,
        handleTrackLocation,
        locationErrorMsg,
        isFindingLocation,
    };
};

export default useTrackLocation;
