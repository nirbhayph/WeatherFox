// oper weather map cities data (this data is provided for reference) (a separate filtered chunk has been used in the app (See public folder))
export const CITIES_DATA = 'http://ganskop.com/proxy/https://people.rit.edu/np5318/howistheweather_data/city.list.json';

// open weather map api key
export const OPEN_WEATHER_API_KEY = '8d857ff354f64e3ac0b841e26812533c';

// timezonedb api key
export const TIMEZONE_DB_API_KEY = 'HIIZEJW9VZSN';

// api end point for 5 day forecast
export const OPEN_WEATHER_FIVE_DAY_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?appid="+OPEN_WEATHER_API_KEY+"&units=imperial&id=";

// api end point for timezone db
export const TIMEZONE_DB_GET_ZONE = "https://api.timezonedb.com/v2.1/get-time-zone?key="+TIMEZONE_DB_API_KEY+"&format=json&by=position";

// sample data from open weather (provided for reference)
export const SAMPLE_DATA = "http://ganskop.com/proxy/https://people.rit.edu/np5318/howistheweather_data/sample_weather_data.json";
