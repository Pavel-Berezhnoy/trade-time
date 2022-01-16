import React from "react";

const Table = (props) => {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="table-auto border-collapse w-full">
                {props.children}
            </table>
        </div>
    );
}

export default Table;