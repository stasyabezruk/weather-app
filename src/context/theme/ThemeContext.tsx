import { getCurrentTemp, getIsFullfilled } from '@features/weather/selector'
import { useState, useEffect, useCallback, useMemo, createContext } from 'react'
import { useSelector } from 'react-redux'

type Theme = 'light' | 'dark'

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
    resetThemePreference: () => { },
    isThemeDark: false,
    isThemeSaved: false
})


const ThemeContextProvider: React.FC = ({
    children
}) => {
    const isWeatherLoaded = useSelector(getIsFullfilled)
    const temp = useSelector(getCurrentTemp)

    const [theme, setTheme] = useState('')
    const [isThemeSaved, setIsThemeSaved] = useState(false)
    const isThemeDark = useMemo(() => theme === 'dark', [theme]);

    const toggleTheme = () => {
        const selectedTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(selectedTheme)
        saveThemePreference(selectedTheme)
    }

    const saveThemePreference = (theme: Theme) => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }

    const resetThemePreference = () => {
        localStorage.removeItem('theme')
        setIsThemeSaved(false)
        temperatureChecker()
    }

    const temperatureChecker = useCallback(() => {
        if (isWeatherLoaded) {
            if (temp > 0) {
                setTheme('light')
            } else {
                setTheme('dark')
            }
        }
    }, [temp, isWeatherLoaded])

    useEffect(() => {
        // set theme based on the temperature on initial application load and
        // when there is no theme preference in the localStorage
        if (!localStorage.getItem('theme')) {
            temperatureChecker()
        } else {
            setTheme(JSON.parse(localStorage.getItem('theme') || ""))
        }
    }, [isWeatherLoaded, temperatureChecker])

    useEffect(() => {
        setIsThemeSaved(!!localStorage.getItem('theme'))
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
            resetThemePreference,
            isThemeDark,
            isThemeSaved
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }