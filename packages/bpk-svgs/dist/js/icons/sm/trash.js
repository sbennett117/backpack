import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M6 7v13c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm.9-3H17c1.1 0 2 .9 2 2H4.9c0-1.1.9-2 2-2zM9 3c0-.5.4-1 1-1h4c.6 0 1 .5 1 1" /></svg>;
  }

}