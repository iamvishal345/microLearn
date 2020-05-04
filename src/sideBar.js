import React from "react";
import "./assets/sideBar.scss";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: 0,
      selectedTheme: 0,
      categories: [
        {
          label: "All",
          key: "",
        },
        {
          label: "India",
          key: "",
        },
        {
          label: "Business",
          key: "",
        },
        {
          label: "Sports",
          key: "",
        },
        {
          label: "World",
          key: "",
        },
        {
          label: "Politics",
          key: "",
        },
        {
          label: "Technology",
          key: "",
        },
        {
          label: "Startup",
          key: "",
        },
        {
          label: "Science",
          key: "",
        },
        {
          label: "Automobile",
          key: "",
        },
      ],
    };
  }
  selectCategory = (cat, i) => {
    this.setState({ selectedCat: i });
    this.props.handleCategoryChange(cat);
  };
  selectTheme = (id) => {
    this.setState({ selectedTheme: id });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="sidebar-overlay sidebar-bg"
          style={{ display: this.props.open ? "block" : "none" }}
          onClick={this.props.toggleSideBar}
        >
          &nbsp;
        </div>
        <div
          className={`sidebar ${this.props.open}`}
          style={{ overflowY: "scroll" }}
        >
          <div className="top-bar">
            <div className="theme-selector clickable">
              <button
                className="listButton"
                onClick={() => this.selectTheme(0)}
              >
                <div
                  className={`theme-dark ${
                    this.state.selectedTheme === 0 ? "selected" : ""
                  }`}
                >
                  Dark
                </div>
              </button>
              <button
                className="listButton"
                onClick={() => this.selectTheme(1)}
              >
                <div
                  className={`theme-light ${
                    this.state.selectedTheme === 1 ? "selected" : ""
                  }`}
                >
                  Light
                </div>
              </button>
            </div>
          </div>

          <div>
            <div className="category-header">Categories</div>
            <ul className="category-list">
              {this.state.categories.map((category, i) => {
                return (
                  <button
                    className="listButton mt-2"
                    key={i}
                    onClick={(e) => this.selectCategory(category, i)}
                  >
                    {" "}
                    <li
                      className={`active-category clickable ${
                        this.state.selectedCat === i ? "selected" : ""
                      }`}
                    >
                      {category.label}
                    </li>{" "}
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
