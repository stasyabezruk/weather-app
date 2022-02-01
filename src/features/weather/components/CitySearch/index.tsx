import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@app/hooks';
import { Row, Col } from 'antd';
import { IOption } from '@utils/baseTypes'
import { Autocomplete } from "@components";
import { getCitiesOptions, getCountriesOptions } from '@services/cities';
import { getWeatherCityName, getWeatherCountryName } from '@features/weather/selector';
import { resetWeatherState, setCity, setCountry } from '@features/weather/slice';


type Props = {
    saveCityCoords: (cityName: string, countryValue: string) => void
}

const CitySearch: React.FC<Props> = ({
    saveCityCoords
}) => {
    const dispatch = useAppDispatch();

    const city = useSelector(getWeatherCityName)
    const country = useSelector(getWeatherCountryName)

    const [citiesOptions, setCitiesOptions] = useState<IOption[]>([])
    const countries = getCountriesOptions()

    useEffect(() => {
        if (!country) {
            setCitiesOptions([])
            dispatch(setCity(''))
        }
        setCitiesOptions(getCitiesOptions(country))
    }, [dispatch, country])

    useEffect(() => {
        !city && dispatch(resetWeatherState())
    }, [dispatch, city])

    const onChangeCountry = (countryName: string) => {
        dispatch(setCountry(countryName))
    };

    const onChangeCity = (cityName: string) => {
        dispatch(setCity(cityName))
    };

    const onSelectCityName = (cityName: string) => {
        cityName && saveCityCoords(cityName, country)
    };

    return (
        <Row
            gutter={[8, 20]}
            style={{width: '100%'}}
        >
            <Col span={24}>
                <Autocomplete
                    value={country}
                    options={countries}
                    onChange={onChangeCountry}
                    placeholder='Choose country to get city'
                    allowClear
                    width='100%'
                    size="large"
                />
            </Col>

            {country &&
                <Col span={24}>
                    <Autocomplete
                        value={city}
                        options={citiesOptions}
                        onChange={onChangeCity}
                        onSelect={onSelectCityName}
                        placeholder='Type city name to find weather forecast'
                        allowClear
                        width='100%'
                        size="large"
                    />
                </Col>
            }

        </Row>
    );
}

export default CitySearch 
