import React from "react";
import Filter from "../filters/Filter";
import TableLots from "../tables/TableLots";

const AllLots = () => {
    return (
        <div className="wrapper justify-between mx-auto flex md:flex-wrap px-4">
            <div className="flex-col bg-app rounded-3xl flex ml-auto mr-auto w-full md:w-full mr-4 w-1/3 md:ml-0 md:order-1 lg:w-2/5 px-6 pb-4">
                <Filter></Filter>
            </div>
            <div className="flex-col bg-app rounded-3xl flex ml-auto mr-auto pb-4 w-full md:mt-8 w-2/3 md:order-2 md:w-full lg:w-3/5 px-6">
                <h1 className="font-bold text-2xl my-10 text-white"> Актуальные лоты </h1>
                <TableLots></TableLots>
            </div>
        </div >
    );
}

export default AllLots;