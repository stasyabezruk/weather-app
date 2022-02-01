import { HourlyForecast } from "@features/weather/interface"
import { Col, Row } from "antd"
import { Temperature, WeatherIcon } from "@components"
import { formatTime } from "@utils/objectHelpers"
import './styles.scss'

type Props = {
    item: HourlyForecast
    timezone: string
}
const HourlyItem: React.FC<Props> = ({
    item,
    timezone
}) => {
    return (
        <div className="forecast-item">
            <Row justify="center">
                <Col span={24} style={{ textAlign: 'center' }}>
                    <WeatherIcon weatherIcon={item.weather[0]} />
                </Col>
                <Col span={24}>
                    <Temperature temp={item.temp} />
                </Col>
                <Col>
                    <span>{formatTime(item.dt, timezone, 'h:mm	aa')}</span>
                </Col>
            </Row>

        </div>

    )

}
export default HourlyItem