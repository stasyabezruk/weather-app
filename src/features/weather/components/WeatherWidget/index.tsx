import { Card, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { getCurrentWeather, getGeocodingObj, getWeatherCountryName, getWeatherData } from '@features/weather/selector';
import CurrentWeather from '../CurrentWeather';
import SaveToFavourite from '@features/favourites/components/SaveToFavourite';
import ForecastHourly from '../Forecast/ForecastHourly/List';
import ForecastDaily from '../Forecast/ForecastDaily/List';
import { formatTime } from '@utils/objectHelpers';
import cls from './styles.module.scss'

const WeatherData = () => {
    const city = useSelector(getGeocodingObj)?.name
    const state = useSelector(getGeocodingObj)?.state
    const country = useSelector(getWeatherCountryName)
    const currentWeather = useSelector(getCurrentWeather)
    const timezone = useSelector(getWeatherData).timezone

    return (
        <div className={`${cls.weatherWidget} weatherWidget`}>
            <Card>
                <div className={cls.currentWeather}>
                    <Row>
                        <Col span={24}>
                            <span className={cls.title}>{city}{state ? `, ${state}` : ''}, {country}</span>
                        </Col>
                        <Col span={24}>
                            <span className={cls.subTitle}>
                                {formatTime(currentWeather.dt, timezone, 'EEEE, LLLL d, yyyy | h:mm	aa')}
                            </span>
                        </Col>
                    </Row>
                    <CurrentWeather weather={currentWeather} />
                    <SaveToFavourite />
                </div>
                <Row>
                    <ForecastHourly/>
                </Row>
                <Row>
                    <ForecastDaily/>
                </Row>
            </Card>
        </div>

    )

}

export default WeatherData