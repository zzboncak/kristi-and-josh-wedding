/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import {
  GoogleAPI,
  GoogleApiWrapper,
  Map,
  Marker
} from "google-maps-react";

/** pins to add
 * First Date
 * Engagement Spot
 * Where they almost got arrested
 * House
 */

export class MapContainer extends React.Component<{
  google: GoogleAPI;
}> {
  containerStyle: React.CSSProperties = {
    position: "relative",
    width: "80vw",
    height: "300px",
    margin: "20px auto"
  };
  render(): JSX.Element {
    return (
      <Map
        google={this.props.google}
        style={{
          borderRadius: "16px"
        }}
        containerStyle={this.containerStyle}
        initialCenter={{
          lat: 42.10495,
          lng: -88.28439
        }}
        // @ts-ignore
        zoom={16}
        streetViewControl={false}
        fullscreenControl={false}
      >
        {/** Wedding Venue */}
        <Marker
          mapCenter={{ lat: 42.10495, lng: -88.28439 }}
          // @ts-ignore
          title="This is where our awesome wedding is taking place"
        ></Marker>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
})(MapContainer);
