import React from "react";

const Main = () => {
    console.log(Date.now());
    return (
        <div className="wrapper justify-between mx-auto flex md:flex-wrap px-4">
            <div className="flex-col bg-app rounded-3xl flex ml-auto mr-auto pb-4 w-full md:mt-8 w-2/3 md:order-2 md:w-full lg:w-3/5 px-6">
                <h1 className="font-bold text-2xl my-10 text-white"> Последние лоты </h1>
                <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="rounded-lg text-lg font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Название лота</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Пользователь</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Цена</th>
                            </tr>
                        </thead>
                        <tbody className="text-base font-normal text-gray-700">
                            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                <td className="px-4 py-4">Intro to CSS</td>
                                <td className="px-4 py-4">Adam</td>
                                <td className="px-4 py-4">858</td>
                            </tr>
                            <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                                <td className="px-4 py-4 flex items-center">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                                <td className="px-4 py-4">Adam</td>
                                <td className="px-4 py-4">112</td>
                            </tr>
                            <tr className="hover:bg-gray-100  border-gray-200">
                                <td className="px-4 py-4">Intro to JavaScript</td>
                                <td className="px-4 py-4">Chris</td>
                                <td className="px-4 py-4">1,280</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex-col bg-app rounded-3xl flex ml-auto mr-auto w-full md:w-full ml-4 w-1/3 md:ml-0 md:order-1 lg:w-2/5 px-6 pb-4">
                <h1 className="font-bold text-2xl my-10 text-white"> Фильтры </h1>
                <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Начальная цена</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Текущая цена</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Минимальная ставка</th>
                            </tr>
                        </thead>
                        <tbody className="text-base font-normal text-gray-700">
                            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                                <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                                <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Марка</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Модель</th>
                            </tr>
                        </thead>
                        <tbody className="text-base font-normal text-gray-700">
                            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                                <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Цвет</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Пробег</th>
                            </tr>
                        </thead>
                        <tbody className="text-base font-normal text-gray-700">
                            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                                <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr className="rounded-lg text-mg font-medium text-gray-700 text-left">
                                <th className="px-4 py-2 bg-gray-200 " style={{ backgroundColor: "#f8f8f8" }}>Год выпуска</th>
                                <th className="px-4 py-2 " style={{ backgroundColor: "#f8f8f8" }}>Статус</th>
                            </tr>
                        </thead>
                        <tbody className="text-base font-normal text-gray-700">
                            <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                            <td className="px-4 py-4"><input type="number" className="w-full px-4 py-1 font-semibold text-center bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                                <td className="px-4 py-4"><input type="text" className="w-full font-semibold px-4 py-1 bg-gray-200 border border-solid border-textblack outline-none focus:outline-none focus:text-black" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default Main;