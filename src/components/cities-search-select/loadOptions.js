// uses localstorage to save the cities data
if (localStorage.getItem("citiesData") === null) {
  let options = [];
  fetch("city-data/city_filtered_list.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(r => r.json())
    .then(json => {
      for (let iter = 0; iter < json.length; iter++) {
        options.push({
          value: json[iter]["id"],
          label: json[iter]["name"] + " in " + json[iter]["country"]
        });
      }
      localStorage.setItem("citiesData", JSON.stringify(options));
    });
}

// controls the options and search filter
const loadOptions = async (search, prevOptions) => {
  let options = JSON.parse(localStorage.getItem("citiesData"));
  let filteredOptions;
  if (!search) {
    filteredOptions = options;
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = options.filter(({ label }) =>
      label.toLowerCase().includes(searchLower)
    );
  }

  const hasMore = filteredOptions.length > prevOptions.length + 10;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 10
  );

  return {
    options: slicedOptions,
    hasMore
  };
};

export default loadOptions;
