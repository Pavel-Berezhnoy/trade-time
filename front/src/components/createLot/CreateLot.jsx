import React, { useState } from "react";
import { lotApi } from "../../api/lotApi";

const CreateLot = () => {
    const data = new FormData(document.forms.create);
    const submitAuctionHandle = async (e) => {
        e.preventDefault();
        console.log(data);
        await lotApi.uploadForm(data);
    }
    return (
        <div className="w-full wrapper mx-auto" onSubmit={submitAuctionHandle}>
            <div className="bg-app h-96"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                <div className="bg-app w-full shadow rounded p-8 sm:p-12 -mt-72">
                    <p className="text-3xl font-bold leading-7 text-center">Создание торга</p>
                    <form name="create">
                        <div className="flex items-center mt-12 md:block">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Марка</label>
                                <input name="mark" type="text" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required />
                            </div>
                            <div className="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label className="font-semibold leading-none">Модель</label>
                                <input name="model" type="text" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required/>
                            </div>
                        </div>
                        <div className="flex items-center mt-12 md:block">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Цвет</label>
                                <input name="color" type="text" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required/>
                            </div>
                            <div className="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label className="font-semibold leading-none">Год</label>
                                <input name="year" type="number" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required/>
                            </div>
                        </div>
                        <div className="flex items-center mt-12 md:block">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Пробег</label>
                                <input name="mileage" type="number" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required/>
                            </div>
                            <div className="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label className="font-semibold leading-none mb-8">Фото</label>
                                <input name="images" type="file" multiple accept=".png, .jpg, .jpeg" required/>
                            </div>
                        </div>
                        <div className="flex items-center mt-12 md:block">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Начальная цена</label>
                                <input name="startPrice" type="number" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required/>
                            </div>
                            <div className="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label className="font-semibold leading-none">Время закрытия торга</label>
                                <input name="endTime" type="datetime-local" className="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" required/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 font-semibold leading-none text-app py-4 px-10 bg-purple rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Создать
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateLot;