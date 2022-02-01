export interface Coords {
    lat: number
    lon: number
}

export interface IGeocoding extends Coords {
    name: string
    state: string
    country: string
}

export interface IOption {
    label: string
    value: string
    [key: string]: string
}

export type ResolutionType = 'mobile' | 'tablet'