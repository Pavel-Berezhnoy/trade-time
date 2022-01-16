import React from "react";
import Table from "../tables/Table";
import TableBody from "../tables/TableBody";
import TableHead from "../tables/TableHead";

const Filter = (props) => {
    return (
        <>
            <h1 className="font-bold text-2xl my-10 text-white"> Фильтры </h1>
            <Table>
                <TableHead>
                    <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Начальная цена</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Текущая цена</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Минимальная ставка</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                        <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                        <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                        <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                    </tr>
                </TableBody>
            </Table>
            <Table>
                <TableHead>
                    <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Марка</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Модель</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                        <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                        <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                    </tr>
                </TableBody>
            </Table>
            <Table>
                <TableHead>
                    <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Цвет</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Пробег</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                        <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                        <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                    </tr>
                </TableBody>
            </Table>
            <Table>
                <TableHead>
                    <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                        <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Год выпуска</th>
                        <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Статус</th>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                        <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                        <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                    </tr>
                </TableBody>
            </Table>
        </>
    );
}

export default Filter;