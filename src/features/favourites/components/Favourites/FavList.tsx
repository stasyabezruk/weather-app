import { useSelector } from 'react-redux';
import { Space } from 'antd';
import { getFavLocations } from '@features/favourites/selector';
import { IFavLocation } from '@features/favourites/interface';
import FavListItem from './FavListItem';

const FavList = () => {
    const favourites = useSelector(getFavLocations)

    return (
        <div className='fav-list'>
            <Space size={18}>
                {favourites.map((item: IFavLocation) => (
                    <FavListItem
                        key={item.favCity}
                        item={item}
                    />
                ))}
            </Space>
        </div>

    )
}

export default FavList

