import React, { Component } from "react";
import "./App.scss";
import "./assets/card.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import Logo from "./assets/images/Logo.svg";
import SideBar from "./sideBar";
import Card from "./cards";
import Footer from "./footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "",
      toggled: "",
      articles: [],
      loading: true,
    };
  }

  toggleSideBar = (e) => {
    let open = this.state.open;
    let toggled = this.state.toggled;
    if (open.length === 0) {
      open = "open";
      toggled = "toggled";
    } else {
      open = "";
      toggled = "";
    }
    this.setState({ open: open, toggled: toggled });
  };

  componentDidMount = () => {
    let loading = this.state.loading;
    let articles = this.state.articles
    fetch("https://newsapi.org/v2/top-headlines?country=in",{
      method:"GET",
      headers:{
        "X-Api-Key": "8f2faecc7d2a400cb3ab407656c6d699"
      }
    }).then(res=>{
      if(res.ok) return res.json()
    }).catch(err=>{
      console.error("Error occurred while fetching data",err)
    }).then(data=>{
      articles = data.articles
      loading = false
      this.setState({loading:loading,articles:articles})
    })
  };

  handleCategoryChange =(cat)=>{
    this.toggleSideBar();
    this.setState({loading:true,articles:[]})
    fetch(`https://newsapi.org/v2/everything?q=${cat.label}`,{
      method:"GET",
      headers:{
        "X-Api-Key": "8f2faecc7d2a400cb3ab407656c6d699"
      }
    }).then(res=>{
      if(res.ok) return res.json()
    }).catch(err=>{
      console.error("Error occurred while fetching data",err)
    }).then(data=>{
      this.setState({loading:false,articles:data.articles})
    })

  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="header z-depth-1">
            <div
              className={`menu clickable ${this.state.open}`}
              onClick={this.toggleSideBar}
            >
              <button className="toggle-button">
                <div className={`nav-icon ${this.state.toggled}`}>
                  <div></div>
                </div>
              </button>
            </div>
            <a href="/">
              <img src={Logo} alt="Logo" className="logo" />
            </a>
          </div>
          <SideBar open={this.state.open} toggleSideBar={this.toggleSideBar} handleCategoryChange = {this.handleCategoryChange} />
        </nav>
        <main>
          {this.state.loading ? (
            <div className="lds-circle"><div></div></div>
          ) : (
            <div className="container">
              <div className="row">
                <div className="card-stack">
                  {this.state.articles.map((article,i) => {
                    return <Card key={i} article={article} />;
                  })}
                </div>
                {/* <div class="load-more-wrapper">
                <div
                  id="load-more-btn"
                  onclick="loadMoreNews()"
                  class="clickable unselectable load-more z-depth-1 hoverable"
                >
                  Load More
                </div>
                <div
                  id="load-more-gif"
                  style={{ display: "none" }}
                  class="clickable unselectable load-more"
                >
                </div>
              </div> */}
              </div>
            </div>
          )}
        </main>
        <footer id="sticky-footer">
              <Footer/>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
