import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <React.Fragment>
                <div>
                  <div className="card z-depth-1">
                    <div className="card-image"
                         style={{backgroundImage: `url(${this.props.article.urlToImage})`}}
                    ></div>
                    <div className="card-title right-box">
                      <a
                        className="clickable"
                        // onclick=""
                        style={{"color":"#44444d!important"}}
                        href={`${this.props.article.url}`}
                      >
                        <span itemProp="headline">
                          {this.props.article.title}
                        </span>
                      </a>
                    </div>
                    <div className="card-content right-box">
                      <div itemProp="articleBody">
                        {this.props.article.content}
                      </div>
                    </div>
                    <div className="card-footer right-box">
                      <div className="read-more">
                        Read more at{" "}
                        <a
                          className="source"
                        //   onclick=""
                          rel = "noopener noreferrer"
                          target="_blank"
                          href={this.props.article.url}
                        >
                          {this.props.article.source.name}
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>
            </React.Fragment>
        )
    }
}

export default Card