// this component is used to display the data recieved from the api
// using bootstrap card components placed in a carousel

import React from "react";
import { Card, Button, Row, ButtonGroup } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone"; // for showing local time in city selected
import ReactCardCarousel from "react-card-carousel"; // displaying cards (library)
import WeatherIcon from "react-icons-weather"; // for getting owm icon (library)
import "./forecast.css";


const WeatherForecast = props => {
  // value for time slot selected by user
  let counter = props.timeSlot - 1;

  // filtering weather data to get 5 data points according to time slot selected
  const filteredWeatherData = props.weatherData.filter((item, index) => {
    if (index === counter) {
      counter += 8;
      return item;
    }
    return null;
  });

  // will act as reference to the CardCarousel component
  let cardCarousel = React.createRef();

  return (
    <div>
      {/* card carousel component for displaying weather cards */}
      <ReactCardCarousel
        autoplay={true}
        autoplay_speed={9000}
        alignment="horizontal"
        spread="wide"
        style={{ position: "relative"}}
        ref={cardCarousel}
      >
        {/* maps data to create cards for parameters received from the api */}
        {filteredWeatherData.map((item, index) => (
          <Card
            text="white"
            style={{ width: "18rem", backgroundColor: "#222" }}
            key={index}
          >
            <h2 style={{ textAlign: "center", padding: "20px" }}>
              <WeatherIcon name="owm" iconId={item.weather[0].id + ""} />
              &nbsp;{" "}
              {item.weather[0].description
                .toLowerCase()
                .split(" ")
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")}
            </h2>
            <Card.Header style={{ backgroundColor: "#413EA0" }}>
              <i className="wi wi-thermometer" /> &nbsp; &nbsp;{" "}
              {item.main.temp_min} °F to {item.main.temp_max} °F
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <small>
                  <Moment format="DD MMM, YY @ h:mm A" tz={props.timeZone}>
                    {item.dt_txt + " GMT"}
                  </Moment>
                  &nbsp; ({props.cityName})
                </small>
              </Card.Text>
              <Card.Text>
                <small>
                  <Moment format="DD MMM, YY @ h:mm A">{item.dt_txt}</Moment>
                  &nbsp; (UTC time)
                </small>
              </Card.Text>
              <div>
                <hr />
              </div>
              <Card.Text>
                <i className="wi wi-barometer" />
                <i> &nbsp; &nbsp;Pressure</i> → {item.main.pressure} hPa
              </Card.Text>
              <Card.Text>
                <i className="wi wi-humidity" />
                <i>&nbsp; &nbsp; Humidity</i> → {item.main.humidity}%
              </Card.Text>
              <div>
                <hr />
              </div>
              <Card.Text>
                <i className="wi wi-windy" />
                <i> &nbsp; &nbsp; Wind Speed</i> → {item.wind.speed} mph
              </Card.Text>
              <Card.Text>
                <i className="wi wi-cloud-up" />
                <i> &nbsp; &nbsp; Cloudiness</i> → {item.clouds.all}%
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </ReactCardCarousel>
      {/* card carousel ends here */}

      {/* control buttons for the card carousel */}
      <Row style={{ marginTop: "150px", marginLeft: "40px" }}>
        <ButtonGroup aria-label="group">
          <Button
            className="controlButtons"
            onClick={prevIt => cardCarousel.current.prev()}
          >
            Previous
          </Button>
          <Button
            className="controlButtons"
            onClick={nextIt => cardCarousel.current.next()}
          >
            Next
          </Button>
        </ButtonGroup>
      </Row>
    </div>
  );
};

export default WeatherForecast;
