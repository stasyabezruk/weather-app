import { useSelector } from "react-redux"
import { getForecastDaily, getWeatherData } from "@features/weather/selector"
import { DailyForeCast } from "@features/weather/interface"
import Item from "./Item"
import cls from './styles.module.scss'


const ForecasDaily = () => {
    const list = useSelector(getForecastDaily)
    const timezone = useSelector(getWeatherData).timezone

    return (
        <div className={`${cls.wrapper} daily-forecast`}>
            <h3>Daily forecast</h3>
            <div className={cls.list}>
                {list.map((item: DailyForeCast) => (
                    <Item
                        key={item.dt}
                        item={item}
                        timezone={timezone}
                    />
                ))}
            </div>
        </div>
    )

}

export default ForecasDaily