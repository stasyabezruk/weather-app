import { Button, Tooltip } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import './styles.scss'

type Props = {
    resetThemePref: () => void
}

const ResetThemeLink: React.FC<Props> = ({
    resetThemePref
}) => {
    return (
        <div className='reset-theme-link'>
            <Tooltip title="Click to reset saved theme preference">
                <Button type="link" icon={<ReloadOutlined />} onClick={resetThemePref}>Reset theme</Button>
            </Tooltip>
        </div>

    )
}

export default ResetThemeLink