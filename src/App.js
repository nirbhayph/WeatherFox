// this is the main app component
// this contains 6 components you will find in the components folder
// it calls the weather api and passes the respective data and state props
// to these components.

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Badge } from "react-bootstrap";
import SearchSelect from "./components/cities-search-select";
import WeatherForecast from "./components/weather-forecast";
import WeatherDataPlot from "./components/weather-data-plot";
import TimeSlotSelect from "./components/time-slot-selector";
import LeafletMap from "./components/leaflet-map";
import Header from "./components/header";
import Footer from "./components/footer";
import { OPEN_WEATHER_FIVE_DAY_FORECAST } from "./utilities/constants";
import { TIMEZONE_DB_GET_ZONE } from "./utilities/constants";
import axios from "axios";
import moment from "moment";

let self;

class App extends React.Component {
  state = {
    weatherData: [], // weather data
    cityName: "", // for name of the city once selected
    timeZone: "ETC/UTC", // initial time zone
    timeSlot: 1, // selector time slot
    showData: false, // for rendering only required components
    lat: "", // for latitude of city once selected
    lng: "", // for longitude of city once selected
    errorDisplay: false // in case of an error
  };

  // calls the timezonde db api to retrieve the offset and make the timezone
  // according to moment package. (check moment.tz.names()) to learn more
  // sets the timezone in the state variable for the city under consideration once created
  setLocalTimeZone(lat, lng) {
    axios.get(TIMEZONE_DB_GET_ZONE + "&lat=" + lat + "&lng=" + lng).then(
      response => {
        console.log(response);
        let offset = response.data.gmtOffset;
        let timeZone;
        if (offset < 0) {
          timeZone =
            "Etc/GMT+" + moment.utc(moment.unix(Math.abs(offset))).format("H");
        } else {
          timeZone = "Etc/GMT-" + moment.utc(moment.unix(offset)).format("H");
        }
        self.setState({
          timeZone: timeZone
        });
      },
      error => {
        self.setState({
          errorDisplay: true
        });
      }
    );
  }

  // gets the weather data and changes the state accordingly
  getWeatherForSelected(selected) {
    console.log(selected);
    axios.get(OPEN_WEATHER_FIVE_DAY_FORECAST + selected.value).then(
      response => {
        self.setState({
          weatherData: response.data.list,
          cityName: response.data.city.name,
          showData: true,
          lat: response.data.city.coord.lat,
          lng: response.data.city.coord.lon
        });
        self.setLocalTimeZone(
          response.data.city.coord.lat,
          response.data.city.coord.lon
        );
      },
      error => {
        self.setState({
          errorDisplay: true
        });
      }
    );
  }

  // if user selects another time slot
  reflectTimeSlotChange(option) {
    self.setState({
      timeSlot: option.value
    });
  }

  constructor(props) {
    super(props);
    self = this;
  }

  componentDidUpdate() {
    // to scroll down once user selects something
    this.footer.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div>
        <Container>
          <Header title="Weather" badgeTitle="Fox" />
          <br />
          <SearchSelect getWeatherForSelected={this.getWeatherForSelected} />
          {this.state.showData ? (
            <TimeSlotSelect
              defaultTimeSlot={this.state.timeSlot}
              reflectTimeSlotChange={this.reflectTimeSlotChange}
              weatherData={this.state.weatherData}
              timeZone={this.state.timeZone}
              timeSlot={this.state.timeSlot}
            />
          ) : null}
          <Row>
            <Col sm={6}>
              <Row style={{ position: "relative", marginTop: "200px"}}>
                {this.state.showData ? (
                  <WeatherForecast
                    timeSlot={this.state.timeSlot}
                    weatherData={this.state.weatherData}
                    cityName={this.state.cityName}
                    timeZone={this.state.timeZone}
                  />
                ) : null}
              </Row>
            </Col>
            <Col sm={6}>
              <Row style={{ position: "relative", marginTop: "60px" }}>
                {this.state.showData ? (
                  <WeatherDataPlot
                    timeSlot={this.state.timeSlot}
                    timeZone={this.state.timeZone}
                    weatherData={this.state.weatherData}
                  />
                ) : null}
              </Row>
              <Row>
                {this.state.showData ? (
                  <LeafletMap
                    lat={this.state.lat}
                    lng={this.state.lng}
                    popupMessage={this.state.cityName}
                    zoom={13}
                  />
                ) : null}
              </Row>
            </Col>
          </Row>

          {this.state.errorDisplay ? (
            <div>
            <h3 style={{ textAlign: "center" }}>
              <Badge variant="warning" style={{padding: '20px'}}>
                  {" "}
                  Unable to fetch data. Please try again later!{" "}
              </Badge>
              </h3>
            </div>
          ) : null}

          <div
            ref={ref => (this.footer = ref)}
            style={{ position: "relative", marginTop: "100px" }}
          />

          <Footer />


        </Container>
      </div>
    );
  }
}

export default App;
