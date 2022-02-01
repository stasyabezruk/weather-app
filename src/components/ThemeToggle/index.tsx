import { Switch } from 'antd';
import { SunIcon, SnowIcon } from '@components';
import './styles.scss'

type Props = {
    isThemeDark: boolean
    toggleTheme: () => void
}

const ThemeToggle: React.FC<Props> = ({
    isThemeDark,
    toggleTheme
}) => {

    return (
        <div className="theme-toggle">
            <Switch
                checkedChildren={<SunIcon className='sun-icon' />}
                unCheckedChildren={<SnowIcon className='snow-icon' />}
                checked={!isThemeDark}
                onChange={toggleTheme}
            />
        </div>

    )
}

export default ThemeToggle