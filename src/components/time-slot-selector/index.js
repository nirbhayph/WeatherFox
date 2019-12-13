// this component is used to create the
// eight quarter time slot selector
// here a custom style has been created for the select component
// data has been filtered to create the 8 time slots that can be seen by the user

import React from "react";
import Select from "react-select";

const moment = require("moment-timezone"); // for city's local time needs

const styles = {
  control: (base, state) => ({
    ...base,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#343940" : "#343940",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#343940" : "#343940"
    }
  }),
  menu: provided => ({ ...provided, zIndex: 9999 })
};

let defaultValue = "Loading ...";

class TimeSlotSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSlot: props.defaultTimeSlot,
      reflectTimeSlotChange: props.reflectTimeSlotChange
    };
    this.reflectChange = this.reflectChange.bind(this);
  }

  reflectChange(value) {
    this.setState({
      timeSlot: value
    });
    this.state.reflectTimeSlotChange(value); // changes parent's state
  }

  getOptions() {
    // timezone for city
    let timeZone = this.props.timeZone;

    // keeping just first eight data points
    let filteredData = this.props.weatherData.filter((item, index) => {
      if (index < 8) {
        return item;
      }
      return null;
    });

    // mapping data to create options for the select menu
    let selectableTimes = filteredData.map((item, index) => {
      let data = {};
      data["value"] = index + 1;
      data["label"] =
        "Every " +
        moment(item.dt_txt + " GMT")
          .tz(timeZone)
          .format("h:mm A") +
        " starting " +
        moment(item.dt_txt + " GMT")
          .tz(timeZone)
          .format("MMM DD, YYYY") +
        " Local Time";

      if (index === 0) {
        defaultValue = data["label"];
      }

      return data;
    });
    return selectableTimes;
  }

  render(props) {
    return (
      <div>
        <label style={{ marginTop: 20 }}>
          {" "}
          Select a time slot{" "}
          <small>
            <i>
              <b> (Choose from any of the eight 3 hr time periods)</b>
            </i>
          </small>
        </label>
        <Select
          styles={styles}
          style={{ zIndex: 9999 }}
          options={this.getOptions()}
          placeholder={defaultValue}
          onChange={this.reflectChange}
          closeMenuOnSelect={true}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#413EA0",
              primary: "#413EA0",
              neutral0: "#222",
              primary50: "#222",
              neutral80: "white",
              neutral90: "white",
              neutral70: "white"
            }
          })}
        />
      </div>
    );
  }
}

export default TimeSlotSelect;
