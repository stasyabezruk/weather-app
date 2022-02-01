export const config: { [x: string]: string | undefined } = Object.freeze({
    apiUrl: process.env.REACT_APP_API_URL,
    weatherSite: 'http://openweathermap.org/',
    clientId: process.env.REACT_APP_CLIENT_ID,
  })
  
  export default config