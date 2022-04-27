import React, { Component } from "react";

class Card extends Component {
// title = "card 1"
  render() {
    let {title,btnTitle,price,bgColor,img} :any =this.props;
    return (
      <>
        <div className={`card col-3 p-2 m-2 ${bgColor}`} style={{ width: "18rem" }}>
          <img
            src={require(`../images/${img}`)}
            className="card-img-top"
            alt="..."
          />
          
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Price : {price || 500} $
            </p>
            <a href="#" className="btn btn-primary">
              {btnTitle}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
