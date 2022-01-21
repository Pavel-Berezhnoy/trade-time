import React from "react";
import Table from "../tables/Table";
import TableBody from "../tables/TableBody";
import TableHead from "../tables/TableHead";

const OneLotCard = (props) => {
    return (
        <div className="flex-col bg-app shadow-md rounded-3xl flex ml-auto mr-auto p-8 md:mt-4 w-2/3 md:order-2 md:w-full lg:w-3/5 px-6">
            <img className="max-w-2xl mx-auto object-cover" src="" alt="" />
            <h2 className="font-bold text-2xl mt-16 text-white">Описание</h2>
            <Table>
                <TableHead>
                    <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Марка</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Модель</th>
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Год выпуска</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Цвет</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Пробег</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                        <td className="px-4 py-4">{props.lot.mark}</td>
                        <td className="px-4 py-4">{props.lot.model}</td>
                        <td className="px-4 py-4">{props.lot.year}</td>
                        <td className="px-4 py-4">{props.lot.color}</td>
                        <td className="px-4 py-4">{props.lot.mileage}</td>
                    </tr>
                </TableBody>
            </Table>
        </div>
    );
}

export default OneLotCard;