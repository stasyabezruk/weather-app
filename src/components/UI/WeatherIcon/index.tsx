import { IWeatherIcon } from "@features/weather/interface"
import { getWeatherIconUrl } from "@utils/objectHelpers"
import { useMemo } from "react"

type Props =  {
    weatherIcon: IWeatherIcon
}

const WeatherIcon: React.FC<Props> = ({
    weatherIcon
}) => {

    const weatherUrl = useMemo(() => {
        return getWeatherIconUrl(weatherIcon)
    }, [weatherIcon])

    return (
        <img src={weatherUrl} alt={weatherIcon.description} />
    )
}

export default WeatherIcon