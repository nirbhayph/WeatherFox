# WeatherFox (Built with React) 

- This is a react based weather app for forecasting 5 days of weather data using the Open Weather Maps API and the TimeZoneDB API

- This repository contains the project work and the deployment for the Weather App Project done in the Client Design and Development Class @ RIT - ISTE 754

- API documentation is at https://openweathermap.org/forecast5

- For RIT students only - Serenity Link - http://serenity.ist.rit.edu/~np5318/weatherfox

- For others - https://nirbhay.me/weatherfox

- Hosted through GitHub pages - Refer the link: https://github.com/gitname/react-gh-pages

- Switch to the sourcecode branch to view the code. 

## Instructions to Setup the Application

- git clone --single-branch --branch sourcecode https://github.com/nirbhayph/weatherfox.git
- The application is created using create-react-app
- If you are new to react, you may first go to https://github.com/facebook/create-react-app to learn more. 
- Now change your directory to the cloned repository. 

If you want to try it out in devloper mode 
``` 
npm install 
npm start 
```

If you wish to serve the app 
``` 
npm install
npm install -g serve
serve -s build

```

## NPM Packages Used 
- react-select-async-paginate (@rsap) - Search based Select for cities in USA, France and Russia by filtering the bulk cities downloaded json from Open Weather Map.
- react-select (@reactselect) - Implemented 3hr time selector for each of the 5 days. Refer time-slot-selector component to learn more.
- react-bootstrap (@reactbootstrap) - Used widely in the app for creating an aesthetically appealing interface. 
- react-card-carousel (@cardcarousel) - Used this to display the weather cards in a carousel. 
- react-icons (@icons) - Used this for footer icons.
- react-icons-weather (@weathericons) - Icon package that supports Open Weather Maps icon ids received from the API.
- moment (@moment) - For manipulating time for the city selected.
- moment-timezone (@momenttimezone) - For local time zone for the city selected.
- axios (@axios) - For making api calls. 
- recharts (@recharts) -  Recharts plot for weather data points
- react-leaflet (@reactleaflet) - For plotting locations map for city selected

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Developer:
- @nirbhayph - https://github.com/nirbhayph | https://linkedin.com/in/nirbhaypherwani

## Acknowledgements and Mentions:

- @react - https://reactjs.org/
- @rsap - https://www.npmjs.com/package/react-select-async-paginate
- @reactselect - https://www.npmjs.com/package/react-select
- @reactbootstrap - https://www.npmjs.com/package/react-bootstrap
- @cardcarousel - https://www.npmjs.com/package/react-card-carousel
- @icons - https://www.npmjs.com/package/react-icons
- @weathericons - https://www.npmjs.com/package/react-icons-weather
- @moment - https://www.npmjs.com/package/moment
- @momenttimezone - https://www.npmjs.com/package/moment-timezone
- @axios - https://www.npmjs.com/package/axios
- @recharts - https://www.npmjs.com/package/recharts
- @reactleaflet - https://www.npmjs.com/package/react-leaflet
- @openweathermap - https://openweathermap.org/
- @timezonedb - https://timezonedb.com/
- @ghpages - https://github.com/gitname/react-gh-pages
