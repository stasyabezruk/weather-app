import Icon from '@ant-design/icons';
import { CustomIconComponentProps as Props } from '@ant-design/icons/lib/components/Icon';
import config from '@app/config'

export const SnowImage = () => (
    <img src={`${config.weatherSite}/img/wn/13d.png`} alt="snow"/>
)
export const SunImage = () => (
    <img src={`${config.weatherSite}/img/wn/01d.png`} alt="sun"/>
)

export const SnowIcon = (props: Partial<Props>) => <Icon component={SnowImage} {...props} />
export const SunIcon = (props: Partial<Props>) => <Icon component={SunImage} {...props} />