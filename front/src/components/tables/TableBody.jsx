import React from "react";

const TableBody = (props) => {
    return (
        <tbody className="text-base font-normal text-gray-700">
            {props.children}
        </tbody>
    );
}

export default TableBody;