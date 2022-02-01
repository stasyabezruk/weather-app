import { Row, Col } from 'antd'
import { ICurrentWeather } from "@features/weather/interface"
import capitalize from 'lodash/capitalize'

import cls from "./styles.module.scss";
import { Temperature, WeatherIcon } from "@components";

type Props = {
    weather: ICurrentWeather
}

const CurrentWeather: React.FC<Props> = ({
    weather
}) => {
    return (
        <Row>
            <Col sm={12} xs={24}>
                <span className={cls.icon}>
                    <WeatherIcon weatherIcon={weather.weather[0]}/>
                </span>

                <span className={cls.temp}>
                    <Temperature temp={weather.temp} />
                </span>

                <Col span={24}>
                    <span className={cls.weatherDescription}>{capitalize(weather.weather[0].description)}</span>
                </Col>
            </Col>
            <Col sm={12} xs={24}>
                <div className={cls.currentWeatherItem}>
                    <label>Humidity:</label>
                    <span>{weather.humidity} %</span>
                </div>
                <div className={cls.currentWeatherItem}>
                    <label>Wind:</label>
                    <span>{weather.wind_speed} metre/sec</span>
                </div>
                <div className={cls.currentWeatherItem}>
                    <label>Feels like:</label>
                    <span><Temperature temp={weather.feels_like} /></span>
                </div>

            </Col>
        </Row>


    )
}

export default CurrentWeather