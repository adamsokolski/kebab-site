import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default class GalleryPhoto extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  render() {
    return (
      <>
        {this.state.loaded ? null : (
          <ShimmerThumbnail height={300} width={500} className="m-0" rounded />
        )}
        <Zoom
          wrapElement="li"
          overlayBgColorEnd="rgba(0, 0, 0, 0.9)"
          transitionDuration="222"
        >
          <img
            style={this.state.loaded ? {} : { display: "none" }}
            src={this.props.src}
            alt={this.props.alt}
            onLoad={() => this.setState({ loaded: true })}
          />
        </Zoom>
      </>
    );
  }
}
