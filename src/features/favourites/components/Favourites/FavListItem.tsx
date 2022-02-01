import { useCallback } from 'react';
import { Button } from 'antd';
import { useAppDispatch } from '@app/hooks';
import { fetchCoordinatesByCityName, setWeatherGeoLocation } from '@features/weather/slice';
import { IFavLocation } from '@features/favourites/interface';

type Props = {
    item: IFavLocation
}

const FavListItem: React.FC<Props> = ({
    item
}) => {
    const dispatch = useAppDispatch()
    const { favCity, favCountry } = item

    const useFavLocation = useCallback(() => {
        dispatch(setWeatherGeoLocation({ cityName: favCity, countryName: favCountry }))
        dispatch(fetchCoordinatesByCityName(favCity))
    }, [dispatch, favCity, favCountry])

    return (
        <Button shape="round" size='large' onClick={useFavLocation}>{favCity}</Button>
    )
}

export default FavListItem

