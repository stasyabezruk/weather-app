import { Button, Tooltip } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

type Props = {
    getWeartherForHome: () => void
}

const HomeLocationLink: React.FC<Props> = ({
    getWeartherForHome
}) => {
    return (
        <div className='use-home-location'>
            <Tooltip title="Search weather for home location">
                <Button type="primary" icon={<HomeOutlined />} onClick={getWeartherForHome}/>
            </Tooltip>
        </div>
    )
}

export default HomeLocationLink