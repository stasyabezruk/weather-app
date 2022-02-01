type Props = {
    temp: number
}

const Temp: React.FC<Props> = ({
    temp
}) => {
    return <span>{Math.round(temp)}°C</span>
}

export default Temp