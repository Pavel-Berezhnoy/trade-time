import React, { useEffect } from "react";
import Bet from "../bet/Bet";
import { useDispatch, useSelector } from "react-redux";
import socketClient from "../../socket/instance";
import { Link, useParams } from "react-router-dom";
import { actionsLot } from "../../store/reducers/lotReducer";
import OneLotCard from "../Cards/OneLotCard";

const Lot = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        socketClient.emit("subscribe_lot", id, (lot) => {
            dispatch(actionsLot.setOneLot(lot));
        })
        socketClient.on("new_bet", (bet) => {
            dispatch(actionsLot.setLotBet(bet));
        });
        return () => { socketClient.on("unsubscribe_lot", id); }
    }, [id, dispatch]);
    const lot = useSelector(state => state.lotReducer.lot) || {};
    const user = useSelector(state => state.userReducer.data) || {};
    return (
        <div className="wrapper h-4/5 justify-between mx-auto flex md:flex-wrap px-4">
            <div className="flex flex-col mr-4 w-1/3 justify-between md:ml-0 md:order-1 md:w-full lg:w-2/5 md:px-0 md:pb-0">
                <div className="flex-col shadow-md bg-app rounded-3xl flex mb-8 w-full p-6">
                    <h2 className="font-bold text-2xl text-white">Ставка</h2>
                    {user ? <span className="text-base font-normal">Чтобы сделать ставку, нужно <Link className="text-purple" to={"/register"}>зарегестрироваться</Link> или <Link className="text-purple" to={"/login"}>авторизоваться</Link></span> : ""}
                </div>
                <div className="flex-col shadow-md bg-app rounded-3xl flex w-full p-6">
                    <h2 className="font-bold text-2xl text-white">Последние ставки</h2>
                    <div className="max-h-80 overflow-y-scroll">
                        {lot.bets?.map((item, key) => <Bet key={key} price={item.price} username={item.username} />)}
                    </div>
                </div>
            </div>
            {lot?.vehicle ? <OneLotCard key={lot.id} lot={lot.vehicle[0]}></OneLotCard> : <div>Пусто</div>}
        </div >
    )
}

export default Lot;