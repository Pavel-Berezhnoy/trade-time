import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import socketClient from "../../socket/instance";
import { actionsLots } from "../../store/reducers/lotsReducer";
import { Link } from "react-router-dom";

const LotCard = (props) => {
    const lot = props.lot;
    const dispatch = useDispatch();
    useEffect(() => {
        socketClient.on("connect", () => {
            socketClient.emit("subscribe_lot", lot.id)
        });
        socketClient.on("new_bet", (bet) => {
            dispatch(actionsLots.setLot(bet));
        });
        return () => { socketClient.on("unsubscribe_lot", lot.id); }
    }, [dispatch, lot]);
    console.log(lot);
    return (
        <tr className="hover:bg-gray-100 border-gray-200">
            <td className="px-4 py-4">image</td>
            <td className="px-4 py-4"><Link to={`/lot/${lot.id}`}>{`${lot.vehicle[0].mark} ${lot.vehicle[0].model} ${lot.vehicle[0].year}`}</Link></td>
            <td className="px-4 py-4">{`${lot.vehicle[0].color}`}</td>
            <td className="px-4 py-4">{`${lot.vehicle[0].mileage}`}</td>
            <td className="px-4 py-4">{`${lot.user.username}`}</td>
            <td className="px-4 py-4">{`${lot.startPrice} $`}</td>
            <td className="px-4 py-4">{`${lot.bets[lot.bets.length - 1]?.price || lot.startPrice} $`}</td>
        </tr>
    );
}

export default LotCard;