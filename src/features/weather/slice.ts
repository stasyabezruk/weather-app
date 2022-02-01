import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCityNameByCoords, getCoordsByCityName } from '@services/geocodingApi';
import { fetchWeatherApi } from '@services/weatherApi';
import { Coords, IGeocoding } from '@utils/baseTypes';
import { ApiResponse, initialState, WeatherParam } from './interface';

export const fetchWeather = createAsyncThunk<ApiResponse, WeatherParam>('weather/fetch',
    async (param, { rejectWithValue }) => {
        try {
            const { data } = await fetchWeatherApi(param)
            return data
        } catch (err: any) {
            if (err.response) {
                return rejectWithValue(err.response.data.message || err.response.data)
            }
            return rejectWithValue(err.toString())
        }
    }
)

export const fetchCoordinatesByCityName = createAsyncThunk<IGeocoding[], string>('city/getCoordinates',
    async (param, { rejectWithValue }) => {
        try {
            const { data } = await getCoordsByCityName(param)
            return data
        } catch (err: any) {
            if (err.response) {
                return rejectWithValue(err.response.data.message || err.response.data)
            }
            return rejectWithValue(err.toString())
        }
    }
)

export const fetchCityNameByCoords = createAsyncThunk<IGeocoding[], Coords>('city/getCityName',
    async (param, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await getCityNameByCoords(param)
            const { name, country } = data[0]
            dispatch(setWeatherGeoLocation({ cityName: name, countryName: country }))
            return data
        } catch (err: any) {
            if (err.response) {
                return rejectWithValue(err.response.data.message || err.response.data)
            }
            return rejectWithValue(err.toString())
        }
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherGeoLocation(state, { payload }: PayloadAction<{ cityName: string, countryName: string }>) {
            const { cityName, countryName } = payload
            state.cityName = cityName
            state.countryName = countryName
        },

        setCity(state, { payload }: PayloadAction<string>) {
            state.cityName = payload
        },
        setCountry(state, { payload }: PayloadAction<string>) {
            state.countryName = payload
        },
        resetWeatherState(state) {
            state.status = 'loading'
            state.coords = {} as IGeocoding
            state.data = {} as ApiResponse
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.status = 'loading'
            state.data = {} as ApiResponse
            state.errors = null
        })
        builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
            state.status = 'idle'
            state.data = payload
        })
        builder.addCase(fetchWeather.rejected, (state, { payload }) => {
            state.status = 'failed'
            state.errors = payload
        })

        builder.addCase(fetchCoordinatesByCityName.fulfilled, (state, { payload }) => {
            state.coords = payload[0]
        })
        builder.addCase(fetchCityNameByCoords.fulfilled, (state, { payload }) => {
            state.coords = payload[0]
        })

    },
});

export const { setWeatherGeoLocation, setCity, setCountry, resetWeatherState } = weatherSlice.actions;

export default weatherSlice.reducer;
