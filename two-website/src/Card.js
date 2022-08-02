import React from "react";

const Card = ({title="BasketBall",myButton="ButtonText",paragraph="",image=""}) =>{
    return (
<div className="card" style={{width: "18rem"}}>
                <img
                  src={image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                   {paragraph}
                  </p>
                  <a href="#" className="btn btn-success">{myButton}</a>
                </div>
              </div>
    )
}

export default Card;