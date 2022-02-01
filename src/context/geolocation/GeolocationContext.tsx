import { useAppDispatch } from '@app/hooks';
import { fetchCityNameByCoords, fetchWeather } from '@features/weather/slice';
import { useState, useEffect, createContext, useMemo } from 'react'

const GeolocationContext = createContext({
    homeLat: 0,
    homeLng: 0,
    isHomeLocation: false,
    getWeartherForHome: () => {}
})

const GeolocationProvider : React.FC = ({
    children
}) => {
    const dispatch = useAppDispatch();

    const [homeLat, setHomeLat] = useState(0);
    const [homeLng, setHomeLng] = useState(0);
    const [status, setStatus] = useState('');

    const isHomeLocation = useMemo(() => !!(homeLat && homeLng), [homeLng, homeLat])

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
                setStatus('');
                setHomeLat(position.coords.latitude);
                setHomeLng(position.coords.longitude);

                localStorage.setItem('homeLat', JSON.stringify(position.coords.latitude))
                localStorage.setItem('homeLng', JSON.stringify(position.coords.latitude))

            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    const getWeartherForHome = () => {
        const coords = {
            lat: homeLat,
            lon:homeLng
        }
        dispatch(fetchCityNameByCoords(coords))
        dispatch(fetchWeather({ coords }))
    }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <GeolocationContext.Provider value={{
            homeLat,
            homeLng,
            isHomeLocation,
            getWeartherForHome
        }}
        >
            {status && status}
            {children}
        </GeolocationContext.Provider>
    )


}

export { GeolocationContext, GeolocationProvider }