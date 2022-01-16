import React from "react";

const Bet = (props) => {
    return (
        <div className="justify-around flex md:flex-wrap px-8 py-8 shadow-md rounded w-full my-2 max-w-xl">
          <div className="basis-1/2">
            {props.username}
          </div>
          <div className="basis-1/2 text-green text-right">
            {props.price} $
          </div>
        </div >
    )
}

export default Bet;