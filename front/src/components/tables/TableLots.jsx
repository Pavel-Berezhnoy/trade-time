import React from "react";
import LotCard from "../Cards/lotCard";

const TableLots = (props) => {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr className="rounded-lg text-lg font-medium text-gray-700 text-left">
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}></th>
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Автомобиль</th>
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Цвет</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Пробег</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Пользователь</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Начальная цена</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Текущая цена</th>
                    </tr>
                </thead>
                <tbody className="text-base font-normal text-gray-700">
                    <LotCard></LotCard>
                </tbody>
            </table>
        </div>
    );
}

export default TableLots;