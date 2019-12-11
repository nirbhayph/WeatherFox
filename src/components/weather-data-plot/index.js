// this component is used for displaying the plot for
// temparature, cloudiness and humidity for the city selected

import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts"; // components to build the recharts component
import Moment from "react-moment";
import "moment-timezone"; // for local time needs

// custom axis marker used on the y axis
class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={-30} y={0} dy={16} textAnchor="end" fill="#666">
          {payload.value === 0 ? "" : payload.value}
        </text>
      </g>
    );
  }
}

let time, reqData;

const moment = require("moment-timezone");

// plot component for displaying the
// three weather params mentioned above
class WeatherDataPlot extends PureComponent {
  renderColorfulLegendText(value, entry) {
    const { color } = entry;

    return <span style={{ color }}>{value}</span>;
  }

  requiredData() {
    // value for time slot selected by user
    let counter = this.props.timeSlot - 1;

    // timezone for local time in the city
    let timeZone = this.props.timeZone;

    // filtering weather data to get 5 data points according to time slot selected
    let filteredWeatherData = this.props.weatherData.filter((item, index) => {
      if (index === counter) {
        counter += 8;
        return item;
      }
      return null;
    });

    // creating data for the composed chart plot component
    reqData = filteredWeatherData.map((item, index) => {
      let data = {};
      data["Date"] = moment(item.dt_txt + " GMT")
        .tz(timeZone)
        .format("DD MMM, YY");
      data["Temperature"] = item.main.temp;
      data["Humidity"] = item.main.humidity;
      data["Cloudiness"] = item.clouds.all;

      time = item.dt_txt;
      return data;
    });

    return reqData;
  }

  render() {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={600}
            height={400}
            data={this.requiredData()}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid stroke="#d3d3d3" />
            <XAxis dataKey="Date" />
            <YAxis tick={<CustomizedAxisTick />} />
            <Tooltip />
            <Legend formatter={this.renderColorfulLegendText} />
            <Bar dataKey="Temperature" barSize={30} fill="#413ea0" />
            <Line type="monotone" dataKey="Humidity" stroke="#ff7300" />
            <Scatter dataKey="Cloudiness" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
        <h4 style={{ textAlign: "center" }}>
          @
          <Moment format="h:mm A" tz={this.props.timeZone}>
            {time + " GMT"}
          </Moment>{" "}
          Local Time
        </h4>
      </div>
    );
  }
}

export default WeatherDataPlot;
