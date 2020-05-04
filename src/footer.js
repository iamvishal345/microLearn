import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container text-center">
        <small>Copyright &copy; Vishal Sharma</small><br/>
        <small>News API <a href="https://newsapi.org/" rel="noopener noreferrer" target="_blank"> https://newsapi.org/</a></small>
      </div>
    );
  }
}

export default Footer;
