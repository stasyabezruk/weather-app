import { DailyForeCast } from "@features/weather/interface"
import { Col, Row, Space } from "antd"
import { Temperature, WeatherIcon } from "@components"
import { formatTime } from "@utils/objectHelpers"

type Props = {
    item: DailyForeCast
    timezone: string
}
const DailyItem: React.FC<Props> = ({
    item,
    timezone
}) => {
    return (
        <div className="forecast-item">
            <Row justify="center">
                <Col lg={24} sm={5} xs={5}>
                    <span className="bold">{formatTime(item.dt, timezone, 'E')}</span>
                </Col>
                <Col lg={24} sm={9} xs={9} style={{ textAlign: 'center' }}>
                    <WeatherIcon weatherIcon={item.weather[0]} />
                </Col>
                <Col lg={24} sm={10} xs={10}>
                    <Space>
                        <Temperature temp={item.temp.min}/>
                        <Temperature temp={item.temp.max}/>
                    </Space>

                </Col>
            </Row>

        </div>

    )

}
export default DailyItem