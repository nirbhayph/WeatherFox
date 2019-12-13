// this uses a searchable select component
// to give the user an option to select cities
// in the US, France and Russia
// data for cities was obtained from the open weather website
// data was filtered to create a smaller dataset
// localStorage is used to keep the data in the browser once loaded
// user can search and select a city using this select menu
// custom styling for the select menu has been applied
// see the public folder for finding more on the cities data used

import React from "react";
import AsyncPaginate from "react-select-async-paginate";
import loadOptions from "./loadOptions";

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

class SearchSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      getWeatherForSelected: props.getWeatherForSelected
    };
    this.reflectChange = this.reflectChange.bind(this);
  }

  // calls parent component on selection
  reflectChange(value) {
    this.setState({
      value: value
    });
    this.state.getWeatherForSelected(value);
  }

  render(props) {
    return (
      <div>
        <label style={{ marginTop: 20 }}>
          {" "}
          Select a city{" "}
          <small>
            <i>
              <b> (Choose from cities in France, United States or Russia)</b>
            </i>
          </small>
        </label>
        <AsyncPaginate
          value={this.state.value}
          loadOptions={loadOptions}
          closeMenuOnSelect={true}
          onChange={this.reflectChange}
          styles={styles}
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

export default SearchSelect;
