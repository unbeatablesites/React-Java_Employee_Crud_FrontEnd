import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span>All rights reserved 2020 Frank Uzoka Productions</span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
