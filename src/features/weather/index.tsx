import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd'
import { useAppDispatch } from '@app/hooks';
import CitySearch from "./components/CitySearch";
import { getGeocodingObj, getIsLoading, getWeatherCityName } from '@features/weather/selector';
import { fetchCoordinatesByCityName, fetchWeather, setWeatherGeoLocation } from "./slice";
import { hasCoords } from '@utils/objectHelpers';
import WeatherData from './components/WeatherWidget';
import { Loader } from '@components';
import cls from "./styles.module.scss";
import FavList from '@features/favourites/components/Favourites/FavList';


const Weather = () => {
    const dispatch = useAppDispatch();
    const geocoding = useSelector(getGeocodingObj)
    const isWeatherLoading = useSelector(getIsLoading)
    const isCityName = useSelector(getWeatherCityName)

    const saveCityCoordstoStore = useCallback((cityName: string, countryName: string) => {
        dispatch(fetchCoordinatesByCityName(cityName))
        dispatch(setWeatherGeoLocation({ cityName, countryName }))
    }, [dispatch])

    useEffect(() => {
        if (hasCoords(geocoding)) {
            const coords = {
                lat: geocoding.lat,
                lon: geocoding.lon
            }
            dispatch(fetchWeather({ coords }))
        }
    }, [dispatch, geocoding])

    return (
        <Row
            style={{ width: '100%' }}
            justify='center'
            gutter={[0, 32]}
        >
            <div className={cls.searchRow}>
                <CitySearch saveCityCoords={saveCityCoordstoStore} />
            </div>

            <Col span={24} >
                <div className={cls.weatherWidgetWrapper}>
                    {isWeatherLoading && isCityName ? <Loader /> : null}
                    {!isWeatherLoading && isCityName && <WeatherData />}
                </div>
            </Col>

            <FavList/>
        </Row>
    );
}

export default Weather 
