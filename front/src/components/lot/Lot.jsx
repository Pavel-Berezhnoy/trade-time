import React, { useEffect, useState } from "react";
import Bet from "../bet/Bet";
import { useDispatch, useSelector } from "react-redux";
import socketClient from "../../socket/instance";
import { Link, useParams } from "react-router-dom";
import { actionsLot } from "../../store/reducers/lotReducer";
import OneLotCard from "../Cards/OneLotCard";
import { lotApi } from "../../api/lotApi";

const Lot = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const [valueBet, setValueBet] = useState(0);
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
    const createBetHandler = async () => {
        if (lot.bets[0]?.price) {
            if (lot.bets[0]?.price < valueBet) {
                const res = await lotApi.upload({
                    lotId: lot.id,
                    price: Number(valueBet)
                });
                setMessage(res.data);
                console.log(res);
            } else {
                setMessage("Ставка должна быть больше последней принятой!");
            }
        } else {
            const res = await lotApi.upload({
                lotId: lot.id,
                price: Number(valueBet)
            })
            setMessage(res.data);
            console.log(res);
        }
    }
    return (
        <div className="wrapper justify-between mx-auto flex md:flex-wrap px-4">
            <div className="flex flex-col mr-4 w-1/3 justify-between md:ml-0 md:order-1 md:w-full lg:w-2/5 md:px-0 md:pb-0">
                <div className="flex-col shadow-md bg-app rounded-3xl flex mb-8 w-full p-6">
                    <h2 className="font-bold text-2xl text-white">Ставка</h2>
                    <div className="flex items-center justify-center md:flex-wrap mt-8 w-full">
                        <div className="w-full flex flex-col pt-1 mr-2 md:mt-6">
                            <label className="font-semibold leading-none">Сделать ставку</label>
                            <input value={valueBet} onChange={e => setValueBet(e.target.value)} type="number" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required />
                            <h2 className="text-lg text-textblack">{message}</h2>
                        </div>
                        <button onClick={createBetHandler} className="mt-9 font-semibold leading-none text-app py-4 px-10 bg-purple rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Создать
                        </button>
                    </div>
                    {/* {user ? <span className="text-base font-normal">
                        Чтобы сделать ставку, нужно
                        <Link className="text-purple" to={"/register"}>
                            зарегестрироваться
                        </Link>
                        или
                        <Link className="text-purple" to={"/login"}>
                            авторизоваться
                        </Link>
                    </span> : ""} */}
                </div>
                <div className="flex-col shadow-md bg-app rounded-3xl flex w-full p-6">
                    <h2 className="font-bold text-2xl text-white">Последние ставки</h2>
                    <div className="max-h-80 overflow-y-scroll">
                        {lot.bets?.map((item, key) => <Bet key={key} price={item.price} username={item.username} />)}
                    </div>
                </div>
            </div>
            {lot?.vehicle ? <OneLotCard key={lot.id} lot={lot.vehicle[0]} images={lot.imgs}></OneLotCard> : <div>Пусто</div>}
        </div >
    )
}

export default Lot;