// this component uses the leaflet package
// this is used to show the city's location on a map

import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

class LeafletMap extends React.Component {
  render() {
    const position = [this.props.lat, this.props.lng];
    return (
      <Map center={position} zoom={this.props.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{this.props.popupMessage}</Popup>
        </Marker>
      </Map>
    );
  }
}

export default LeafletMap;
