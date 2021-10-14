import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

export default class GalleryPhoto extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  render() {
    return (
      <li>
        {this.state.loaded ? null : (
          <ShimmerThumbnail height={300} width={500} className="m-0" rounded />
        )}
        <img
          style={this.state.loaded ? {} : { display: "none" }}
          src={this.props.src}
          alt={this.props.alt}
          onLoad={() => this.setState({ loaded: true })}
        />
      </li>
    );
  }
}
