import { useSelector } from "react-redux"
import { getForecastHourly, getWeatherData } from "@features/weather/selector"
import Carousel, { CarouselProps } from 'nuka-carousel'
import carouselSettings from "@utils/carouselSettings"
import { HourlyForecast } from "@features/weather/interface"
import Item from "./Item"
import { useWindowSize } from "@hooks"
import { useMemo } from "react"
import { ResolutionType } from "@utils/baseTypes"

const ForecastHourlyList = () => {
    const list = useSelector(getForecastHourly)
    const timezone = useSelector(getWeatherData).timezone

    const { width } = useWindowSize()

    const resolutionType: ResolutionType = useMemo(() => {
        return width && width < 660 ? 'mobile' : 'tablet'
    }, [width])

    return (
        <Carousel {...carouselSettings(resolutionType) as CarouselProps}>
            {list.map((item: HourlyForecast) => (
                <Item
                    key={item.dt}
                    item={item}
                    timezone={timezone}
                />
            ))}
        </Carousel>
    )

}

export default ForecastHourlyList