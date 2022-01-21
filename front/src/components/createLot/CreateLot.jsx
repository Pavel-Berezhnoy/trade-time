import React from "react";

const CreateLot = () => {
    return (
        <div class="w-full wrapper mx-auto">
            <div class="bg-app h-96"></div>
            <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                <div class="bg-app w-full shadow rounded p-8 sm:p-12 -mt-72">
                    <p class="text-3xl font-bold leading-7 text-center">Создание торга</p>
                    <form action="" method="post">
                        <div class="flex items-center mt-12 md:block">
                            <div class="w-full flex flex-col">
                                <label class="font-semibold leading-none">Марка</label>
                                <input type="text" class="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" />
                            </div>
                            <div class="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label class="font-semibold leading-none">Модель</label>
                                <input type="email" class="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" />
                            </div>
                        </div>
                        <div class="flex items-center mt-12 md:block">
                            <div class="w-full flex flex-col">
                                <label class="font-semibold leading-none">Цвет</label>
                                <input type="text" class="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" />
                            </div>
                            <div class="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label class="font-semibold leading-none">Год</label>
                                <input type="email" class="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" />
                            </div>
                        </div>
                        <div class="flex items-center mt-12 md:block">
                            <div class="w-full flex flex-col">
                                <label class="font-semibold leading-none">Пробег</label>
                                <input type="text" class="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" />
                            </div>
                            <div class="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label class="font-semibold leading-none mb-8">Фото</label>
                                <input type="file"/>
                            </div>
                        </div>
                        <div class="flex items-center mt-12 md:block">
                            <div class="w-full flex flex-col">
                                <label class="font-semibold leading-none">Начальная цена</label>
                                <input type="text" class="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" />
                            </div>
                            <div class="w-full flex flex-col ml-6 md:ml-0 md:mt-6">
                                <label class="font-semibold leading-none">Время закрытия торга</label>
                                <input type="email" class="leading-none text-textblack p-3 focus:outline-none focus:border-purple mt-4 bg-gray-100 border rounded border-textblack border-solid" />
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-full">
                            <button class="mt-9 font-semibold leading-none text-app py-4 px-10 bg-purple rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
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