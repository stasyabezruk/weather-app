import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, Tooltip } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useAppDispatch } from '@app/hooks';
import { getIsWeatherCityExistsinFav } from '@features/favourites/selector';
import { getWeatherCityName, getWeatherCountryName } from '@features/weather/selector';
import { removeFavLocation, setFavLocation } from '@features/favourites/slice';
import { IFavLocation } from '@features/favourites/interface';
import cls from './styles.module.scss'

const SaveToFavourite = () => {
    const dispatch = useAppDispatch();

    const city = useSelector(getWeatherCityName)
    const country = useSelector(getWeatherCountryName)
    const isWeatherCityExistsinFav = useSelector(getIsWeatherCityExistsinFav(city))

    const saveToFav = useCallback(() => {
        const favLocation: IFavLocation = {
            favCity: city,
            favCountry: country
        }
        city && dispatch(setFavLocation(favLocation))
    }, [dispatch, city, country])

    const removeFromFav = useCallback(() => {
        dispatch(removeFavLocation(city))
    }, [dispatch, city])

    return (
        <div className={cls.favIconWrapper}>
            {isWeatherCityExistsinFav ?
                <Tooltip title="Remove location from favourite">
                    <Button type="text" icon={<HeartFilled style={{ fontSize: '20px' }} />} onClick={removeFromFav} />
                </Tooltip> :

                <Tooltip title="Save location to favourite">
                    <Button type="text" icon={<HeartOutlined />} onClick={saveToFav} />
                </Tooltip>
            }
        </div>


    )
}

export default SaveToFavourite