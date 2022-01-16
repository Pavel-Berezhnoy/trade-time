import React from "react";
import Table from "../tables/Table";
import TableBody from "../tables/TableBody";
import TableHead from "../tables/TableHead";
import img from "C:/Users/79508/Pictures/Screenshots/picture.png"

const Lot = () => {
    return (
        <div className="wrapper h-4/5 justify-between mx-auto flex md:flex-wrap px-4">
            <div className="flex flex-col mr-4 w-1/3 justify-between md:ml-0 md:order-1 md:w-full lg:w-2/5 md:px-0 md:pb-0">
                <div className="flex-col shadow-md bg-app rounded-3xl flex mb-8 w-full p-6">
                    <h2 className="font-bold text-2xl text-white">Ставка</h2>
                </div>
                <div className="flex-col shadow-md bg-app rounded-3xl flex w-full p-6">
                    <h2 className="font-bold text-2xl text-white">Последние ставки</h2>
                    <Table>
                        <TableHead>
                            <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Пользователь</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Ставка</th>
                            </tr>
                        </TableHead>
                        <TableBody>
                            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                <td className="px-4 py-4"></td>
                                <td className="px-4 py-4"></td>
                            </tr>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="flex-col bg-app shadow-md rounded-3xl flex ml-auto mr-auto p-8 md:mt-4 w-2/3 md:order-2 md:w-full lg:w-3/5 px-6">
                <img className="max-w-2xl mx-auto object-cover" src={img} alt="" />
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
                            <td className="px-4 py-4"></td>
                            <td className="px-4 py-4"></td>
                            <td className="px-4 py-4"></td>
                            <td className="px-4 py-4"></td>
                            <td className="px-4 py-4"></td>
                        </tr>
                    </TableBody>
                </Table>
            </div>
        </div >
    )
}

export default Lot;